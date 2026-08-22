import React from 'react';
import { Sparkles } from 'lucide-react';

export const DemoVersionPageComponent = ({ openTrialModal, onNavigate }) => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-sm max-w-3xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-blue-50 text-[#0066FF] border border-blue-200 flex items-center justify-center mx-auto shadow-sm">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            14-Day Free Access
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Request LBLFIBEBL Evaluation
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Experience the full power of LBLFIBEBL 2D physics engine, EBL scattering calculations, and GDSII CAD tools without commitment.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={openTrialModal}
            className="px-8 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs rounded-xl shadow-sm uppercase tracking-wider"
          >
            Request Evaluation Key
          </button>
          <button
            onClick={() => onNavigate('designer')}
            className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs rounded-xl border border-slate-300 uppercase tracking-wider"
          >
            Try Live Browser Canvas
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const DemoVersionPage = DemoVersionPageComponent;
export default DemoVersionPageComponent;
