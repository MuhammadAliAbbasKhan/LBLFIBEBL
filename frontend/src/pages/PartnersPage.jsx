import React from 'react';
import { Building2, Globe } from 'lucide-react';

export const PartnersPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">Academic & Research Partners</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        'Ferdinand-Braun-Institut (FBH Berlin)',
        'OpTecBB Optics Association',
        'EPIC European Photonics Industry Consortium',
        'Helmholtz-Zentrum Berlin'
      ].map((p, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-center space-y-2">
          <Building2 className="w-8 h-8 text-cyan-400 mx-auto" />
          <h3 className="text-sm font-bold text-white">{p}</h3>
          <p className="text-[10px] text-gray-400">Cooperative Research Member</p>
        </div>
      ))}
    </div>
  </div>
);

export const PartnersPage = PartnersPageComponent;
export default PartnersPageComponent;
