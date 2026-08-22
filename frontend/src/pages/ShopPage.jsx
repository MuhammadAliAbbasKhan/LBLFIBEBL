import React, { useState } from 'react';
import { ShieldCheck, Check, Sparkles, Zap, Cpu, Layers } from 'lucide-react';

export const ShopPageComponent = ({ openCheckoutModal, openTrialModal }) => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Commercial & Software Subscriptions
        </span>
        <h1 className="text-4xl font-extrabold text-white">
          LBLFIBEBL Software & System Licensing
        </h1>
        <p className="text-sm text-gray-300">
          Transparent pricing backed by Stripe encrypted payment processing and instant license key activation.
        </p>

        {/* Toggle Monthly / Yearly */}
        <div className="pt-4 flex items-center justify-center">
          <div className="flex bg-gray-800 p-1.5 rounded-2xl border border-gray-700 text-xs font-semibold">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 py-2 rounded-xl transition-all ${
                billing === 'monthly' ? 'bg-cyan-500 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                billing === 'yearly' ? 'bg-cyan-500 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly Billing <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Save 20%</span>
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
              className={`relative bg-gray-900 border rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-all ${
                plan.popular
                  ? 'border-cyan-500 bg-gradient-to-b from-gray-900 via-gray-900 to-cyan-950/20 shadow-cyan-500/20 scale-105'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-gray-400 min-h-[32px]">{plan.desc}</p>
                <div className="pt-2">
                  <span className="text-4xl font-extrabold text-white">${price}</span>
                  <span className="text-xs text-gray-400">/month</span>
                </div>

                <div className="pt-4 border-t border-gray-800 space-y-2.5">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openCheckoutModal(plan.id)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
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
  );
};

export const ShopPage = ShopPageComponent;
export default ShopPageComponent;
