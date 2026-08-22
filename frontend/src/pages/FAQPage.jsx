import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions (FAQ)
        </h1>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {[
          { q: "What electron beam acceleration voltages does LBLFIBEBL support?", a: "LBLFIBEBL supports 50kV, 100kV, and ultra-high resolution 150kV acceleration columns for thermal field emission EBL systems." },
          { q: "How is billing handled for paid subscriptions?", a: "Subscriptions are processed securely via Stripe API. You can choose monthly or annual billing with instant license key activation." },
          { q: "Can I import custom GDSII layout files into DESIGNER?", a: "Yes, LBLFIBEBL supports GDSII, OASIS, and DXF pattern files with automatic field hierarchy parsing." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-2 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0066FF]" /> {item.q}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const FAQPage = FAQPageComponent;
export default FAQPageComponent;
