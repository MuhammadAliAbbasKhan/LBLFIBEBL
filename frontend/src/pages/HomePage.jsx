import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LaserOpticsCanvas from "../components/simulator/LaserOpticsCanvas";

// ============================================================================
// COLOR CONSTANTS
// ============================================================================
const PRIMARY_CYAN = "#00D2FF";
const DARK_BG = "#0B1329";
const WHITE = "#FFFFFF";

// ============================================================================
// NAVIGATION & SECTOR DATA
// ============================================================================
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
  { date: "March 10, 2026", title: "Unlock the full nanopatterning potential of your SEM or FIB-SEM with a new LBLFIBEBL engine", link: "changelog" },
  { date: "December 23, 2025", title: "Extraordinary Micrograph Award 2025 Winners Announced", link: "who-we-are" },
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

// ============================================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================================
export function HomePage({ onNavigate, openTrialModal, openCheckoutModal, user, openAuthModal }) {
  const [isHeaderInverted, setIsHeaderInverted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".header-full-height");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeaderInverted(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#151521]">
      
      {/* ===== HERO SLIDER WITH SWIPER ===== */}
      <section className="header-full-height relative h-[560px] bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4800, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full flex items-center max-w-7xl mx-auto px-6">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  LBLFIBEBL Lithography Platform
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Challenge the frontiers of nanotechnology
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  LBLFIBEBL enables innovation and industrial implementation of nano devices to advance the digital future.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('who-we-are')}
                  className="px-8 py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold transition"
                >
                  Vision & Mission
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex items-center max-w-7xl mx-auto px-6">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  Semiconductors & Quantum Devices
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Next generation Nanofabrication
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  By enabling a wide variety of applications for industry and academia, we advance the digital future.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('applications')}
                  className="px-8 py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold transition"
                >
                  Semiconductors Sector
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex items-center max-w-7xl mx-auto px-6">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  Events & Symposia 2026
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Discover upcoming events & workshops
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  Join us on exclusive user events, open webinars, and symposia, as well as industry-leading conferences.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('support')}
                  className="px-8 py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold transition"
                >
                  Events & Webinars
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-full flex items-center max-w-7xl mx-auto px-6">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  Micrograph Awards
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Congratulations to LBLFIBEBL Award Winners
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  Check out all winning images and be inspired by extraordinary nanofabrication achievements.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('who-we-are')}
                  className="px-8 py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold transition"
                >
                  Micrograph Winners
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ===== 2D PHYSICS CANVAS SIMULATOR ===== */}
      <section className="py-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <LaserOpticsCanvas openAuthModal={openAuthModal} user={user} />
        </div>
      </section>

      {/* ===== WELCOME + SECTORS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <span className="text-[#0066FF] font-semibold uppercase text-sm tracking-wider">Welcome</span>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                LBLFIBEBL is the global market and technology leader in maskless nanofabrication systems, electron beam lithography, focused ion beam milling, and laser characterization solutions. With our unique combination of high-precision products, integrated solutions, and proprietary engines, we drive innovation across industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsData.map((sector, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(sector.link)}
                className="group relative overflow-hidden aspect-[4/3] rounded-xl text-left bg-slate-900 shadow-md hover:shadow-xl transition"
              >
                <img src={sector.image} alt={sector.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151521]/90 via-[#151521]/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white flex items-center justify-between right-6">
                  <h3 className="text-xl font-bold">{sector.name}</h3>
                  <span className="text-[#0066FF] group-hover:translate-x-1 transition-transform font-bold text-xl">→</span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate && onNavigate('applications')}
              className="px-6 py-3 border-2 border-[#151521] hover:bg-[#151521] hover:text-white transition font-semibold"
            >
              Show More Sectors
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / VIDEO SECTION ===== */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#0066FF] font-semibold uppercase text-sm tracking-wider">About</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-[#151521]">New Dimensions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                LBLFIBEBL empowers innovation in connectivity, semiconductor mobility, green energy, and healthcare with cutting-edge, high-precision tools for research and industry.
              </p>
              <button
                onClick={() => onNavigate && onNavigate('who-we-are')}
                className="inline-block px-8 py-3 bg-[#151521] text-white hover:bg-[#0066FF] transition font-semibold"
              >
                Company & Technology
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
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

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[#0066FF] font-semibold uppercase text-sm tracking-wider">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-[#151521]">
              Tackling Complex Challenges with Precision & Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((solution, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(solution.link)}
                className="group bg-white p-8 hover:shadow-xl transition rounded-2xl border border-gray-200 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold text-xl mb-4">
                    {solution.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#151521] group-hover:text-[#0066FF] transition">{solution.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#0066FF] font-semibold text-xs group-hover:underline">{solution.name} Solution →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#0066FF] font-semibold uppercase text-sm tracking-wider">News</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-12 text-[#151521]">Staying Updated: Latest News & Innovations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((news, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate && onNavigate(news.link)}
                className="group border-b-2 border-slate-200 hover:border-[#0066FF] pb-4 transition text-left space-y-2 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-[#0066FF] mb-2">{news.date}</p>
                  <h3 className="text-base font-bold text-[#151521] group-hover:text-[#0066FF] transition leading-snug">{news.title}</h3>
                </div>
                <span className="text-xs font-bold text-[#0066FF] pt-2">Read Article →</span>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate && onNavigate('support')}
              className="inline-block px-8 py-3 bg-[#151521] text-white hover:bg-[#0066FF] transition font-semibold"
            >
              All News & Support
            </button>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY SECTION ===== */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#0066FF] font-semibold uppercase text-sm tracking-wider">Community</span>
              <h2 className="text-4xl font-extrabold mt-4 mb-6 text-[#151521]">Join the LBLFIBEBL Community</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a member of our community you get access to exclusive software tools, expert technical support, and live symposia.
              </p>
              <button
                onClick={openTrialModal}
                className="inline-block px-8 py-3 bg-[#0066FF] text-white hover:bg-[#0052cc] transition font-semibold"
              >
                Request Free Access
              </button>
            </div>
            <div className="bg-[#151521]/10 h-64 rounded-2xl flex items-center justify-center text-gray-500 font-semibold">
              LBLFIBEBL Community Portal
            </div>
          </div>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#0066FF] font-semibold uppercase text-sm tracking-wider">References</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-12 text-[#151521]">Trusted by Customers Worldwide</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {referencesData.map((ref, idx) => (
              <div key={idx} className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-center text-xs font-bold text-slate-700 hover:border-[#0066FF] transition">
                {ref.name}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export const HomePageComponent = HomePage;
export default HomePage;