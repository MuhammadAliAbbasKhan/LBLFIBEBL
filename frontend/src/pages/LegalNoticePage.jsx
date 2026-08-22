import React from 'react';

export const LegalNoticePageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Official Information
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Legal Notice (Impressum)
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 text-xs text-slate-700 shadow-sm max-w-4xl mx-auto">
        <p className="font-bold text-slate-900 text-sm">LBLFIBEBL Nanofabrication GmbH</p>
        <p>Rudower Chaussee 29, 12489 Berlin, Germany</p>
        <p>Managing Directors: Dr. Hans Weber, Executive Technical Board</p>
        <p>Commercial Register: Amtsgericht Berlin-Charlottenburg HRB 184920 B</p>
        <p>VAT ID Number: DE 815 492 018</p>
      </div>
    </div>
  </div>
);

export const LegalNoticePage = LegalNoticePageComponent;
export default LegalNoticePageComponent;
