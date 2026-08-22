import React, { useState } from 'react';
import { HelpCircle, BookOpen, Video, FileText, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import apiService from '../services/api';

export const SupportPageComponent = ({ onNavigate }) => {
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
    <div className="bg-[#f8fafc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-full text-xs font-bold uppercase tracking-wider">
            Technical Support & Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            LBLFIBEBL Support Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                className="bg-white border border-slate-200 rounded-3xl p-6 text-left hover:shadow-xl hover:border-[#0066FF] transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Direct Contact Form & HQ Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Global Support Headquarters</h3>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">LBLFIBEBL Nanofabrication GmbH</strong>
                  Rudower Chaussee 29, 12489 Berlin, Germany
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0066FF] shrink-0" />
                <span>+49 30 6392 4860</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0066FF] shrink-0" />
                <span>support@lblfibebl.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Send Direct Message to Application Engineer</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Hans Weber"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="weber@quantum.de"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="EBL 150kV Focus Calibration Query"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Message Detail</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your technical query, error logs, or hardware setup..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
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
    </div>
  );
};

export const SupportPage = SupportPageComponent;
export default SupportPageComponent;
