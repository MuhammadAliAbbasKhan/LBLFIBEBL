import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsPageComponent = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 className="text-3xl font-bold text-white">Client Testimonials & Cleanroom Feedback</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { quote: "LBLFIBEBL's 150kV EBL system reduced our quantum dot writing time by 60% while maintaining sub-1.5nm spot size accuracy.", author: "Prof. Dr. Michael Hoffmann", lab: "Quantum Micro-Optics Lab, ETH Zürich" },
        { quote: "The 2D physics simulation canvas matches our cleanroom laser lithography beam profiles with astonishing precision.", author: "Dr. Elena Rostova", lab: "Photonics Foundry Europe" }
      ].map((t, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-4">
          <Quote className="w-8 h-8 text-cyan-400 opacity-60" />
          <p className="text-xs text-gray-300 italic leading-relaxed font-serif">"{t.quote}"</p>
          <div>
            <div className="text-sm font-bold text-white">{t.author}</div>
            <div className="text-xs text-cyan-400">{t.lab}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const TestimonialsPage = TestimonialsPageComponent;
export default TestimonialsPageComponent;
