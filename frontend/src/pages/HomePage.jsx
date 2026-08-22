import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LaserOpticsCanvas from "../components/simulator/LaserOpticsCanvas";

// ============================================================================
// COLOR CONSTANTS & DATA
// ============================================================================
const sectorsData = [
  { name: "Photonics", link: "applications", image: "https://raith.com/wp-content/uploads/2024/07/raith-photonics-divider-768x384.jpg?ver=1720184225" },
  { name: "Semiconductors", link: "applications", image: "https://raith.com/wp-content/uploads/2024/06/raith-semiconductors-divider-768x432.jpg?ver=1720184266" },
  { name: "Optical Telecommunication", link: "applications", image: "https://raith.com/wp-content/uploads/2024/06/raith-optical-telecommunication-divider-768x512.jpg?ver=1720184302" },
  { name: "Quantum Technologies", link: "applications", image: "https://raith.com/wp-content/uploads/2024/06/raith-quantum-technology-divider-768x432.jpg" },
];

const solutionsData = [
  { name: "Holography Workflow", link: "applications", icon: "https://raith.com/wp-content/uploads/2024/06/raith-solution_holography-workflow-tile.svg", desc: "From initial design to final product – solution for holography showcasing unique capabilities at every stage." },
  { name: "Digital LBLFIBEBL", link: "designer", icon: "https://raith.com/wp-content/uploads/2024/07/raith-solution_digital-raith-tile.svg", desc: "Mature software engineering for seamless integration, efficient task support, and user-friendly operation." },
  { name: "Process Control", link: "basics", icon: "https://raith.com/wp-content/uploads/2024/07/raith-solution_process-control-tile.svg", desc: "Revolutionize nanofabrication quality management, enable extensive data acquisition at the nanoscale, and beyond." },
  { name: "Mix and Match", link: "benefits", icon: "https://raith.com/wp-content/uploads/2024/07/raith-solution_mix-and-match-tile.svg", desc: "Seamless blending of laser direct writing, ion beam, and electron beam technologies, unlocking new nanostructuring horizons." },
  { name: "Patterning", link: "functions", icon: "https://raith.com/wp-content/uploads/2024/07/raith-solution_patterning-tile.svg", desc: "By eliminating stitching errors, our solution guarantees optimal performance and reliability, driving breakthroughs." },
];

const newsData = [
  { date: "June 23, 2026", title: "Introducing the new LBLFIBEBL Experience Center Europe", link: "who-we-are" },
  { date: "May 8, 2026", title: "Grand Opening of the LBLFIBEBL Experience Center Europe in Berlin", link: "who-we-are" },
  { date: "March 10, 2026", title: "Unlock the full nanopatterning potential of your SEM or FIB-SEM with LBLFIBEBL v5.2", link: "changelog" },
  { date: "December 23, 2025", title: "Extraordinary Micrograph Award 2025 Winners", link: "who-we-are" },
];

const referencesData = [
  { name: "CSIC", logo: "https://raith.com/wp-content/uploads/2025/01/CSIC.png" },
  { name: "CNR IMM", logo: "https://raith.com/wp-content/uploads/2025/01/CNR-IMM.png" },
  { name: "CBPF", logo: "https://raith.com/wp-content/uploads/2025/01/CBPF.png" },
  { name: "ISI Brno", logo: "https://raith.com/wp-content/uploads/2025/01/ISI-BRNO.png" },
  { name: "University of York", logo: "https://raith.com/wp-content/uploads/2026/01/UOY-Logo.png" },
  { name: "Complutense Madrid", logo: "https://raith.com/wp-content/uploads/2026/01/Complutense-Madrid.png" },
  { name: "University of Copenhagen", logo: "https://raith.com/wp-content/uploads/2026/01/University-of-Copenhagen.png" },
  { name: "Universite de Bourgogne", logo: "https://raith.com/wp-content/uploads/2026/01/Universite_Bourgogne_Europe.png" },
  { name: "Nano Structuring Center RPTU", logo: "https://raith.com/wp-content/uploads/2026/01/Nano-Structuring-Center.png" },
  { name: "UMS", logo: "https://raith.com/wp-content/uploads/2026/01/United-Monolithic-Semiconductors.png" },
  { name: "Singapore University of Technology", logo: "https://raith.com/wp-content/uploads/2026/01/Singapore-University-of-Technology-and-Design.png" },
  { name: "3IT Sherbrooke", logo: "https://raith.com/wp-content/uploads/2026/01/3IT-Logo.png" },
  { name: "Stanford", logo: "https://raith.com/wp-content/uploads/2025/01/Stanford.png" },
  { name: "EPFL", logo: "https://raith.com/wp-content/uploads/2025/01/EPFL.png" },
  { name: "UC Riverside", logo: "https://raith.com/wp-content/uploads/2025/01/UC-Riverside.png" },
  { name: "University of Paris", logo: "https://raith.com/wp-content/uploads/2025/01/Uni-Paris.png" },
];

