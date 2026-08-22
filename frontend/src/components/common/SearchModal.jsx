import React, { useState } from 'react';
import { Search, X, ChevronRight, FileText, Cpu, Zap, Layers } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchItems = [
    { title: 'Interactive DESIGNER Physics Engine', route: 'designer', type: 'Tool', icon: Zap },
    { title: 'Electron Beam Lithography (EBL) Systems', route: 'products', type: 'Product', icon: Cpu },
    { title: 'Focused Ion Beam (FIB) Nanofabrication', route: 'products', type: 'Product', icon: Layers },
    { title: 'Laser Beam Lithography & Gaussian Simulation', route: 'functions', type: 'Feature', icon: Zap },
    { title: 'Applications in Quantum Computing & Photonics', route: 'applications', type: 'Solutions', icon: FileText },
    { title: 'Software Handbook & API Documentation', route: 'handbook', type: 'Support', icon: FileText },
    { title: 'Commercial License & Shop Pricing', route: 'shop', type: 'Pricing', icon: FileText },
    { title: 'Who We Are - Leadership & Research Partners', route: 'who-we-are', type: 'Company', icon: FileText },
    { title: 'Admin Console & Service Portal 🛡️', route: 'admin', type: 'Admin', icon: Cpu },
  ];

  const filtered = searchItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden text-gray-100">
        <div className="flex items-center px-4 py-3.5 border-b border-gray-800 bg-gray-900/90">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search LBLFIBEBL systems, products, docs, algorithms..."
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-3 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onNavigate(item.route);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/80 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-800 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-gray-400 text-sm">
              No matching pages or tools found for "{query}"
            </div>
          )}
        </div>

        <div className="p-3 border-t border-gray-800 bg-gray-950/60 text-right text-[11px] text-gray-500">
          Press ESC or click close to exit global search
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
