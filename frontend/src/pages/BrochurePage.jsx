import React from 'react';
import { Download, FileText } from 'lucide-react';

export const BrochurePageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">LBLFIBEBL System Documentation & Brochures</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: 'LBLFIBEBL EBL 150kV Product Specification PDF', size: '4.8 MB' },
        { title: 'Focused Ion Beam (FIB) Nanofabrication Brochure', size: '3.2 MB' },
        { title: 'Laser Lithography & Physical Optics 2D Suite Guide', size: '5.1 MB' }
      ].map((b, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-4">
          <FileText className="w-8 h-8 text-cyan-400" />
          <div>
            <h3 className="text-base font-bold text-white">{b.title}</h3>
            <span className="text-xs text-gray-400">{b.size}</span>
          </div>
          <button className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-cyan-300 font-semibold text-xs rounded-xl border border-gray-700 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Download PDF Brochure
          </button>
        </div>
      ))}
    </div>
  </div>
);

export const BrochurePage = BrochurePageComponent;
export default BrochurePageComponent;
