import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';

export const SystemRequirementsPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">LBLFIBEBL System Hardware & Software Requirements</h1>
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-6 text-xs text-gray-300">
      <div className="space-y-2">
        <h3 className="text-base font-bold text-cyan-400">Supported Operating Systems</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Windows 10 / 11 64-bit Enterprise or Pro</li>
          <li>Ubuntu Linux 22.04 LTS / Debian 12</li>
          <li>macOS Sonoma (M1 / M2 / M3 Apple Silicon supported via WebGL)</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-bold text-cyan-400">Hardware Specifications</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Processor: Intel Core i7 / AMD Ryzen 7 (8 cores or higher)</li>
          <li>RAM: 16 GB minimum (32 GB recommended for GDSII files &gt; 1 GB)</li>
          <li>Graphics Card: NVIDIA RTX / WebGL 2.0 compatible GPU</li>
        </ul>
      </div>
    </div>
  </div>
);

export const SystemRequirementsPage = SystemRequirementsPageComponent;
export default SystemRequirementsPageComponent;
