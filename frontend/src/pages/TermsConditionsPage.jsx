import React from 'react';

export const TermsConditionsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Software Terms & Policy
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Terms & Conditions
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 text-xs text-slate-700 shadow-sm max-w-4xl mx-auto">
        <p className="leading-relaxed">
          Software licenses grant non-transferable rights to LBLFIBEBL 2D physics simulation tools, EBL scattering calculators, and CAD export engines. Commercial cleanroom installations must adhere to SLA agreements and hardware safety guidelines. Unauthorized reverse engineering or redistribution is strictly prohibited.
        </p>
      </div>
    </div>
  </div>
);

export const TermsConditionsPage = TermsConditionsPageComponent;
export default TermsConditionsPageComponent;
