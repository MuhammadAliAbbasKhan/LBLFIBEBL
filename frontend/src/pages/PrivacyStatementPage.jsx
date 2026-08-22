import React from 'react';

export const PrivacyStatementPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Data Protection & Security
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Statement (GDPR Compliance)
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 text-xs text-slate-700 shadow-sm max-w-4xl mx-auto">
        <p className="leading-relaxed">
          LBLFIBEBL GmbH respects user privacy and strictly complies with EU General Data Protection Regulation (GDPR) directives. Technical data collected via CAD specifications and account registration is encrypted and managed securely via dual SQLite + MongoDB Atlas databases. We never share or sell user data to third parties.
        </p>
      </div>
    </div>
  </div>
);

export const PrivacyStatementPage = PrivacyStatementPageComponent;
export default PrivacyStatementPageComponent;
