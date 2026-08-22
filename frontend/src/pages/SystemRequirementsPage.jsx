import React from 'react';

export const SystemRequirementsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Compatibility & Specs
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          LBLFIBEBL System Hardware & Software Requirements
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 text-xs text-slate-700 shadow-sm max-w-4xl mx-auto">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-900">Supported Operating Systems</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Windows 10 / 11 64-bit Enterprise or Pro</li>
            <li>Ubuntu Linux 22.04 LTS / Debian 12</li>
            <li>macOS Sonoma (M1 / M2 / M3 / M4 Apple Silicon supported via WebGL)</li>
          </ul>
        </div>

        <div className="space-y-2 pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900">Hardware Specifications</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Processor: Intel Core i7 / AMD Ryzen 7 (8 cores or higher)</li>
            <li>RAM: 16 GB minimum (32 GB recommended for GDSII files &gt; 1 GB)</li>
            <li>Graphics Card: NVIDIA RTX / WebGL 2.0 compatible GPU</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const SystemRequirementsPage = SystemRequirementsPageComponent;
export default SystemRequirementsPageComponent;
