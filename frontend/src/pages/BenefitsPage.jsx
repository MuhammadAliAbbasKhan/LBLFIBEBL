import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

export const BenefitsPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <div className="text-center max-w-3xl mx-auto space-y-3">
      <h1 className="text-3xl font-bold text-white">Why Choose LBLFIBEBL?</h1>
      <p className="text-xs text-gray-300">Maximize cleanroom throughput, achieve sub-2nm pattern fidelity, and lower lithography cost of ownership</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <Award className="w-6 h-6 text-cyan-400" />
        <h3 className="text-lg font-bold text-white">Sub-2nm Resolution</h3>
        <p className="text-xs text-gray-400">Achieve state-of-the-art placement accuracy and minimal field stitching error.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <ShieldCheck className="w-6 h-6 text-emerald-400" />
        <h3 className="text-lg font-bold text-white">Foundry Reliability</h3>
        <p className="text-xs text-gray-400">Proven 24/7 continuous operation in leading semiconductor cleanrooms.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <Zap className="w-6 h-6 text-amber-400" />
        <h3 className="text-lg font-bold text-white">Seamless CAD Import</h3>
        <p className="text-xs text-gray-400">Direct integration with GDSII, OASIS, and DXF pattern layouts.</p>
      </div>
    </div>
  </div>
);

export const BenefitsPage = BenefitsPageComponent;
export default BenefitsPageComponent;
