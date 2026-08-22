import React, { useState } from 'react';
import { Zap, Lock, ShieldCheck, Sparkles, Send, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import LaserOpticsCanvas from '../components/simulator/LaserOpticsCanvas';
import { useToast } from '../context/ToastContext';
import apiService from '../services/api';

export const DesignerPageComponent = ({ user, openAuthModal }) => {
  const isPaidUser = user && (user.plan === 'PRO' || user.plan === 'Enterprise' || user.isPaid);

  // Form states for non-paid / prospective users asking for premium features
  const [inquiryName, setInquiryName] = useState(user?.name || '');
  const [inquiryEmail, setInquiryEmail] = useState(user?.email || '');
  const [organization, setOrganization] = useState('');
  const [requestedFeatures, setRequestedFeatures] = useState('');
  const [loading, setLoading] = useState(false);

  // Technical CAD states for authorized paid users
  const [userName, setUserName] = useState(user?.name || '');
  const [userEmail, setUserEmail] = useState(user?.email || '');
  const [companyName, setCompanyName] = useState('');
  const [projectTitle, setProjectTitle] = useState('Nanofabrication Optical Layout #1');
  const [serviceType, setServiceType] = useState('EBL Patterning');
  const [voltage, setVoltage] = useState('100kV');
  const [resist, setResist] = useState('PMMA 950K');
  const [substrate, setSubstrate] = useState('Silicon (100)');
  const [specifications, setSpecifications] = useState('');
  
  const { addToast } = useToast();

  // Premium Access Inquiry Submission
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await apiService.submitContactInquiry({
      name: inquiryName,
      email: inquiryEmail,
      subject: `Premium Feature Request: ${organization || 'Individual'}`,
      message: `Requested Premium Features: ${requestedFeatures}`,
    });
    setLoading(false);

    if (res.success) {
      addToast(res.message || '✨ Premium access request submitted! Our engineering team will upgrade your account shortly.', 'success');
      setRequestedFeatures('');
    } else {
      addToast(res.message || 'Submission failed. Please try again.', 'error');
    }
  };

  // Technical CAD Specification Submission (for paid users)
  const handleSpecSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await apiService.submitServiceRequest({
      user_name: userName || user.name || 'Engineer',
      user_email: userEmail || user.email,
      company_name: companyName,
      project_title: projectTitle,
      service_type: serviceType,
      industry: 'Quantum Nanofabrication',
      wavelength_range: `${voltage} | ${resist} | ${substrate}`,
      system_specifications: specifications,
    });
    setLoading(false);

    if (res.success) {
      addToast(res.message || 'Technical CAD specification submitted to LBLFIBEBL foundry engineers!', 'success');
      setSpecifications('');
    } else {
      addToast(res.message || 'Submission failed', 'error');
    }
  };

  // ============================================================================
  // RESTRICTED VIEW FOR NON-PAID USERS
  // ============================================================================
  if (!isPaidUser) {
    return (
      <div className="bg-[#f8fafc] min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Lock Banner */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-blue-50 text-[#0066FF] border border-blue-200 flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            
            <div className="space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
                🔒 Paid Subscriber & PRO Access Required
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                LBLFIBEBL DESIGNER ENGINE
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The Interactive 2D Lithography Physics Engine & CAD Workbench is reserved exclusively for LBLFIBEBL PRO and Enterprise subscribers.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              {!user ? (
                <button
                  onClick={openAuthModal}
                  className="px-8 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-xl transition-all shadow-sm"
                >
                  Sign In to PRO Account
                </button>
              ) : (
                <div className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200">
                  Signed in as: <span className="text-[#0066FF] font-bold">{user.email}</span> (Free Tier)
                </div>
              )}
            </div>
          </div>

          {/* Premium Features Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Real-Time 2D Beam Physics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simulate Gaussian beam envelope w(z), Rayleigh range zR, and ABCD matrix focal lens refraction across LBL, EBL, and FIB modes.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">150kV Electron Scattering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Predict Monte Carlo electron forward scattering in PMMA/ZEP resists and calculate proximity effect correction (PEC).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Foundry Submissions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit GDSII/OASIS CAD parameters, wafer substrates, dose specifications, and alignment mark coordinates directly to foundry engineers.
              </p>
            </div>
          </div>

          {/* Form to Request Premium Features & Upgrade */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 space-y-1">
              <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                Request Premium Feature Access
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Ask Us for Premium Access & Custom Features
              </h3>
              <p className="text-xs text-slate-500">
                Fill out this form to request a PRO license, custom cleanroom integration, or ask our engineers for premium features.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Dr. Hans Weber"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="weber@quantum-institute.de"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Organization / University / Foundry
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Ferdinand-Braun-Institut or Cleanroom Facility"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Requested Premium Features & Nanofabrication Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={requestedFeatures}
                  onChange={(e) => setRequestedFeatures(e.target.value)}
                  placeholder="Tell us which premium features you need (e.g. 100kV EBL CAD simulator access, custom resist dose modeling, GDSII export, or cleanroom license)..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="animate-pulse">Submitting Request to LBLFIBEBL Team...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Request Premium Access & Features
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // UNLOCKED VIEW FOR PAID / PRO USERS
  // ============================================================================
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              LBLFIBEBL PRO UNLOCKED
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Interactive Optics & Nanofabrication Workbench
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Simulate Gaussian beam propagation, EBL electron scattering, ABCD matrix refraction, and export technical CAD specifications.
            </p>
          </div>
        </div>

        {/* Interactive Physics Canvas */}
        <div className="bg-slate-950 rounded-3xl p-6 shadow-xl border border-slate-800">
          <LaserOpticsCanvas openAuthModal={openAuthModal} user={user} />
        </div>

        {/* Technical CAD Specification Builder */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-[#0066FF]">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Nanofabrication CAD Technical Specification Portal
              </h3>
              <p className="text-xs text-slate-500">
                Submit custom GDSII/OASIS lithography parameters directly to LBLFIBEBL foundry engineers
              </p>
            </div>
          </div>

          <form onSubmit={handleSpecSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Engineer / User Name *
                </label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Dr. Hans Weber"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="weber@quantum-institute.de"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ferdinand-Braun-Institut"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Lithography Service
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="EBL Patterning">EBL High-Resolution Patterning</option>
                  <option value="FIB Milling">FIB Direct-Write Milling</option>
                  <option value="LBL Laser Mask">LBL Direct Laser Writing</option>
                  <option value="Mix and Match">Mix & Match Lithography</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  EBL Acceleration Voltage
                </label>
                <select
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="50kV">50 kV</option>
                  <option value="100kV">100 kV (Recommended)</option>
                  <option value="150kV">150 kV Ultra-High Resolution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Resist Chemistry
                </label>
                <select
                  value={resist}
                  onChange={(e) => setResist(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="PMMA 950K">PMMA 950K</option>
                  <option value="ZEP 520A">ZEP 520A</option>
                  <option value="HSQ Negative">HSQ Inorganic Negative</option>
                  <option value="CSAR 62">CSAR 62</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Substrate Type
                </label>
                <select
                  value={substrate}
                  onChange={(e) => setSubstrate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
                >
                  <option value="Silicon (100)">Silicon (100) Wafer</option>
                  <option value="Fused Silica / Quartz">Fused Silica / Quartz</option>
                  <option value="GaAs / InP Compound">GaAs / InP Compound</option>
                  <option value="Diamond Substrate">Diamond Substrate</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Technical CAD Specifications & Dose Requirements
              </label>
              <textarea
                rows={4}
                required
                value={specifications}
                onChange={(e) => setSpecifications(e.target.value)}
                placeholder="Detail line pitch, target critical dimension (CD in nm), field size (e.g. 500µm x 500µm), alignment mark placement, or GDSII layer definitions..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-pulse">Syncing CAD Spec to Backend & Cloud...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Submit CAD Specification to Foundry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const DesignerPage = DesignerPageComponent;
export default DesignerPageComponent;