import React from 'react';
import { Cpu, Zap, Layers, Globe, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const ApplicationsPageComponent = ({ onNavigate, openTrialModal }) => {
  const sectors = [
    { title: 'Optical Telecommunication', desc: 'High-speed photonic integrated circuits (PICs), waveguide splitters, and DFB laser diode grating structures written with nanometer precision.', icon: Zap },
    { title: 'Semiconductors & Microelectronics', desc: 'Maskless lithography for rapid prototyping of sub-10nm transistor gates, EUV mask defect repair, and advanced 3D packaging IC interconnects.', icon: Cpu },
    { title: 'Quantum Technologies', desc: 'Superconducting qubit circuits, NV-center diamond photonic cavities, and single-photon detector patterning for quantum key distribution.', icon: Layers },
    { title: 'Consumer Electronics & Display', desc: 'Diffractive optical elements (DOE) for AR/VR micro-displays, metalenses, and holographic optical surfaces.', icon: Sparkles },
    { title: 'Life Sciences & Microfluidics', desc: 'Nanofluidic DNA sequencing channels, plasmonic biosensors, and cell sorting nano-mesh arrays.', icon: Globe },
    { title: 'Defense & Aerospace', desc: 'Radiation-hardened GaAs RF amplifiers, infrared focal plane arrays, and stealth optical coating metamaterials.', icon: ShieldCheck }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen py-12">
      {/* Subpage Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            Sectors & Applications
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            LBLFIBEBL Industry Applications
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover how LBLFIBEBL systems drive state-of-the-art nanofabrication across telecom, semiconductor, and quantum optics industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-[#0066FF] transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] border border-blue-100 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{sec.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
                </div>
                <button
                  onClick={openTrialModal}
                  className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1 pt-4 border-t border-slate-100"
                >
                  Request Application Note <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ApplicationsPage = ApplicationsPageComponent;
export default ApplicationsPageComponent;
