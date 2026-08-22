import React, { useState } from 'react';
import { Zap, Cpu, Layers, FileText, Send, CheckCircle2, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import LaserOpticsCanvas from '../components/simulator/LaserOpticsCanvas';
import { useToast } from '../context/ToastContext';
import apiService from '../services/api';

export const DesignerPageComponent = ({ user, openAuthModal }) => {
  const [userName, setUserName] = useState(user?.name || '');
  const [userEmail, setUserEmail] = useState(user?.email || '');
  const [companyName, setCompanyName] = useState('');
  const [projectTitle, setProjectTitle] = useState('Nanofabrication Optical Layout #1');
  const [serviceType, setServiceType] = useState('EBL Patterning');
  const [industry, setIndustry] = useState('Quantum Computing');
  const [voltage, setVoltage] = useState('100kV');
  const [resist, setResist] = useState('PMMA 950K');
  const [substrate, setSubstrate] = useState('Silicon (100)');
  const [specifications, setSpecifications] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleSpecSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      addToast('🔒 Premium Access Required: Please sign in or register to submit technical CAD specifications.', 'warning');
      openAuthModal();
      return;
    }

    setLoading(true);
    const res = await apiService.submitServiceRequest({
      user_name: userName || user.name || 'Engineer',
      user_email: userEmail || user.email,
      company_name: companyName,
      project_title: projectTitle,
      service_type: serviceType,
      industry: industry,
      wavelength_range: `${voltage} | ${resist} | ${substrate}`,
      system_specifications: specifications,
    });

    setLoading(false);
    if (res.success) {
      addToast(res.message || 'Technical CAD specification submitted to LBLFIBEBL engineering team!', 'success');
      setSpecifications('');
    } else {
      addToast(res.message || 'Submission failed', 'error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            LBLFIBEBL DESIGNER ENGINE
          </div>
          <h1 className="text-3xl font-extrabold text-white">
            Interactive Optics & Nanofabrication Workbench
          </h1>
          <p className="text-xs text-gray-300">
            Simulate Gaussian beam propagation, EBL electron scattering, and export technical CAD specifications.
          </p>
        </div>
      </div>

      {/* Interactive Physics Canvas */}
      <LaserOpticsCanvas openAuthModal={openAuthModal} user={user} />

      {/* Technical CAD Specification Builder */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Nanofabrication CAD Technical Specification Portal
            </h3>
            <p className="text-xs text-gray-400">
              Submit custom GDSII/OASIS lithography parameters directly to LBLFIBEBL foundry engineers
            </p>
          </div>
        </div>

        <form onSubmit={handleSpecSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Engineer / User Name *
              </label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Dr. Hans Weber"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Contact Email *
              </label>
              <input
                type="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="weber@quantum-institute.de"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Institution / Organization
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Ferdinand-Braun-Institut"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Lithography Service
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="EBL Patterning">EBL High-Resolution Patterning</option>
                <option value="FIB Milling">FIB Direct-Write Milling</option>
                <option value="LBL Laser Mask">LBL Direct Laser Writing</option>
                <option value="Mix and Match">Mix & Match Lithography</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                EBL Acceleration Voltage
              </label>
              <select
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="50kV">50 kV</option>
                <option value="100kV">100 kV (Recommended)</option>
                <option value="150kV">150 kV Ultra-High Resolution</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Resist Chemistry
              </label>
              <select
                value={resist}
                onChange={(e) => setResist(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="PMMA 950K">PMMA 950K</option>
                <option value="ZEP 520A">ZEP 520A</option>
                <option value="HSQ Negative">HSQ Inorganic Negative</option>
                <option value="CSAR 62">CSAR 62</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Substrate Type
              </label>
              <select
                value={substrate}
                onChange={(e) => setSubstrate(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Silicon (100)">Silicon (100) Wafer</option>
                <option value="Fused Silica / Quartz">Fused Silica / Quartz</option>
                <option value="GaAs / InP Compound">GaAs / InP Compound</option>
                <option value="Diamond Substrate">Diamond Substrate</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Technical CAD Specifications & Dose Requirements
            </label>
            <textarea
              rows={4}
              required
              value={specifications}
              onChange={(e) => setSpecifications(e.target.value)}
              placeholder="Detail line pitch, target critical dimension (CD in nm), field size (e.g. 500µm x 500µm), alignment mark placement, or GDSII layer definitions..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2"
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
  );
};

export const DesignerPage = DesignerPageComponent;
export default DesignerPageComponent;
