import React from 'react';
import { Lock } from 'lucide-react';

export const PrivacyStatementPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
    <h1 className="text-3xl font-bold text-white uppercase tracking-wider">PRIVACY STATEMENT (GDPR COMPLIANCE)</h1>
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-4 text-xs text-gray-300">
      <p>LBLFIBEBL GmbH respects user privacy and complies with EU GDPR directives. Data collected via registration and CAD specs is stored securely in dual SQLite + MongoDB Atlas databases and is never sold to third parties.</p>
    </div>
  </div>
);

export const PrivacyStatementPage = PrivacyStatementPageComponent;
export default PrivacyStatementPageComponent;
