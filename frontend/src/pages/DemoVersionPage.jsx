import React from 'react';
import { Sparkles, Send } from 'lucide-react';

export const DemoVersionPageComponent = ({ openTrialModal, onNavigate }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-8">
    <div className="max-w-2xl mx-auto space-y-4">
      <Sparkles className="w-12 h-12 text-cyan-400 mx-auto" />
      <h1 className="text-3xl font-bold text-white">Request LBLFIBEBL 14-Day Free Evaluation</h1>
      <p className="text-xs text-gray-300">
        Experience the full power of LBLFIBEBL 2D physics engine, EBL scattering calculations, and GDSII CAD tools without commitment.
      </p>
      <div className="pt-4 flex justify-center gap-4">
        <button
          onClick={openTrialModal}
          className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/20"
        >
          Request Evaluation Key
        </button>
        <button
          onClick={() => onNavigate('designer')}
          className="px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold text-xs rounded-xl border border-gray-700"
        >
          Try Live Browser Canvas
        </button>
      </div>
    </div>
  </div>
);

export const DemoVersionPage = DemoVersionPageComponent;
export default DemoVersionPageComponent;
