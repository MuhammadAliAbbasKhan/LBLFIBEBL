import React from 'react';
import { GitCommit } from 'lucide-react';

export const ChangelogPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Software Updates
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          LBLFIBEBL Changelog & Release Notes
        </h1>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {[
          { ver: "v5.2.0 - 2026-08-22", notes: "Added 150kV EBL electron scattering solver, MongoDB Atlas dual cloud sync, and Raith style header/footer UI overhaul." },
          { ver: "v5.1.0 - 2026-05-10", notes: "Added FIB gas-assisted etching kinetics and HTML5 Canvas 2D live beam ray tracing." }
        ].map((rel, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
              <GitCommit className="w-4 h-4" /> {rel.ver}
            </div>
            <p className="text-xs text-slate-600 pl-6 leading-relaxed">{rel.notes}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ChangelogPage = ChangelogPageComponent;
export default ChangelogPageComponent;
