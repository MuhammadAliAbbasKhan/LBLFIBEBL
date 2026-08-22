import React from 'react';
import { Video, Play } from 'lucide-react';

export const ProductVideosPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">LBLFIBEBL Video Tutorials & Demonstrations</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        '100kV EBL Alignment & Field Stitching Demo',
        'Focused Ion Beam Gas Injection Deposition (GIS)',
        'Direct Laser Writing of Diffractive Optics (DOE)',
        'GDSII CAD Pattern Export & Proximity Correction'
      ].map((title, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-3">
          <div className="h-40 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 text-cyan-400">
            <Play className="w-12 h-12" />
          </div>
          <h3 className="text-base font-bold text-white">{title}</h3>
          <p className="text-xs text-gray-400">Embedded high-definition demonstration video (1080p 60fps)</p>
        </div>
      ))}
    </div>
  </div>
);

export const ProductVideosPage = ProductVideosPageComponent;
export default ProductVideosPageComponent;
