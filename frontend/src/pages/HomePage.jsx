import React, { useState, useEffect, useRef } from "react";
import LaserOpticsCanvas from "../components/simulator/LaserOpticsCanvas";

// Navigation & Sector Data for LBLFIBEBL
const sectorsData = [
  { name: "Photonics", link: "applications", image: "https://raith.com/wp-content/uploads/2024/07/photonics-thumb.jpg" },
  { name: "Semiconductors", link: "applications", image: "https://raith.com/wp-content/uploads/2024/07/semiconductors-thumb.jpg" },
  { name: "Optical Telecommunication", link: "applications", image: "https://raith.com/wp-content/uploads/2024/07/telecom-thumb.jpg" },
  { name: "Quantum Technologies", link: "applications", image: "https://raith.com/wp-content/uploads/2024/07/quantum-thumb.jpg" },
];

const solutionsData = [
  { name: "Holography Workflow", link: "applications", icon: "/icons/holography.svg", desc: "From initial design to final product – solution for holography showcasing unique capabilities at every stage." },
  { name: "Digital LBLFIBEBL", link: "designer", icon: "/icons/digital-raith.svg", desc: "Mature software engineering for seamless integration, efficient task support, and user-friendly operation." },
  { name: "Process Control", link: "basics", icon: "/icons/process-control.svg", desc: "Revolutionize nanofabrication quality management, enable extensive data acquisition at the nanoscale, and beyond." },
  { name: "Mix and Match", link: "benefits", icon: "/icons/mix-and-match.svg", desc: "Seamless blending of laser direct writing, ion beam, and electron beam technologies, unlocking new nanostructuring horizons." },
  { name: "Patterning", link: "functions", icon: "/icons/patterning.svg", desc: "By eliminating stitching errors, our solution guarantees optimal performance and reliability, driving breakthroughs." },
];

const newsData = [
  { date: "June 23, 2026", title: "Introducing the new LBLFIBEBL Experience Center Europe", link: "who-we-are" },
  { date: "May 8, 2026", title: "Grand Opening of the LBLFIBEBL Experience Center Europe in Berlin", link: "who-we-are" },
  { date: "March 10, 2026", title: "Unlock the full nanopatterning potential of your SEM or FIB-SEM with LBLFIBEBL v5.2", link: "changelog" },
  { date: "December 23, 2025", title: "Extraordinary LBLFIBEBL Micrograph Award 2025 Winners", link: "who-we-are" },
];

const referencesData = [
  { name: "Stanford", logo: "https://raith.com/wp-content/uploads/2025/01/Stanford.png" },
  { name: "EPFL", logo: "https://raith.com/wp-content/uploads/2025/01/EPFL.png" },
  { name: "UC Riverside", logo: "https://raith.com/wp-content/uploads/2025/01/UC-Riverside.png" },
  { name: "Uni Paris", logo: "https://raith.com/wp-content/uploads/2025/01/Uni-Paris.png" },
  { name: "CSIC", logo: "https://raith.com/wp-content/uploads/2025/01/CSIC.png" },
  { name: "CNR IMM", logo: "https://raith.com/wp-content/uploads/2025/01/CNR-IMM.png" },
  { name: "CBPF", logo: "https://raith.com/wp-content/uploads/2025/01/CBPF.png" },
  { name: "ISI Brno", logo: "https://raith.com/wp-content/uploads/2025/01/ISI-BRNO.png" },
];

