from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path('auth/login/', views.login_view, name='login'),
    path('auth/register/', views.register_view, name='register'),
    
    # Subscriptions & Stripe
    path('stripe/create-payment-intent/', views.create_payment_intent_view, name='create_payment_intent'),
    path('subscribe/', views.subscribe_view, name='subscribe'),
    
    # User Submissions
    path('trial/request/', views.request_trial_view, name='request_trial'),
    path('contact/', views.submit_contact_view, name='submit_contact'),
    path('service-request/', views.submit_service_request_view, name='submit_service_request'),

    # Executive Admin Console
    path('admin/analytics/', views.admin_analytics_view, name='admin_analytics'),
    path('admin/users/', views.admin_users_view, name='admin_users'),
    path('admin/users/update-plan/', views.admin_update_plan_view, name='admin_update_plan'),
]
