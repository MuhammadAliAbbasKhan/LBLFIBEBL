import React, { useState } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const ShopPageComponent = ({ openCheckoutModal }) => {
  const [billing, setBilling] = useState('yearly');

  const plans = [
    {
      id: 'basic',
      name: 'Basic Academic',
      desc: 'For university researchers & single-user physics optics modeling',
      priceMonthly: 99,
      priceYearly: 79,
      features: [
        '2D LBL Laser Optics Canvas',
        'Gaussian Beam Propagation Solver',
        'Standard Lens Refraction Models',
        'Community Forum Support',
        '1 Active User License'
      ]
    },
    {
      id: 'standard',
      name: 'Standard Commercial',
      desc: 'For nanofabrication labs, EBL/FIB tool operators & R&D teams',
      priceMonthly: 299,
      priceYearly: 239,
      popular: true,
      features: [
        'Complete LBLFIBEBL Simulation Suite',
        '100kV EBL Electron Scattering Engine',
        'FIB Ion Milling & Dose Calculator',
        'GDSII & OASIS CAD File Export',
        'Priority Technical Support & Live Chat',
        'Up to 5 Concurrent Team Licenses'
      ]
    },
    {
      id: 'premium',
      name: 'Enterprise Foundry',
      desc: 'For semiconductor foundries, cleanroom facilities & quantum centers',
      priceMonthly: 599,
      priceYearly: 479,
      features: [
        'Full 150kV EBL + Multi-Ion Beam (FIB) Module',
        'Dual SQLite + MongoDB Cloud Atlas Sync',
        'Custom PyMongo API Database Integrations',
        'Dedicated Nanofabrication Application Engineer',
        '24/7 SLA Support & On-Site Calibration',
        'Unlimited User Licenses'
      ]
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            Commercial & Software Subscriptions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            LBLFIBEBL Software & System Licensing
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing backed by Stripe encrypted payment processing and instant license key activation.
          </p>

          {/* Toggle Monthly / Yearly */}
          <div className="pt-4 flex items-center justify-center">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  billing === 'monthly' ? 'bg-[#0066FF] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  billing === 'yearly' ? 'bg-[#0066FF] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Yearly Billing <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = billing === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`relative bg-white border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all ${
                  plan.popular
                    ? 'border-[#0066FF] ring-2 ring-[#0066FF]/20 shadow-blue-500/10'
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0066FF] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-600 min-h-[32px]">{plan.desc}</p>
                  <div className="pt-2">
                    <span className="text-4xl font-extrabold text-slate-900">${price}</span>
                    <span className="text-xs text-slate-500">/month</span>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => openCheckoutModal(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-blue-600/20'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" /> Subscribe & Pay via Stripe
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ShopPage = ShopPageComponent;
export default ShopPageComponent;
