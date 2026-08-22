import React from 'react';
import { Zap, ShieldCheck, Cpu, ArrowRight, Layers, Award, Sparkles, CheckCircle2, Globe, FileText } from 'lucide-react';
import LaserOpticsCanvas from '../components/simulator/LaserOpticsCanvas';

export const HomePageComponent = ({ onNavigate, openTrialModal, openCheckoutModal, user, openAuthModal }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section - Raith Styling */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 pt-16 pb-24 border-b border-gray-800">
        
        {/* Optical Ray Background Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next-Gen LBLFIBEBL Nanofabrication Release v5.2</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Precision Nanofabrication & <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Electron & Focused Ion Beam Systems
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
              LBLFIBEBL empowers researchers, semiconductor fabs, and quantum optics pioneers with state-of-the-art Laser Beam Lithography, Focused Ion Beam (FIB) milling, and 150kV Electron Beam Lithography (EBL).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('designer')}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm rounded-2xl shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2 group"
              >
                <Zap className="w-4 h-4" /> Launch Interactive DESIGNER
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openTrialModal}
                className="px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold text-sm rounded-2xl border border-gray-700 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" /> Request Evaluation License
              </button>
            </div>

          </div>

          {/* Featured Telemetry Banner */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
            {[
              { label: 'Beam Resolution', val: '< 1.5 nm' },
              { label: 'EBL Acceleration', val: '50kV – 150kV' },
              { label: 'Substrate Handling', val: 'Up to 300 mm' },
              { label: 'Laser Wavelength', val: '350nm – 1064nm' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800 backdrop-blur-md shadow-lg">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-sans">{stat.val}</div>
                <div className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2D Physics Simulator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LaserOpticsCanvas openAuthModal={openAuthModal} user={user} />
      </section>

      {/* 3 Main Product Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            LBLFIBEBL Nanofabrication Core Technologies
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Tailored lithography tools and physical optics solvers engineered for quantum photonics and semiconductor manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* EBL Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Electron Beam Lithography (EBL)</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Ultra-high resolution patterning below 2nm. Features thermal field emission gun, 150kV acceleration, and GDSII/OASIS CAD engine compatibility.
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Explore EBL Systems <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* FIB Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Focused Ion Beam (FIB) Systems</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Direct-write ion milling, gas injection deposition (GIS), and cross-section analysis. Optimized for gallium and liquid metal alloy ion sources (LMAIS).
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              Explore FIB Solutions <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* LBL Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Laser Beam Lithography (LBL)</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              High-speed direct laser writing for micro-optics, photolithography mask fabrication, and diffractive optical elements (DOE).
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              Explore LBL Systems <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Commercial License & Pricing Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-900 via-blue-950/60 to-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Commercial & Research Licensing
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Upgrade Your Nanofabrication Capability?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Activate your LBLFIBEBL software license today. Instant Stripe checkout for Basic ($99/mo), Standard ($299/mo), and Enterprise ($599/mo) plans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => openCheckoutModal('standard')}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> Activate Standard Tier
            </button>

            <button
              onClick={() => onNavigate('shop')}
              className="w-full sm:w-auto px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm rounded-xl border border-gray-700 transition-colors text-center"
            >
              View All Tiers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export const HomePage = HomePageComponent;
export default HomePageComponent;
