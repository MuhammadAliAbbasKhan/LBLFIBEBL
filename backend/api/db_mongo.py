import logging
from django.conf import settings

logger = logging.getLogger(__name__)

def get_mongo_db():
    try:
        from pymongo import MongoClient
        uri = getattr(settings, 'MONGODB_URI', None)
        if not uri:
            return None
        client = MongoClient(uri, serverSelectionTimeoutMS=2000)
        return client['lblfibebl_db']
    except Exception as e:
        logger.warning(f"MongoDB connection failed: {e}")
        return None

def sync_subscription_to_mongodb(sub_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        data = {
            'email': sub_obj.email,
            'full_name': sub_obj.full_name,
            'plan_tier': sub_obj.plan_tier,
            'billing_cycle': sub_obj.billing_cycle,
            'is_active': sub_obj.is_active,
            'payment_reference': sub_obj.payment_reference,
            'stripe_payment_intent_id': sub_obj.stripe_payment_intent_id,
            'created_at': sub_obj.created_at.isoformat() if sub_obj.created_at else None,
        }
        db['lblfibebl_subscriptions'].update_one(
            {'email': sub_obj.email},
            {'$set': data},
            upsert=True
        )
        db['lblfibebl_users'].update_one(
            {'email': sub_obj.email},
            {'$set': {'email': sub_obj.email, 'full_name': sub_obj.full_name, 'plan_tier': sub_obj.plan_tier}},
            upsert=True
        )
        return True
    except Exception as e:
        logger.error(f"Failed to sync subscription to MongoDB: {e}")
        return False

def sync_trial_request_to_mongodb(trial_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        data = {
            'full_name': trial_obj.full_name,
            'email': trial_obj.email,
            'company': trial_obj.company,
            'software_choice': trial_obj.software_choice,
            'comments': trial_obj.comments,
            'created_at': trial_obj.created_at.isoformat() if trial_obj.created_at else None,
        }
        db['lblfibebl_trials'].insert_one(data)
        return True
    except Exception as e:
        logger.error(f"Failed to sync trial to MongoDB: {e}")
        return False

def sync_contact_inquiry_to_mongodb(inquiry_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        data = {
            'name': inquiry_obj.name,
            'email': inquiry_obj.email,
            'subject': inquiry_obj.subject,
            'message': inquiry_obj.message,
            'created_at': inquiry_obj.created_at.isoformat() if inquiry_obj.created_at else None,
        }
        db['lblfibebl_inquiries'].insert_one(data)
        return True
    except Exception as e:
        logger.error(f"Failed to sync inquiry to MongoDB: {e}")
        return False

def sync_service_request_to_mongodb(req_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        data = {
            'user_name': req_obj.user_name,
            'user_email': req_obj.user_email,
            'company_name': req_obj.company_name,
            'project_title': req_obj.project_title,
            'service_type': req_obj.service_type,
            'industry': req_obj.industry,
            'wavelength_range': req_obj.wavelength_range,
            'system_specifications': req_obj.system_specifications,
            'status': req_obj.status,
            'admin_notes': req_obj.admin_notes,
            'created_at': req_obj.created_at.isoformat() if req_obj.created_at else None,
        }
        db['lblfibebl_service_requests'].insert_one(data)
        return True
    except Exception as e:
        logger.error(f"Failed to sync CAD service request to MongoDB: {e}")
        return False
