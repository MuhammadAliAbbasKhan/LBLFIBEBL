import uuid
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib import messages
from django.conf import settings
from .models import UserSubscription, TrialRequest, ContactInquiry, OpticalServiceRequest, SoftwareProduct
from .serializers import (
    UserSubscriptionSerializer,
    TrialRequestSerializer,
    ContactInquirySerializer,
    OpticalServiceRequestSerializer,
    SoftwareProductSerializer
)
from .db_mongo import (
    sync_subscription_to_mongodb,
    sync_trial_request_to_mongodb,
    sync_contact_inquiry_to_mongodb,
    sync_service_request_to_mongodb
)

def extract_django_messages(request, default_level='info', fallback_msg=None):
    msg_list = []
    storage = messages.get_messages(request)
    for msg in storage:
        level_tag = msg.level_tag or default_level
        if level_tag == 'danger':
            level_tag = 'error'
        msg_list.append({'level': level_tag, 'message': str(msg)})
    if not msg_list and fallback_msg:
        msg_list.append({'level': default_level, 'message': fallback_msg})
    return msg_list

def verify_admin_access(request):
    passcode = request.headers.get('X-Admin-Passcode') or request.META.get('HTTP_X_ADMIN_PASSCODE')
    expected_passcode = getattr(settings, 'ADMIN_PASSCODE', 'aliabbas1234578!')
    return passcode == expected_passcode

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        messages.error(request, "Email and password are required.")
        return Response({
            'success': False,
            'message': 'Email and password required',
            'messages': extract_django_messages(request)
        }, status=400)

    # Lookup subscription
    sub, created = UserSubscription.objects.get_or_create(
        email=email,
        defaults={'full_name': email.split('@')[0], 'plan_tier': 'standard', 'is_active': True}
    )
    if created:
        sync_subscription_to_mongodb(sub)

    messages.success(request, f"Welcome back, {sub.full_name or sub.email}!")
    return Response({
        'success': True,
        'message': 'Login successful',
        'user': {
            'id': sub.id,
            'email': sub.email,
            'name': sub.full_name,
            'plan': sub.plan_tier,
            'is_active': sub.is_active
        },
        'messages': extract_django_messages(request)
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    full_name = request.data.get('full_name', '')
    plan_tier = request.data.get('plan_tier', 'standard')

    if not email or not password:
        messages.error(request, "Registration requires valid email and password.")
        return Response({
            'success': False,
            'message': 'Email and password required',
            'messages': extract_django_messages(request)
        }, status=400)

    sub, created = UserSubscription.objects.get_or_create(
        email=email,
        defaults={
            'full_name': full_name or email.split('@')[0],
            'plan_tier': plan_tier,
            'is_active': True,
            'payment_reference': f"REG-{uuid.uuid4().hex[:8].upper()}"
        }
    )

    if not created:
        sub.full_name = full_name or sub.full_name
        sub.plan_tier = plan_tier
        sub.save()

    sync_subscription_to_mongodb(sub)
    messages.success(request, f"Account created for {sub.email}. Proceed to checkout.")

    return Response({
        'success': True,
        'message': 'Account registered successfully',
        'user': {
            'id': sub.id,
            'email': sub.email,
            'name': sub.full_name,
            'plan': sub.plan_tier,
        },
        'messages': extract_django_messages(request)
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def create_payment_intent_view(request):
    plan_tier = request.data.get('plan_tier', 'standard')
    billing_cycle = request.data.get('billing_cycle', 'yearly')
    email = request.data.get('email', 'guest@lblfibebl.com')

    prices = {
        'basic': 79 if billing_cycle == 'yearly' else 99,
        'standard': 239 if billing_cycle == 'yearly' else 299,
        'premium': 479 if billing_cycle == 'yearly' else 599,
    }
    amount = prices.get(plan_tier, 239) * 100 # cents

    mock_client_secret = f"pi_lblfibebl_{uuid.uuid4().hex[:12]}_secret_{uuid.uuid4().hex[:8]}"
    messages.info(request, f"Stripe PaymentIntent generated for {plan_tier} tier (${amount/100:.2f}).")

    return Response({
        'success': True,
        'client_secret': mock_client_secret,
        'amount': amount,
        'currency': 'usd',
        'messages': extract_django_messages(request)
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def subscribe_view(request):
    email = request.data.get('email')
    plan_tier = request.data.get('plan_tier', 'standard')
    billing_cycle = request.data.get('billing_cycle', 'yearly')
    payment_intent_id = request.data.get('payment_intent_id', '')

    if not email:
        return Response({'success': False, 'message': 'Email required'}, status=400)

    payment_ref = f"STRIPE-LBL-{uuid.uuid4().hex[:8].upper()}"
    sub, _ = UserSubscription.objects.get_or_create(email=email)
    sub.plan_tier = plan_tier
    sub.billing_cycle = billing_cycle
    sub.is_active = True
    sub.payment_reference = payment_ref
    sub.stripe_payment_intent_id = payment_intent_id
    sub.save()

    sync_subscription_to_mongodb(sub)
    messages.success(request, f"License activated! Reference: {payment_ref}")

    return Response({
        'success': True,
        'message': f"LBLFIBEBL {plan_tier.capitalize()} Subscription Activated",
        'payment_reference': payment_ref,
        'messages': extract_django_messages(request)
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def request_trial_view(request):
    serializer = TrialRequestSerializer(data=request.data)
    if serializer.is_valid():
        trial_obj = serializer.save()
        sync_trial_request_to_mongodb(trial_obj)
        messages.success(request, "Evaluation license request submitted successfully.")
        return Response({
            'success': True,
            'message': 'Trial request registered',
            'data': serializer.data,
            'messages': extract_django_messages(request)
        })
    return Response({'success': False, 'errors': serializer.errors}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_contact_view(request):
    serializer = ContactInquirySerializer(data=request.data)
    if serializer.is_valid():
        inquiry_obj = serializer.save()
        sync_contact_inquiry_to_mongodb(inquiry_obj)
        messages.success(request, "Thank you! Your message has been sent to our application engineers.")
        return Response({
            'success': True,
            'message': 'Inquiry submitted',
            'data': serializer.data,
            'messages': extract_django_messages(request)
        })
    return Response({'success': False, 'errors': serializer.errors}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def submit_service_request_view(request):
    serializer = OpticalServiceRequestSerializer(data=request.data)
    if serializer.is_valid():
        req_obj = serializer.save()
        sync_service_request_to_mongodb(req_obj)
        messages.success(request, "CAD Technical specification submitted to LBLFIBEBL foundry team!")
        return Response({
            'success': True,
            'message': 'CAD Service request recorded',
            'data': serializer.data,
            'messages': extract_django_messages(request)
        })
    return Response({'success': False, 'errors': serializer.errors}, status=400)

# Executive Admin Console Endpoints
@api_view(['GET'])
@permission_classes([AllowAny])
def admin_analytics_view(request):
    if not verify_admin_access(request):
        messages.error(request, "Unauthorized admin access: Invalid passcode.")
        return Response({
            'success': False,
            'message': 'Unauthorized admin access',
            'messages': extract_django_messages(request)
        }, status=403)

    total_users = UserSubscription.objects.count()
    active_subs = UserSubscription.objects.filter(is_active=True).count()
    trials = TrialRequest.objects.count()
    inquiries = ContactInquiry.objects.count()
    service_reqs = OpticalServiceRequest.objects.count()

    return Response({
        'success': True,
        'data': {
            'total_users': total_users,
            'active_subscriptions': active_subs,
            'trial_requests': trials,
            'contact_inquiries': inquiries,
            'service_requests': service_reqs,
        },
        'messages': extract_django_messages(request)
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def admin_users_view(request):
    if not verify_admin_access(request):
        return Response({'success': False, 'message': 'Unauthorized admin access'}, status=403)

    subs = UserSubscription.objects.all().order_by('-created_at')
    serializer = UserSubscriptionSerializer(subs, many=True)
    return Response({'success': True, 'users': serializer.data})

@api_view(['POST'])
@permission_classes([AllowAny])
def admin_update_plan_view(request):
    if not verify_admin_access(request):
        return Response({'success': False, 'message': 'Unauthorized admin access'}, status=403)

    email = request.data.get('email')
    new_plan = request.data.get('plan_tier')

    try:
        sub = UserSubscription.objects.get(email=email)
        sub.plan_tier = new_plan
        sub.save()
        sync_subscription_to_mongodb(sub)
        return Response({'success': True, 'message': f"Updated {email} to {new_plan}"})
    except UserSubscription.DoesNotExist:
        return Response({'success': False, 'message': 'User not found'}, status=44)
