import React from 'react';
import { BookOpen } from 'lucide-react';

export const HandbookPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">LBLFIBEBL Technical Handbook & Formulation Manual</h1>
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-6 text-xs text-gray-300">
      <div className="space-y-2">
        <h3 className="text-base font-bold text-cyan-400">Chapter 1: Physical Optics & ABCD Matrices</h3>
        <p>Ray transfer matrix analysis computes optical beam transformation through paraxial elements using $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$.</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-bold text-cyan-400">Chapter 2: EBL Monte Carlo Dose Calculations</h3>
        <p>Electron trajectories in PMMA resists are modeled using Bethe stopping power continuous slowing-down approximation (CSDA).</p>
      </div>
    </div>
  </div>
);

export const HandbookPage = HandbookPageComponent;
export default HandbookPageComponent;
