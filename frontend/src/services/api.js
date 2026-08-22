import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Authentication
  login: async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login/', credentials);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Login failed' };
    }
  },

  register: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register/', userData);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Registration failed' };
    }
  },

  // Subscriptions & Stripe
  createPaymentIntent: async (data) => {
    try {
      const response = await apiClient.post('/stripe/create-payment-intent/', data);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Payment intent creation failed' };
    }
  },

  subscribe: async (data) => {
    try {
      const response = await apiClient.post('/subscribe/', data);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Subscription failed' };
    }
  },

  // Trial & Inquiries
  requestTrial: async (trialData) => {
    try {
      const response = await apiClient.post('/trial/request/', trialData);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Trial request failed' };
    }
  },

  submitContact: async (contactData) => {
    try {
      const response = await apiClient.post('/contact/', contactData);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Inquiry submission failed' };
    }
  },

  submitServiceRequest: async (serviceData) => {
    try {
      const response = await apiClient.post('/service-request/', serviceData);
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Service request failed' };
    }
  },

  // Executive Admin Console
  getAdminAnalytics: async (passcode) => {
    try {
      const response = await apiClient.get('/admin/analytics/', {
        headers: { 'X-Admin-Passcode': passcode }
      });
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Admin authorization failed' };
    }
  },

  getAdminUsers: async (passcode) => {
    try {
      const response = await apiClient.get('/admin/users/', {
        headers: { 'X-Admin-Passcode': passcode }
      });
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to fetch users' };
    }
  },

  updateUserPlan: async (passcode, payload) => {
    try {
      const response = await apiClient.post('/admin/users/update-plan/', payload, {
        headers: { 'X-Admin-Passcode': passcode }
      });
      return response.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Failed to update plan' };
    }
  }
};

export default apiService;
