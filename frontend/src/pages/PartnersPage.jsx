import React from 'react';
import { Building2 } from 'lucide-react';

export const PartnersPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Global Ecosystem
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Academic & Research Partners
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          'Ferdinand-Braun-Institut (FBH Berlin)',
          'OpTecBB Optics Association',
          'EPIC European Photonics Industry Consortium',
          'Helmholtz-Zentrum Berlin'
        ].map((p, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 text-center space-y-3 shadow-sm hover:shadow-xl transition-all">
            <Building2 className="w-8 h-8 text-[#0066FF] mx-auto" />
            <h3 className="text-sm font-bold text-slate-900">{p}</h3>
            <p className="text-[10px] text-slate-500">Cooperative Research Member</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PartnersPage = PartnersPageComponent;
export default PartnersPageComponent;
