from django.db import models
from django.utils import timezone

class UserSubscription(models.Model):
    PLAN_CHOICES = (
        ('basic', 'Basic Academic'),
        ('standard', 'Standard Commercial'),
        ('premium', 'Enterprise Foundry'),
    )
    BILLING_CHOICES = (
        ('monthly', 'Monthly'),
        ('yearly', 'Yearly'),
    )

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255, blank=True)
    plan_tier = models.CharField(max_length=20, choices=PLAN_CHOICES, default='standard')
    billing_cycle = models.CharField(max_length=20, choices=BILLING_CHOICES, default='yearly')
    is_active = models.BooleanField(default=True)
    payment_reference = models.CharField(max_length=100, blank=True)
    stripe_payment_intent_id = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.email} ({self.plan_tier})"

class TrialRequest(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    company = models.CharField(max_length=255)
    software_choice = models.CharField(max_length=100, default='LBLFIBEBL Suite')
    comments = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Trial: {self.full_name} ({self.company})"

class ContactInquiry(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Inquiry from {self.name}: {self.subject}"

class OpticalServiceRequest(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending Review'),
        ('in_progress', 'Engineering Review'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    )

    user_name = models.CharField(max_length=255)
    user_email = models.EmailField()
    company_name = models.CharField(max_length=255, blank=True)
    project_title = models.CharField(max_length=255, default='Lithography CAD Spec')
    service_type = models.CharField(max_length=100, default='EBL Patterning')
    industry = models.CharField(max_length=100, default='Quantum Computing')
    wavelength_range = models.CharField(max_length=255, blank=True) # Used for voltage/resist/substrate
    system_specifications = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    admin_notes = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"CAD Spec: {self.project_title} by {self.user_name}"

class SoftwareProduct(models.Model):
    name = models.CharField(max_length=255)
    code_name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    category = models.CharField(max_length=100, default='Lithography')
    version = models.CharField(max_length=20, default='5.2.0')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.name} v{self.version}"
