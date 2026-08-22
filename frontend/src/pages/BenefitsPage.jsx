import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

export const BenefitsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Foundry Advantages
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Why Choose LBLFIBEBL?
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Maximize cleanroom throughput, achieve sub-2nm pattern fidelity, and lower lithography cost of ownership
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Sub-2nm Resolution</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Achieve state-of-the-art placement accuracy and minimal field stitching error.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Foundry Reliability</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Proven 24/7 continuous operation in leading semiconductor cleanrooms.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Seamless CAD Import</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Direct integration with GDSII, OASIS, and DXF pattern layouts.</p>
        </div>
      </div>
    </div>
  </div>
);

export const BenefitsPage = BenefitsPageComponent;
export default BenefitsPageComponent;
