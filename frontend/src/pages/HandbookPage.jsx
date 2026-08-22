import React from 'react';

export const HandbookPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Documentation & Formulation
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          LBLFIBEBL Technical Handbook
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 text-xs text-slate-700 shadow-sm max-w-4xl mx-auto">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-900">Chapter 1: Physical Optics & ABCD Matrices</h3>
          <p className="leading-relaxed">Ray transfer matrix analysis computes optical beam transformation through paraxial elements using 2x2 ray transfer matrices [A B; C D].</p>
        </div>
        <div className="space-y-2 pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900">Chapter 2: EBL Monte Carlo Dose Calculations</h3>
          <p className="leading-relaxed">Electron trajectories in PMMA resists are modeled using Bethe stopping power continuous slowing-down approximation (CSDA).</p>
        </div>
      </div>
    </div>
  </div>
);

export const HandbookPage = HandbookPageComponent;
export default HandbookPageComponent;
