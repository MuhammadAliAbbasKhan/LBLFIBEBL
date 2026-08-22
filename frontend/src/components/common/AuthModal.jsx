import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, Sparkles } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import apiService from '../../services/api';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess, openCheckout }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isRegister) {
      const res = await apiService.register({
        email,
        password,
        full_name: fullName,
        plan_tier: selectedPlan
      });
      setLoading(false);
      if (res.success) {
        addToast(res.message || 'Account created successfully! Proceeding to subscription setup...', 'success');
        onLoginSuccess(res.user || { name: fullName, email, plan: selectedPlan });
        onClose();
        if (openCheckout) openCheckout(selectedPlan);
      } else {
        addToast(res.message || 'Registration failed', 'error');
      }
    } else {
      const res = await apiService.login({ email, password });
      setLoading(false);
      if (res.success) {
        addToast(res.message || 'Successfully logged in!', 'success');
        onLoginSuccess(res.user);
        onClose();
      } else {
        addToast(res.message || 'Invalid credentials', 'error');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl text-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {isRegister ? 'Create LBLFIBEBL Account' : 'Sign In to LBLFIBEBL'}
            </h3>
            <p className="text-xs text-gray-400">
              {isRegister ? 'Access advanced nanofabrication simulation suite' : 'Manage your quantum optics & lithography workbench'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Dr. Hans Weber"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@institution.com"
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Select Subscription Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'basic', name: 'Basic', price: '$99/mo' },
                  { id: 'standard', name: 'Standard', price: '$299/mo' },
                  { id: 'premium', name: 'Premium', price: '$599/mo' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      selectedPlan === tier.id
                        ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300 font-semibold'
                        : 'border-gray-800 bg-gray-800/40 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <div className="text-xs">{tier.name}</div>
                    <div className="text-[10px] opacity-75">{tier.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Processing...</span>
            ) : isRegister ? (
              <>
                <Sparkles className="w-4 h-4" /> Continue to Checkout
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" /> Sign In
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-xs text-gray-400">
          {isRegister ? 'Already registered?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-cyan-400 hover:underline font-semibold ml-1"
          >
            {isRegister ? 'Sign In' : 'Create Account'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
