import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle, Zap } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import apiService from '../../services/api';

export const CheckoutModal = ({ isOpen, onClose, selectedPlan = 'standard', user }) => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const planPricing = {
    basic: { monthly: 99, yearly: 79 },
    standard: { monthly: 299, yearly: 239 },
    premium: { monthly: 599, yearly: 479 },
  };

  const currentPrice = planPricing[selectedPlan] ? planPricing[selectedPlan][billingCycle] : 239;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    const intentRes = await apiService.createPaymentIntent({
      plan_tier: selectedPlan,
      billing_cycle: billingCycle,
      email: user?.email || 'guest@lblfibebl.com',
    });

    if (intentRes.success) {
      const subRes = await apiService.subscribe({
        user_id: user?.id,
        email: user?.email || 'guest@lblfibebl.com',
        plan_tier: selectedPlan,
        billing_cycle: billingCycle,
        payment_intent_id: intentRes.client_secret,
      });

      setLoading(false);
      if (subRes.success) {
        addToast(subRes.message || 'Subscription activated successfully!', 'success');
        onClose();
      } else {
        addToast(subRes.message || 'Subscription activation failed', 'error');
      }
    } else {
      setLoading(false);
      addToast(intentRes.message || 'Stripe processing error', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl text-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              LBLFIBEBL Software License Checkout
            </h3>
            <p className="text-xs text-gray-400">
              Stripe Secure Encrypted Payment Gateway
            </p>
          </div>
        </div>

        {/* Plan Summary */}
        <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-sm font-semibold uppercase text-cyan-400 tracking-wide">
                {selectedPlan} Tier License
              </span>
              <div className="text-xs text-gray-400">Full Nanofabrication & Physics Engine Suite</div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-white">${currentPrice}</span>
              <span className="text-xs text-gray-400">/mo</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-700/60 text-xs">
            <span className="text-gray-300 font-medium">Billing Term:</span>
            <div className="flex bg-gray-900 p-1 rounded-lg border border-gray-700">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1 rounded-md transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">-20%</span>
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleCheckout} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Card Number
            </label>
            <input
              type="text"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4242 •••• •••• 4242"
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Expiry (MM/YY)
              </label>
              <input
                type="text"
                required
                value={cardExp}
                onChange={(e) => setCardExp(e.target.value)}
                placeholder="12/28"
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                CVC / CVV
              </label>
              <input
                type="text"
                required
                value={cardCvc}
                onChange={(e) => setCardCvc(e.target.value)}
                placeholder="888"
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span className="animate-pulse">Authorizing Stripe...</span>
            ) : (
              <>
                <ShieldCheck className="w-5 h-5" /> Pay ${currentPrice} & Activate License
              </>
            )}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 256-bit SSL encrypted • Instant license activation
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
