from rest_framework import serializers
from .models import UserSubscription, TrialRequest, ContactInquiry, OpticalServiceRequest, SoftwareProduct

class UserSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscription
        fields = '__all__'

class TrialRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrialRequest
        fields = '__all__'

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = '__all__'

class OpticalServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = OpticalServiceRequest
        fields = '__all__'

class SoftwareProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoftwareProduct
        fields = '__all__'
