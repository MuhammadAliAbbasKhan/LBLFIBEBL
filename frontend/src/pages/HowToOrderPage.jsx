import React from 'react';
import { ShoppingCart, CreditCard, ShieldCheck } from 'lucide-react';

export const HowToOrderPageComponent = ({ openCheckoutModal, openTrialModal }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white uppercase tracking-wider">HOW TO ORDER LBLFIBEBL LICENSES</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-3">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center">1</div>
        <h3 className="text-base font-bold text-white">Select License Tier</h3>
        <p>Choose Basic Academic ($99/mo), Standard Commercial ($299/mo), or Enterprise ($599/mo) plan.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-3">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center">2</div>
        <h3 className="text-base font-bold text-white">Stripe Instant Activation</h3>
        <p>Complete payment using credit card via encrypted Stripe checkout gateway.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-3">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center">3</div>
        <h3 className="text-base font-bold text-white">Receive License Key</h3>
        <p>License key and backend API tokens are generated and emailed instantly.</p>
      </div>
    </div>
  </div>
);

export const HowToOrderPage = HowToOrderPageComponent;
export default HowToOrderPageComponent;
