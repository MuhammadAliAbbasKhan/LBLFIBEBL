import React, { useState } from 'react';
import { HelpCircle, BookOpen, Video, FileText, Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import apiService from '../services/api';

export const SupportPageComponent = ({ onNavigate, openTrialModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await apiService.submitContact({
      name,
      email,
      subject,
      message,
    });

    setLoading(false);
    if (res.success) {
      addToast(res.message || 'Message sent! Our support team will reply within 24 hours.', 'success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      addToast(res.message || 'Submission failed', 'error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-white">
          LBLFIBEBL Technical Support & Knowledge Hub
        </h1>
        <p className="text-sm text-gray-300">
          Access user handbooks, video tutorials, FAQ documents, or contact our Berlin HQ application support engineers directly.
        </p>
      </div>

      {/* 4 Quick Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Software Handbook', route: 'handbook', icon: BookOpen, desc: 'Complete mathematical formulation & manual' },
          { title: 'Video Tutorials', route: 'tutorials', icon: Video, desc: 'Step-by-step EBL & FIB alignment guides' },
          { title: 'Frequently Asked Questions', route: 'faq', icon: HelpCircle, desc: 'System requirements, licensing & installation' },
          { title: 'Changelog & Releases', route: 'changelog', icon: FileText, desc: 'Version history & feature updates' }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => onNavigate(item.route)}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-left hover:border-cyan-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Direct Contact Form & HQ Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">Global Support Headquarters</h3>
          <div className="space-y-4 text-xs text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">LBLFIBEBL Nanofabrication GmbH</strong>
                Rudower Chaussee 29, 12489 Berlin, Germany
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>+49 30 6392 4860</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>support@lblfibebl.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">Send Direct Message to Application Engineer</h3>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Hans Weber"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="weber@quantum.de"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Subject</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="EBL 150kV Focus Calibration Query"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">Message Detail</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your technical query, error logs, or hardware setup..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-pulse">Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export const SupportPage = SupportPageComponent;
export default SupportPageComponent;