const footerLinks = {
  sectors: ["Optical Telecommunication", "Semiconductors", "Quantum Technologies", "Consumer Electronics", "Life Sciences", "Defense & Space", "Materials Science", "Photonics", "Research / Rapid Prototyping"],
  solutions: ["Patterning", "Mix and Match", "Process Control", "Digital LBLFIBEBL", "Holography Workflow"],
  products: ["Electron Beam Lithography", "Focused Ion Beams", "Laser Lithography", "Imaging & Analysis"]
};

// ============================================================================
// MAIN COMPONENT
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
      
      {/* ===== HERO SLIDER WITH SWIPER BACKGROUND IMAGES ===== */}
      <section className="header-full-height relative h-[560px] md:h-[640px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4800, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: "url('https://raith.com/wp-content/uploads/2024/06/rai_tech_platzhalter.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#0066FF]/30 border border-[#0066FF] text-cyan-300 text-xs font-semibold uppercase tracking-wider">
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
                    className="inline-block px-8 py-3.5 bg-[#0066FF] text-white hover:bg-[#0052cc] transition font-semibold"
                  >
                    Vision & Mission
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: "url('https://raith.com/wp-content/uploads/2024/06/raith-semiconductors-divider.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#0066FF]/30 border border-[#0066FF] text-cyan-300 text-xs font-semibold uppercase tracking-wider">
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
                    className="inline-block px-8 py-3.5 bg-[#0066FF] text-white hover:bg-[#0052cc] transition font-semibold"
                  >
                    Semiconductors Sector
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: "url('https://raith.com/wp-content/uploads/2024/07/raith-company-events-header.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#0066FF]/30 border border-[#0066FF] text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    Events & Webinars 2026
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Discover upcoming events
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    Join us on exclusive user events, open webinars, and symposia, as well as industry-leading conferences.
                  </p>
                  <button
                    onClick={() => onNavigate && onNavigate('support')}
                    className="inline-block px-8 py-3.5 bg-[#0066FF] text-white hover:bg-[#0052cc] transition font-semibold"
                  >
                    Events
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide>
            <div
              className="relative h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: "url('https://raith.com/wp-content/uploads/2025/12/1stsplace_MA25__Bonaldo_metalens.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl text-white">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#0066FF]/30 border border-[#0066FF] text-cyan-300 text-xs font-semibold uppercase tracking-wider">
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
                    className="inline-block px-8 py-3.5 bg-[#0066FF] text-white hover:bg-[#0052cc] transition font-semibold"
                  >
                    Micrograph Award Winners
                  </button>
                </div>
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
                LBLFIBEBL is the global market and technology leader in maskless nanofabrication systems and characterization solutions. With our unique combination of high-precision products, integrated solutions, and proprietary technologies, we drive innovation and accompany a wide variety of industries and applications.
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
                <img src={sector.image} alt={sector.name} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500" />
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
                LBLFIBEBL empowers innovation in connectivity, mobility, green energy, and healthcare with cutting-edge, high-precision tools for research and industry.
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
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://raith.com/wp-content/uploads/2024/06/raith-home-solutions.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-white max-w-2xl">
            <span className="text-cyan-400 font-semibold uppercase text-sm tracking-wider">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
              Tackling complex challenges with precision and innovation in nanofabrication
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              From integrating complex lithography steps and Mix and Match solutions to stitch-free Patterning and advanced Process Control, our expertise and state-of-the-art technology ensure unparalleled quality.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS CARDS ===== */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
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
                Join Community & Request Free Access
              </button>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <img src="https://raith.com/wp-content/uploads/2024/06/raith-company-registration-header-1024x683.jpg" alt="Community" className="w-full h-full object-cover" />
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
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center flex items-center justify-center h-20 hover:border-[#0066FF] transition">
                <img src={ref.logo} alt={ref.name} className="max-h-12 w-auto object-contain" />
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