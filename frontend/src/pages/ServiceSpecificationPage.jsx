import React from 'react';

export const ServiceSpecificationPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          System SLA & Reliability
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Service Specification
        </h1>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 text-xs text-slate-700 shadow-sm max-w-4xl mx-auto">
        <p className="leading-relaxed">
          LBLFIBEBL provides 99.9% uptime SLA for cloud CAD processing engines, 24-hour response SLA for enterprise software support, and certified cleanroom hardware calibration services for EBL, FIB, and LBL optics tools.
        </p>
      </div>
    </div>
  </div>
);

export const ServiceSpecificationPage = ServiceSpecificationPageComponent;
export default ServiceSpecificationPageComponent;
