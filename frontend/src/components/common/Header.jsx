import React, { useState } from 'react';
import { Search, User, LogOut, Menu, X, ChevronDown, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Header = ({
  user,
  onLogout,
  openAuthModal,
  openSearchModal,
  activeRoute,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { lang, changeLanguage, t } = useLanguage();

  const handleNav = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const languageLabels = {
    EN: 'EN',
    DE: 'DE',
    ZH: '中文',
    JA: '日本語'
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-[#151521] border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - LBLFIBEBL (Clean White Header Style) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none flex-shrink-0"
          >
            {/* Geometric Optical Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-700 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <path d="M12 3l9 9-9 9" />
                <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-[#151521] uppercase font-sans">
                LBL<span className="text-[#0066FF]">FIB</span>EBL
              </span>
              <span className="block text-[9px] uppercase font-bold text-[#0066FF] tracking-widest">
                Nano & Physics Engine
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-medium text-xs xl:text-sm max-w-full overflow-hidden">
            
            {/* Sectors Dropdown */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('sectors')} onMouseLeave={() => setActiveDropdown(null)}>
              <button
                onClick={() => handleNav('applications')}
                className="px-2.5 py-2 text-slate-800 hover:text-[#0066FF] font-semibold tracking-tight flex items-center gap-1 transition-colors"
              >
                {t('sectors')} <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#0066FF]" />
              </button>
              {activeDropdown === 'sectors' && (
                <div className="absolute top-full left-0 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl p-2 animate-fade-in">
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
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-[#0066FF] hover:bg-slate-50 rounded-lg transition-colors font-medium"
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
                className="px-2.5 py-2 text-slate-800 hover:text-[#0066FF] font-semibold tracking-tight flex items-center gap-1 transition-colors"
              >
                {t('solutions')} <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#0066FF]" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-xl shadow-2xl p-2 animate-fade-in">
                  {[
                    { name: t('patterning'), route: 'functions' },
                    { name: t('mixAndMatch'), route: 'benefits' },
                    { name: t('processControl'), route: 'basics' },
                    { name: 'Digital LBLFIBEBL', route: 'designer' },
                    { name: 'Holography Workflow', route: 'applications' }
                  ].map((sol, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNav(sol.route)}
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-[#0066FF] hover:bg-slate-50 rounded-lg transition-colors font-medium"
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
                className="px-2.5 py-2 text-slate-800 hover:text-[#0066FF] font-semibold tracking-tight flex items-center gap-1 transition-colors"
              >
                {t('products')} <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#0066FF]" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-60 bg-white border border-gray-200 rounded-xl shadow-2xl p-2 animate-fade-in">
                  {[
                    { name: 'Electron Beam Lithography (EBL)', route: 'shop' },
                    { name: 'Focused Ion Beams (FIB)', route: 'shop' },
                    { name: 'Laser Lithography (LBL)', route: 'shop' },
                    { name: 'Imaging & Analysis Systems', route: 'shop' }
                  ].map((prod, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNav(prod.route)}
                      className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:text-[#0066FF] hover:bg-slate-50 rounded-lg transition-colors font-medium"
                    >
                      {prod.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('who-we-are')}
              className="px-2.5 py-2 text-slate-800 hover:text-[#0066FF] font-semibold tracking-tight transition-colors"
            >
              {t('technologies')}
            </button>

            <button
              onClick={() => handleNav('support')}
              className="px-2.5 py-2 text-slate-800 hover:text-[#0066FF] font-semibold tracking-tight transition-colors"
            >
              {t('services')}
            </button>

            <button
              onClick={() => handleNav('who-we-are')}
              className="px-2.5 py-2 text-slate-800 hover:text-[#0066FF] font-semibold tracking-tight transition-colors"
            >
              {t('company')}
            </button>

            {/* DESIGNER Engine */}
            <button
              onClick={() => handleNav('designer')}
              className={`px-3.5 py-1.5 rounded-lg font-bold tracking-tight flex items-center gap-1 transition-all shadow-sm ${
                activeRoute === 'designer'
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-blue-50 text-[#0066FF] border border-blue-200 hover:bg-blue-100'
              }`}
            >
              <Zap className="w-3.5 h-3.5" /> {t('designer')}
            </button>
          </nav>

          {/* Right Utility Buttons (Search, Language, User Auth) */}
          <div className="hidden sm:flex items-center space-x-2 flex-shrink-0">
            
            {/* Quick Search Button */}
            <button
              onClick={openSearchModal}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#0066FF] hover:border-slate-300 transition-all"
              title={t('search')}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher Pill (EN, DE, ZH, JA) */}
            <div className="flex bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs font-semibold gap-0.5">
              {['EN', 'DE', 'ZH', 'JA'].map((l) => (
                <button
                  key={l}
                  onClick={() => changeLanguage(l)}
                  className={`px-2 py-0.5 rounded-lg transition-colors ${
                    lang === l ? 'bg-[#0066FF] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={`Switch language to ${languageLabels[l]}`}
                >
                  {languageLabels[l]}
                </button>
              ))}
            </div>

            {/* User Auth Widget */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>{user.name || user.email}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white border border-rose-200 text-xs font-semibold transition-all flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" /> {t('logout')}
                </button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="px-4 py-2 bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
              >
                {t('signIn')}
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openSearchModal}
              className="p-2 rounded-lg bg-slate-100 text-slate-700"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#0066FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> Language
            </span>
            <div className="flex bg-slate-100 border border-slate-200 rounded-xl p-0.5 text-xs font-semibold gap-1">
              {['EN', 'DE', 'ZH', 'JA'].map((l) => (
                <button
                  key={l}
                  onClick={() => changeLanguage(l)}
                  className={`px-2 py-0.5 rounded-lg transition-colors ${
                    lang === l ? 'bg-[#0066FF] text-white font-bold' : 'text-slate-600'
                  }`}
                >
                  {languageLabels[l]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleNav('home')}
              className="p-2.5 rounded-lg bg-slate-100 text-left text-slate-900 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('designer')}
              className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-left text-[#0066FF] font-bold flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5" /> {t('designer')} Engine
            </button>
            <button
              onClick={() => handleNav('applications')}
              className="p-2.5 rounded-lg bg-slate-100 text-left text-slate-800 font-medium"
            >
              {t('sectors')} & {t('solutions')}
            </button>
            <button
              onClick={() => handleNav('shop')}
              className="p-2.5 rounded-lg bg-slate-100 text-left text-slate-800 font-medium"
            >
              {t('products')} & EBL/FIB
            </button>
            <button
              onClick={() => handleNav('who-we-are')}
              className="p-2.5 rounded-lg bg-slate-100 text-left text-slate-800 font-medium"
            >
              {t('company')} / About Us
            </button>
            <button
              onClick={() => handleNav('support')}
              className="p-2.5 rounded-lg bg-slate-100 text-left text-slate-800 font-medium"
            >
              {t('services')} & Handbook
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            {user ? (
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-slate-800 font-medium">{user.email}</span>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold"
                >
                  {t('logout')}
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="w-full py-2.5 bg-[#0066FF] text-white font-semibold text-xs rounded-xl text-center"
              >
                {t('signIn')}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
