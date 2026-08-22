import React from 'react';
import { Play } from 'lucide-react';

export const ProductVideosPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Video Center
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          LBLFIBEBL Video Tutorials & Demonstrations
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          '100kV EBL Alignment & Field Stitching Demo',
          'Focused Ion Beam Gas Injection Deposition (GIS)',
          'Direct Laser Writing of Diffractive Optics (DOE)',
          'GDSII CAD Pattern Export & Proximity Correction'
        ].map((title, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-xl transition-all">
            <div className="h-40 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800 text-white cursor-pointer group">
              <div className="p-4 rounded-full bg-[#0066FF] text-white group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
            <p className="text-xs text-slate-600">Embedded high-definition demonstration video (1080p 60fps)</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ProductVideosPage = ProductVideosPageComponent;
export default ProductVideosPageComponent;
