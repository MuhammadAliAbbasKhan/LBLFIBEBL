import React from 'react';

export const TutorialTipsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Engineering Guides
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nanofabrication Tutorials & Engineering Tips
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 max-w-5xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-2 shadow-sm">
          <h3 className="text-base font-bold text-slate-900">Tip 1: Optimizing Proximity Effect Correction (PEC)</h3>
          <p className="leading-relaxed">When patterning high-density grating arrays in HSQ resist, adjust base dose energy to compensate for backscattered electrons from heavy silicon substrates.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-2 shadow-sm">
          <h3 className="text-base font-bold text-slate-900">Tip 2: FIB Gas-Assisted Etching Selection</h3>
          <p className="leading-relaxed">Use XeF2 gas chemistry during gallium ion milling to increase silicon etch selectivity by up to 10x over unassisted physical sputtering.</p>
        </div>
      </div>
    </div>
  </div>
);

export const TutorialTipsPage = TutorialTipsPageComponent;
export default TutorialTipsPageComponent;
