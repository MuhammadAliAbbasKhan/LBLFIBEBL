import React, { useState } from 'react';
import { X, Send, Sparkles, Building, User, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import apiService from '../../services/api';

export const TrialModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [softwareChoice, setSoftwareChoice] = useState('LBLFIBEBL Suite');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await apiService.requestTrial({
      full_name: fullName,
      email,
      company,
      software_choice: softwareChoice,
      comments,
    });

    setLoading(false);
    if (res.success) {
      addToast(res.message || 'Trial license evaluation request submitted! Our engineering team will contact you.', 'success');
      onClose();
      setFullName('');
      setEmail('');
      setCompany('');
      setComments('');
    } else {
      addToast(res.message || 'Trial request failed', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl text-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Request Free Evaluation License
            </h3>
            <p className="text-xs text-gray-400">
              Evaluate LBLFIBEBL Nanofabrication & Optics Engine (14-day trial)
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Prof. Alex Smith"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Work Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="smith@lab.edu"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Company / University / Institute *
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ferdinand-Braun-Institut / Quantum Lab"
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Software Tool Request
            </label>
            <select
              value={softwareChoice}
              onChange={(e) => setSoftwareChoice(e.target.value)}
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="LBLFIBEBL Suite">LBLFIBEBL Complete Nanofabrication Suite</option>
              <option value="EBL Litho Simulator">Electron Beam Lithography (EBL) Module</option>
              <option value="FIB Ion Beam Studio">Focused Ion Beam (FIB) Module</option>
              <option value="Laser Optics 2D Engine">Laser Beam Lithography (LBL) 2D Physics Engine</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Application Details / Comments
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <textarea
                rows={3}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Describe your research, substrate size, or lithography requirements..."
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <span className="animate-pulse">Submitting Request...</span>
            ) : (
              <>
                <Send className="w-4 h-4" /> Submit Trial License Request
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrialModal;
