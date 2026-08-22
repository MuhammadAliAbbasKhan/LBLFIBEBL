import React, { useState } from 'react';
import { Linkedin, Youtube, Facebook, Instagram, Send, Mail, MapPin, Phone, Shield } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import apiService from '../../services/api';

export const Footer = ({ onNavigate, openTrialModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setLoading(true);

    const res = await apiService.submitContact({
      name: 'Newsletter Subscriber',
      email: newsletterEmail,
      subject: 'Newsletter Subscription',
      message: 'User subscribed to newsletter updates.',
    });

    setLoading(false);
    if (res.success) {
      addToast('Thank you for subscribing to LBLFIBEBL newsletter updates!', 'success');
      setNewsletterEmail('');
    } else {
      addToast(res.message || 'Subscription failed', 'error');
    }
  };

  return (
    <footer className="raith-footer-backdrop text-slate-800 pt-14 pb-10 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-300/80">
          
          {/* Column 1: Brand & Newsletter & Contact */}
          <div className="space-y-6">
            {/* Metallic LBLFIBEBL Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-amber-100 font-bold shadow">
                <span className="text-lg">⚡</span>
              </div>
              <span className="text-2xl font-black tracking-widest text-slate-900 uppercase font-sans">
                LBL<span className="text-amber-700">FIB</span>EBL
              </span>
            </div>

            {/* Newsletter Form */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">
                Sign up for our Newsletter *
              </label>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-white border border-slate-300 rounded-md py-2 px-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-600 shadow-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-md text-xs uppercase tracking-wider transition-colors shadow"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

            {/* Contact Us Section */}
            <div className="pt-2 space-y-1">
              <div className="text-sm font-bold text-slate-900">Contact us</div>
              <button
                onClick={() => onNavigate('support')}
                className="text-xs font-medium text-slate-700 hover:text-slate-900 hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Send a message
              </button>
            </div>

            {/* Social Icons */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-3">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-slate-700">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-slate-700">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-slate-700">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-slate-700">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[11px] text-slate-600 font-medium">Follow us on social media</p>
            </div>
          </div>

          {/* Column 2: Sectors */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Sectors
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
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
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('applications')}
                    className="hover:text-slate-900 hover:underline transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              {[
                { name: 'Patterning', route: 'functions' },
                { name: 'Mix and Match', route: 'benefits' },
                { name: 'Process Control', route: 'basics' },
                { name: 'Digital LBLFIBEBL', route: 'designer' },
                { name: 'Holography Workflow', route: 'applications' }
              ].map((sol, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(sol.route)}
                    className="hover:text-slate-900 hover:underline transition-colors text-left"
                  >
                    {sol.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Products */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              {[
                { name: 'Electron Beam Lithography', route: 'shop' },
                { name: 'Focused Ion Beams', route: 'shop' },
                { name: 'Laser Lithography', route: 'shop' },
                { name: 'Imaging & Analysis', route: 'shop' }
              ].map((prod, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(prod.route)}
                    className="hover:text-slate-900 hover:underline transition-colors text-left"
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-300/60">
              <button
                onClick={openTrialModal}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-3 rounded-md text-xs transition-colors shadow"
              >
                Request Free Evaluation License
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-700">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 uppercase tracking-wider text-[11px] font-bold">
            <button onClick={() => onNavigate('legal-notice')} className="hover:text-slate-900 hover:underline">
              LEGAL NOTICE
            </button>
            <button onClick={() => onNavigate('privacy-statement')} className="hover:text-slate-900 hover:underline">
              PRIVACY STATEMENT
            </button>
            <button onClick={() => onNavigate('terms-conditions')} className="hover:text-slate-900 hover:underline">
              TERMS & CONDITIONS
            </button>
            <button onClick={() => onNavigate('service-specification')} className="hover:text-slate-900 hover:underline">
              SERVICE SPECIFICATION
            </button>
            <button onClick={() => onNavigate('how-to-order')} className="hover:text-slate-900 hover:underline">
              HOW TO ORDER
            </button>
          </div>

          <div className="text-slate-600 text-center md:text-right">
            Copyright © 2026 LBLFIBEBL GmbH. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
