import React from 'react';
import { Cpu, Zap, Layers, Globe, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-white">
          LBLFIBEBL Industry Applications & Sectors
        </h1>
        <p className="text-sm text-gray-300">
          Discover how LBLFIBEBL systems drive state-of-the-art nanofabrication across telecom, semiconductor, and quantum optics industries worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div key={idx} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 hover:border-cyan-500/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{sec.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{sec.desc}</p>
              <button
                onClick={openTrialModal}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                Request Application Note <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ApplicationsPage = ApplicationsPageComponent;
export default ApplicationsPageComponent;
