import React from 'react';
import { Zap, Cpu, Layers } from 'lucide-react';

export const FunctionsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Core Engine Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          LBLFIBEBL Software Functions & Capabilities
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Advanced physical optics algorithms, electron beam trajectory simulation, and GDSII lithography engine
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Gaussian Beam Propagation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Calculates z-dependent spot size w(z), Rayleigh range zR, and ABCD optical ray matrices.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">150kV EBL Scattering Engine</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Simulates Monte Carlo electron-resist scattering, forward scattering, and proximity effect correction (PEC).</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">FIB Ion Milling Solver</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Calculates sputtering yield, ion dose distribution, and gas injection deposition kinetics.</p>
        </div>
      </div>
    </div>
  </div>
);

export const FunctionsPage = FunctionsPageComponent;
export default FunctionsPageComponent;
