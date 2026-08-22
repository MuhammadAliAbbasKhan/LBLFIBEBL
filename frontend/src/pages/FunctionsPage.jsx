import React from 'react';
import { Zap, Cpu, Layers, CheckCircle } from 'lucide-react';

export const FunctionsPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <div className="text-center max-w-3xl mx-auto space-y-3">
      <h1 className="text-3xl font-bold text-white">LBLFIBEBL Software Functions & Capabilities</h1>
      <p className="text-xs text-gray-300">Advanced physical optics algorithms, electron beam trajectory simulation, and GDSII lithography engine</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <Zap className="w-6 h-6 text-cyan-400" />
        <h3 className="text-lg font-bold text-white">Gaussian Beam Propagation</h3>
        <p className="text-xs text-gray-400">Calculates z-dependent spot size $w(z)$, Rayleigh range $z_R$, and ABCD optical ray matrices.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <Cpu className="w-6 h-6 text-blue-400" />
        <h3 className="text-lg font-bold text-white">150kV EBL Scattering Engine</h3>
        <p className="text-xs text-gray-400">Simulates Monte Carlo electron-resist scattering, forward scattering, and proximity effect correction (PEC).</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <Layers className="w-6 h-6 text-indigo-400" />
        <h3 className="text-lg font-bold text-white">FIB Ion Milling Solver</h3>
        <p className="text-xs text-gray-400">Calculates sputtering yield, ion dose distribution, and gas injection deposition kinetics.</p>
      </div>
    </div>
  </div>
);

export const FunctionsPage = FunctionsPageComponent;
export default FunctionsPageComponent;
