import React from 'react';

export const HowToOrderPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Ordering Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          How to Order LBLFIBEBL Software & Services
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 max-w-5xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] font-bold flex items-center justify-center border border-blue-200">1</div>
          <h3 className="text-base font-bold text-slate-900">Select License Tier</h3>
          <p className="leading-relaxed">Choose Basic Academic ($99/mo), Standard Commercial ($299/mo), or Enterprise ($599/mo) subscription plan.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] font-bold flex items-center justify-center border border-blue-200">2</div>
          <h3 className="text-base font-bold text-slate-900">Stripe Instant Activation</h3>
          <p className="leading-relaxed">Complete payment securely using credit card or invoice via encrypted Stripe checkout gateway.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] font-bold flex items-center justify-center border border-blue-200">3</div>
          <h3 className="text-base font-bold text-slate-900">Receive License Key</h3>
          <p className="leading-relaxed">License key and backend API tokens are generated and sent to your email instantly.</p>
        </div>
      </div>
    </div>
  </div>
);

export const HowToOrderPage = HowToOrderPageComponent;
export default HowToOrderPageComponent;
