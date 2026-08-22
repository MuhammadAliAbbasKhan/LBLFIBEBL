import React from 'react';

export const BasicsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Physics Fundamentals
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nanofabrication & Lithography Basics
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Fundamental optics principles governing electron, laser, and ion beam interaction with photoresists.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 text-xs text-slate-700 space-y-4 shadow-sm max-w-4xl mx-auto">
        <h3 className="text-base font-bold text-slate-900">Gaussian Beam Formulation</h3>
        <p className="leading-relaxed">The electric field amplitude distribution of a TEM00 laser mode propagating along the z-axis is defined as E(r,z) = E0 * (w0 / w(z)) * exp(-r² / w(z)²).</p>
        
        <h3 className="text-base font-bold text-slate-900 pt-2 border-t border-slate-100">Electron Beam Scattering</h3>
        <p className="leading-relaxed">At 100kV acceleration voltage, forward scattering of electrons in PMMA resist is minimized, enabling vertical sidewalls and high aspect ratio nanostructures.</p>
      </div>
    </div>
  </div>
);

export const BasicsPage = BasicsPageComponent;
export default BasicsPageComponent;
