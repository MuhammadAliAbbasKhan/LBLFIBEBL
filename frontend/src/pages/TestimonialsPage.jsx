import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialsPageComponent = () => (
  <div className="bg-[#f8fafc] min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-2">
        <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
          Foundry Feedback
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Client Testimonials & Cleanroom Reviews
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { quote: "LBLFIBEBL's 150kV EBL system reduced our quantum dot writing time by 60% while maintaining sub-1.5nm spot size accuracy.", author: "Prof. Dr. Michael Hoffmann", lab: "Quantum Micro-Optics Lab, ETH Zürich" },
          { quote: "The 2D physics simulation canvas matches our cleanroom laser lithography beam profiles with astonishing precision.", author: "Dr. Elena Rostova", lab: "Photonics Foundry Europe" }
        ].map((t, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all">
            <Quote className="w-8 h-8 text-[#0066FF] opacity-80" />
            <p className="text-xs text-slate-700 italic leading-relaxed font-serif">"{t.quote}"</p>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.author}</div>
              <div className="text-xs text-[#0066FF] font-semibold">{t.lab}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TestimonialsPage = TestimonialsPageComponent;
export default TestimonialsPageComponent;
