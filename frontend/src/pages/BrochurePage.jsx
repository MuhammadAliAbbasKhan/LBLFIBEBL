import React from 'react';
import { Download, FileText } from 'lucide-react';

export const BrochurePageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Download Center
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          LBLFIBEBL System Documentation & Brochures
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: 'LBLFIBEBL EBL 150kV Product Specification PDF', size: '4.8 MB' },
          { title: 'Focused Ion Beam (FIB) Nanofabrication Brochure', size: '3.2 MB' },
          { title: 'Laser Lithography & Physical Optics 2D Suite Guide', size: '5.1 MB' }
        ].map((b, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl transition-all">
            <FileText className="w-8 h-8 text-[#0066FF]" />
            <div>
              <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
              <span className="text-xs text-slate-500">{b.size}</span>
            </div>
            <button className="w-full py-2.5 bg-slate-100 hover:bg-[#0066FF] hover:text-white text-[#0066FF] font-bold text-xs rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download PDF Brochure
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const BrochurePage = BrochurePageComponent;
export default BrochurePageComponent;