export const HomePageComponent = ({ onNavigate, openTrialModal, openCheckoutModal, user, openAuthModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);

  const slides = [
    {
      title: "Challenge the frontiers of nanotechnology",
      subtitle: "LBLFIBEBL enables innovation and industrial implementation of nano devices to advance the digital future.",
      buttonText: "Vision & Mission",
      buttonLink: "who-we-are",
    },
    {
      title: "Next generation Nanofabrication",
      subtitle: "By enabling a wide variety of applications for industry and academia, we advance the digital future.",
      buttonText: "Semiconductors Sector",
      buttonLink: "applications",
    },
    {
      title: "Discover upcoming events",
      subtitle: "Join us on exclusive user events, open webinars, and symposia, as well as industry-leading conferences.",
      buttonText: "Events & Symposia",
      buttonLink: "support",
    },
    {
      title: "LBLFIBEBL Micrograph Award 2026",
      subtitle: "Check out all winning images and be inspired by extraordinary nanofabrication achievements.",
      buttonText: "Micrograph Award Winners",
      buttonLink: "who-we-are",
    },
  ];

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-page bg-white font-sans text-slate-900">
      
      {/* ===== HERO SLIDER ===== */}
      <section className="hero-slider relative min-h-[520px] bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-20 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              LBLFIBEBL Nanofabrication Engine v5.2
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {slides[activeSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-normal leading-relaxed">
              {slides[activeSlide].subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate(slides[activeSlide].buttonLink)}
                className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-none transition-colors shadow-lg shadow-cyan-500/20"
              >
                {slides[activeSlide].buttonText}
              </button>

              <button
                onClick={() => onNavigate && onNavigate('designer')}
                className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-slate-950 text-white font-bold text-sm transition-colors"
              >
                Launch 2D Physics Engine
              </button>
            </div>
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex items-center gap-3 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  idx === activeSlide ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2D PHYSICS CANVAS SIMULATOR ===== */}
      <section className="py-12 bg-slate-950 border-b border-slate-800">
        <div className="container-custom">
          <LaserOpticsCanvas openAuthModal={openAuthModal} user={user} />
        </div>
      </section>

      {/* ===== WELCOME & SECTORS ===== */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <span className="label-gray">Welcome</span>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-slate-700 leading-relaxed font-normal">
                LBLFIBEBL is a global market and technology leader in maskless nanofabrication systems, electron beam lithography, focused ion beam milling, and optical characterization solutions. With our unique combination of high-precision products, integrated solutions, and proprietary physics engines, we drive innovation across industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsData.map((sector, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(sector.link)}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left bg-slate-900"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center text-white">
                  <h3 className="text-lg font-bold">{sector.name}</h3>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform font-bold text-xl">→</span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate && onNavigate('applications')}
              className="btn-secondary"
            >
              Show More Sectors
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US & VIDEO ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="label-gray">About LBLFIBEBL</span>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                New Dimensions in Nanofabrication
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                LBLFIBEBL empowers innovation in quantum connectivity, semiconductor mobility, green energy, and healthcare with cutting-edge, high-precision tools for research cleanrooms and commercial foundries.
              </p>
              <button
                onClick={() => onNavigate && onNavigate('who-we-are')}
                className="btn-primary"
              >
                Company & Leadership
              </button>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800">
              <video
                ref={videoRef}
                controls
                playsInline
                poster="https://raith.com/wp-content/uploads/2024/07/rai-animation-thumb.jpg"
                className="w-full h-full object-cover"
              >
                <source src="https://raith.com/wp-content/uploads/2024/07/raith-new-dimesnions-web3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS CARDS ===== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="label-gray">Solutions</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Tackling Complex Challenges with Precision & Innovation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From integrating complex lithography steps and Mix and Match solutions to stitch-free Patterning and advanced Process Control, our expertise ensures matchless nanofabrication quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((solution, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(solution.link)}
                className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 flex items-center justify-center font-bold text-xl">
                    {solution.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {solution.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-bold text-cyan-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Explore {solution.name} Solution →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="label-gray">Latest News</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Staying Updated: Latest News & Innovations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((news, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(news.link)}
                className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-cyan-500/40 transition-all text-left space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-cyan-600">{news.date}</span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors leading-snug">
                    {news.title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-cyan-600 pt-3 border-t border-slate-200">
                  Read Article →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REFERENCES ===== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-custom space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Global Reputation</span>
            <h2 className="text-2xl font-bold">Trusted by Customers Worldwide</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {referencesData.map((ref, idx) => (
              <div key={idx} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-center text-xs font-bold text-slate-300 hover:text-white hover:border-cyan-500 transition-colors">
                {ref.name}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export const HomePage = HomePageComponent;
export default HomePageComponent;