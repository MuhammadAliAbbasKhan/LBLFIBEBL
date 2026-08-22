import React from 'react';
import { Globe, Award, Users, ShieldCheck, MapPin, Building } from 'lucide-react';

export const WhoWeArePageComponent = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          About LBLFIBEBL GmbH
        </span>
        <h1 className="text-4xl font-extrabold text-white">
          Who We Are: Pioneers in Nanofabrication & Optics
        </h1>
        <p className="text-sm text-gray-300 leading-relaxed">
          Founded in Berlin, Germany, LBLFIBEBL delivers high-precision lithography equipment, focused ion beam systems, and physical optics CAD software trusted by leading global semiconductor foundries and research institutes.
        </p>
      </div>

      {/* Leadership & Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">30+ Years Innovation</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Pioneering ultra-high resolution electron optics and laser lithography systems engineered for sub-2nm pattern fidelity.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Berlin Cleanroom HQ</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Headquartered at Berlin-Adlershof High-Tech Park in collaboration with top European optics research associations.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Global Industry Impact</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Deployed across 500+ university cleanrooms, quantum labs, and commercial semiconductor manufacturing plants worldwide.
          </p>
        </div>
      </div>

    </div>
  );
};

export const WhoWeArePage = WhoWeArePageComponent;
export default WhoWeArePageComponent;
