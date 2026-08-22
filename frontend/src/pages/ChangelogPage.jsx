import React from 'react';
import { GitCommit } from 'lucide-react';

export const ChangelogPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">LBLFIBEBL Changelog & Release Notes</h1>
    <div className="space-y-6">
      {[
        { ver: "v5.2.0 - 2026-08-22", notes: "Added 150kV EBL electron scattering solver, MongoDB Atlas dual cloud sync, and Raith style header/footer UI overhaul." },
        { ver: "v5.1.0 - 2026-05-10", notes: "Added FIB gas-assisted etching kinetics and HTML5 Canvas 2D live beam ray tracing." }
      ].map((rel, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <GitCommit className="w-4 h-4" /> {rel.ver}
          </div>
          <p className="text-xs text-gray-300 pl-6">{rel.notes}</p>
        </div>
      ))}
    </div>
  </div>
);

export const ChangelogPage = ChangelogPageComponent;
export default ChangelogPageComponent;
