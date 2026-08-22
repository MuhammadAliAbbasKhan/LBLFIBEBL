import React, { useState } from 'react';
import { Search, Globe, User, LogOut, Menu, X, ChevronDown, Sparkles, Shield, Cpu, Zap, Layers } from 'lucide-react';

export const Header = ({
  user,
  onLogout,
  openAuthModal,
  openSearchModal,
  activeRoute,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNav = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full raith-header-glass border-b border-gray-800/80 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - LBLFIBEBL (Raith Clone Style) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Geometric Optical Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <path d="M12 3l9 9-9 9" />
                <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-widest text-white uppercase font-sans">
                LBL<span className="text-cyan-400">FIB</span>EBL
              </span>
              <span className="block text-[10px] uppercase font-semibold text-cyan-300/80 tracking-widest">
                Nano & Physics Engine
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 font-medium text-sm">
            
            {/* Sectors Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('sectors')} onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => handleNav('applications')}
                className="px-3.5 py-2 text-gray-200 hover:text-cyan-400 font-semibold tracking-wide flex items-center gap-1 transition-colors"
              >
                Sectors <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400" />
              </button>
              {activeDropdown === 'sectors' && (
                <div className="absolute top-full left-0 w-64 bg-gray-900/95 border border-gray-800 rounded-xl shadow-2xl p-2 animate-fade-in backdrop-blur-xl">
                  {[
                    'Optical Telecommunication',
                    'Semiconductors',
                    'Quantum Technologies',
                    'Consumer Electronics',
                    'Life Sciences',
                    'Defense & Space',
                    'Materials Science',
                    'Photonics',
                    'Research / Rapid Prototyping'
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNav('applications')}
                      className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-cyan-300 hover:bg-gray-800/80 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => handleNav('functions')}
                className="px-3.5 py-2 text-gray-200 hover:text-cyan-400 font-semibold tracking-wide flex items-center gap-1 transition-colors"
              >
                Solutions <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-56 bg-gray-900/95 border border-gray-800 rounded-xl shadow-2xl p-2 animate-fade-in backdrop-blur-xl">
                  {[
                    { name: 'Patterning', route: 'functions' },
                    { name: 'Mix and Match', route: 'benefits' },
                    { name: 'Process Control', route: 'basics' },
                    { name: 'Digital LBLFIBEBL', route: 'designer' },
                    { name: 'Holography Workflow', route: 'applications' }
                  ].map((sol, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNav(sol.route)}
                      className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-cyan-300 hover:bg-gray-800/80 rounded-lg transition-colors"
                    >
                      {sol.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => handleNav('shop')}
                className="px-3.5 py-2 text-gray-200 hover:text-cyan-400 font-semibold tracking-wide flex items-center gap-1 transition-colors"
              >
                Products <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-64 bg-gray-900/95 border border-gray-800 rounded-xl shadow-2xl p-2 animate-fade-in backdrop-blur-xl">
                  {[
                    { name: 'Electron Beam Lithography (EBL)', route: 'shop' },
                    { name: 'Focused Ion Beams (FIB)', route: 'shop' },
                    { name: 'Laser Lithography (LBL)', route: 'shop' },
                    { name: 'Imaging & Analysis Systems', route: 'shop' }
                  ].map((prod, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNav(prod.route)}
                      className="w-full text-left px-3 py-2 text-xs text-gray-300 hover:text-cyan-300 hover:bg-gray-800/80 rounded-lg transition-colors"
                    >
                      {prod.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('who-we-are')}
              className="px-3.5 py-2 text-gray-200 hover:text-cyan-400 font-semibold tracking-wide transition-colors"
            >
              Technologies
            </button>

            <button
              onClick={() => handleNav('support')}
              className="px-3.5 py-2 text-gray-200 hover:text-cyan-400 font-semibold tracking-wide transition-colors"
            >
              Services
            </button>

            <button
              onClick={() => handleNav('who-we-are')}
              className="px-3.5 py-2 text-gray-200 hover:text-cyan-400 font-semibold tracking-wide transition-colors"
            >
              Company
            </button>

            {/* DESIGNER (Interactive Simulator Engine) */}
            <button
              onClick={() => handleNav('designer')}
              className={`px-4 py-2 rounded-xl font-bold tracking-wide flex items-center gap-1.5 transition-all shadow-md ${
                activeRoute === 'designer'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25'
                  : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20'
              }`}
            >
              <Zap className="w-4 h-4" /> DESIGNER
            </button>

            {/* Admin Console Link */}
            <button
              onClick={() => handleNav('admin')}
              className="px-3 py-2 text-amber-400 hover:text-amber-300 font-semibold text-xs flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 rounded-lg transition-all"
            >
              <Shield className="w-3.5 h-3.5" /> Admin 🛡️
            </button>
          </nav>

          {/* Right Utility Buttons (Search, Language, User Auth) */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Quick Search Modal Button */}
            <button
              onClick={openSearchModal}
              className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-all"
              title="Global Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher Pill */}
            <div className="flex bg-gray-800/80 border border-gray-700 rounded-xl p-1 text-xs font-semibold">
              <button
                onClick={() => setLang('DE')}
                className={`px-2 py-1 rounded-lg transition-colors ${
                  lang === 'DE' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-1 rounded-lg transition-colors ${
                  lang === 'EN' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* User Auth Widget */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-gray-800 border border-gray-700 text-xs font-medium text-cyan-300 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{user.name || user.email}</span>
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold uppercase">
                    {user.plan || 'PRO'}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-semibold transition-all flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all"
              >
                Sign In / Register
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={openSearchModal}
              className="p-2 rounded-lg bg-gray-800 text-gray-300"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-gray-900 border-b border-gray-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNav('home')}
              className="p-2.5 rounded-lg bg-gray-800/80 text-left text-white font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('designer')}
              className="p-2.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-left text-cyan-300 font-bold flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" /> DESIGNER Engine
            </button>
            <button
              onClick={() => handleNav('applications')}
              className="p-2.5 rounded-lg bg-gray-800/80 text-left text-gray-300 font-medium"
            >
              Sectors & Solutions
            </button>
            <button
              onClick={() => handleNav('shop')}
              className="p-2.5 rounded-lg bg-gray-800/80 text-left text-gray-300 font-medium"
            >
              Products & EBL/FIB
            </button>
            <button
              onClick={() => handleNav('who-we-are')}
              className="p-2.5 rounded-lg bg-gray-800/80 text-left text-gray-300 font-medium"
            >
              Company / About Us
            </button>
            <button
              onClick={() => handleNav('support')}
              className="p-2.5 rounded-lg bg-gray-800/80 text-left text-gray-300 font-medium"
            >
              Services & Handbook
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="p-2.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-left text-amber-300 font-bold flex items-center gap-1 col-span-2"
            >
              <Shield className="w-4 h-4" /> Admin Console 🛡️
            </button>
          </div>

          <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
            {user ? (
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-gray-300 font-medium">{user.email}</span>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="w-full py-2.5 bg-cyan-600 text-white font-semibold text-xs rounded-xl text-center"
              >
                Sign In / Register Account
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
