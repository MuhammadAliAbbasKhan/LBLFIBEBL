import React from 'react';
import { Video, BookOpen } from 'lucide-react';

export const TutorialTipsPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">Nanofabrication Tutorials & Engineering Tips</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <h3 className="text-base font-bold text-cyan-400">Tip 1: Optimizing Proximity Effect Correction (PEC)</h3>
        <p>When patterning high-density grating arrays in HSQ resist, adjust base dose energy to compensate for backscattered electrons from heavy silicon substrates.</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 space-y-2">
        <h3 className="text-base font-bold text-cyan-400">Tip 2: FIB Gas-Assisted Etching Selection</h3>
        <p>Use XeF2 gas chemistry during gallium ion milling to increase silicon etch selectivity by up to 10x over unassisted physical sputtering.</p>
      </div>
    </div>
  </div>
);

export const TutorialTipsPage = TutorialTipsPageComponent;
export default TutorialTipsPageComponent;
