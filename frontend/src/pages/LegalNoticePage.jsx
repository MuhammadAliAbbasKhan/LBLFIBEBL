import React from 'react';
import { Shield } from 'lucide-react';

export const LegalNoticePageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
    <h1 className="text-3xl font-bold text-white uppercase tracking-wider">LEGAL NOTICE (IMPRESSUM)</h1>
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-4 text-xs text-gray-300">
      <p className="font-semibold text-white">LBLFIBEBL Nanofabrication GmbH</p>
      <p>Rudower Chaussee 29, 12489 Berlin, Germany</p>
      <p>Managing Directors: Dr. Hans Weber, Executive Technical Board</p>
      <p>Commercial Register: Amtsgericht Berlin-Charlottenburg HRB 184920 B</p>
      <p>VAT ID Number: DE 815 492 018</p>
    </div>
  </div>
);

export const LegalNoticePage = LegalNoticePageComponent;
export default LegalNoticePageComponent;
