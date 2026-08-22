import React from 'react';
import { BookOpen } from 'lucide-react';

export const BasicsPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
    <h1 className="text-3xl font-bold text-white">Nanofabrication & Lithography Basics</h1>
    <p className="text-sm text-gray-300">Fundamental optics principles governing electron, laser, and ion beam interaction with photoresists.</p>
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-xs text-gray-300 space-y-4">
      <h3 className="text-base font-bold text-cyan-400">Gaussian Beam Formulation</h3>
      <p>The electric field amplitude distribution of a TEM00 laser mode propagating along the z-axis is defined as $E(r,z) = E_0 \frac{w_0}{w(z)} \exp(-r^2 / w(z)^2)$.</p>
      <h3 className="text-base font-bold text-cyan-400">Electron Beam Scattering</h3>
      <p>At 100kV acceleration voltage, forward scattering of electrons in PMMA resist is minimized, enabling vertical sidewalls and high aspect ratio nanostructures.</p>
    </div>
  </div>
);

export const BasicsPage = BasicsPageComponent;
export default BasicsPageComponent;
