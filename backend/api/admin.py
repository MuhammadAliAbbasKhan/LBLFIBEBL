from django.contrib import admin
from .models import UserSubscription, TrialRequest, ContactInquiry, OpticalServiceRequest, SoftwareProduct

@admin.register(UserSubscription)
class UserSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('email', 'full_name', 'plan_tier', 'billing_cycle', 'is_active', 'created_at')
    search_fields = ('email', 'full_name', 'payment_reference')

@admin.register(TrialRequest)
class TrialRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'company', 'software_choice', 'created_at')
    search_fields = ('full_name', 'email', 'company')

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')

@admin.register(OpticalServiceRequest)
class OpticalServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('project_title', 'user_name', 'user_email', 'service_type', 'status', 'created_at')
    list_filter = ('status', 'service_type')
    search_fields = ('project_title', 'user_name', 'user_email')

@admin.register(SoftwareProduct)
class SoftwareProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'code_name', 'category', 'version')
