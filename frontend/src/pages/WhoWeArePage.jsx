import React from 'react';
import { Globe, Award, Building } from 'lucide-react';

export const WhoWeArePageComponent = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            About LBLFIBEBL GmbH
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who We Are: Pioneers in Nanofabrication & Optics
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Founded in Berlin, Germany, LBLFIBEBL delivers high-precision lithography equipment, focused ion beam systems, and physical optics CAD software trusted by leading global semiconductor foundries and research institutes.
          </p>
        </div>

        {/* Leadership & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">30+ Years Innovation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pioneering ultra-high resolution electron optics and laser lithography systems engineered for sub-2nm pattern fidelity.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Berlin Cleanroom HQ</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Headquartered at Berlin-Adlershof High-Tech Park in collaboration with top European optics research associations.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Global Industry Impact</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deployed across 500+ university cleanrooms, quantum labs, and commercial semiconductor manufacturing plants worldwide.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export const WhoWeArePage = WhoWeArePageComponent;
export default WhoWeArePageComponent;
