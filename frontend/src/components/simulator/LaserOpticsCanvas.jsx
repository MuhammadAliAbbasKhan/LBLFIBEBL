import React, { useRef, useEffect, useState } from 'react';
import { Sliders, RefreshCw, Zap, Eye, Play, Pause, Layers, Cpu, ShieldCheck } from 'lucide-react';

export const LaserOpticsCanvas = ({ openAuthModal, user }) => {
  const canvasRef = useRef(null);
  
  // Interactive Simulation Controls
  const [wavelength, setWavelength] = useState(532); // nm
  const [waist, setWaist] = useState(1.2); // mm
  const [focalLength, setFocalLength] = useState(120); // mm
  const [lensPosition, setLensPosition] = useState(240); // px on canvas
  const [mode, setMode] = useState('lbl'); // 'lbl', 'ebl', 'fib'
  const [eblVoltage, setEblVoltage] = useState(100); // kV
  const [fibDose, setFibDose] = useState(50); // nC/cm2
  const [isAnimating, setIsAnimating] = useState(true);

  // Telemetry state
  const [rayleighLength, setRayleighLength] = useState(0);
  const [focusedSpotSize, setFocusedSpotSize] = useState(0);
  const [divergenceAngle, setDivergenceAngle] = useState(0);

  // Wavelength to RGB color utility
  const getWavelengthColor = (wl) => {
    if (mode === 'ebl') return '#00f0ff'; // Cyan electron beam
    if (mode === 'fib') return '#ff9900'; // Amber ion beam
    if (wl < 450) return '#8b5cf6'; // Violet / UV
    if (wl < 550) return '#10b981'; // Green
    if (wl < 700) return '#ef4444'; // Red
    return '#00d2ff'; // NIR / Infra
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particleOffset = 0;

    const render = () => {
      // Clear canvas with dark grid background
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.fillStyle = '#0b1329';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Optical Axis Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Physics Calculation
      const lambdaM = (mode === 'lbl' ? wavelength : mode === 'ebl' ? 0.0037 : 0.0001) * 1e-9;
      const w0M = waist * 1e-3;
      const zR = (Math.PI * Math.pow(w0M, 2)) / lambdaM;
      setRayleighLength((zR * 1e3).toFixed(2));

      // Focused spot size calculation using f
      const fM = focalLength * 1e-3;
      const w0Prime = (lambdaM * fM) / (Math.PI * w0M);
      setFocusedSpotSize((w0Prime * 1e6).toFixed(2)); // um

      const theta = (lambdaM / (Math.PI * w0M)) * 1000; // mrad
      setDivergenceAngle(theta.toFixed(2));

      const beamColor = getWavelengthColor(wavelength);

      // Draw Beam Envelope Path
      ctx.beginPath();
      const numSteps = width;
      const sourceX = 60;
      
      // Upper Envelope
      for (let x = sourceX; x < width; x += 2) {
        let z = (x - sourceX);
        let currentW;
        if (x < lensPosition) {
          currentW = waist * 15 * Math.sqrt(1 + Math.pow(z / 80, 2));
        } else {
          let zLens = (lensPosition - sourceX);
          let wAtLens = waist * 15 * Math.sqrt(1 + Math.pow(zLens / 80, 2));
          let deltaZ = x - lensPosition;
          let focusDist = focalLength;
          let factor = 1 - deltaZ / focusDist;
          currentW = Math.max(2, Math.abs(wAtLens * factor));
        }
        if (x === sourceX) ctx.moveTo(x, centerY - currentW);
        else ctx.lineTo(x, centerY - currentW);
      }

      // Lower Envelope
      for (let x = width; x >= sourceX; x -= 2) {
        let z = (x - sourceX);
        let currentW;
        if (x < lensPosition) {
          currentW = waist * 15 * Math.sqrt(1 + Math.pow(z / 80, 2));
        } else {
          let zLens = (lensPosition - sourceX);
          let wAtLens = waist * 15 * Math.sqrt(1 + Math.pow(zLens / 80, 2));
          let deltaZ = x - lensPosition;
          let focusDist = focalLength;
          let factor = 1 - deltaZ / focusDist;
          currentW = Math.max(2, Math.abs(wAtLens * factor));
        }
        ctx.lineTo(x, centerY + currentW);
      }
      ctx.closePath();

      // Beam Fill Gradient
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, beamColor + '55');
      grad.addColorStop(lensPosition / width, beamColor + '99');
      grad.addColorStop(1, beamColor + '33');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = beamColor;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw Laser / EBL / FIB Source Box
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#00d2ff';
      ctx.lineWidth = 2;
      ctx.fillRect(10, centerY - 40, 50, 80);
      ctx.strokeRect(10, centerY - 40, 50, 80);
      
      ctx.fillStyle = beamColor;
      ctx.font = 'bold 10px Inter';
      ctx.fillText(mode.toUpperCase(), 18, centerY + 4);

      // Draw Lens
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(lensPosition, centerY, 12, 70, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw Particles on Beam
      if (isAnimating) {
        particleOffset = (particleOffset + 2) % 30;
        ctx.fillStyle = '#ffffff';
        for (let pX = sourceX + particleOffset; pX < width; pX += 35) {
          let deltaZ = pX - lensPosition;
          let factor = pX < lensPosition ? 1 : Math.abs(1 - deltaZ / focalLength);
          let pY = centerY + (Math.sin(pX * 0.1) * 8 * factor);
          ctx.beginPath();
          ctx.arc(pX, pY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [wavelength, waist, focalLength, lensPosition, mode, isAnimating]);

  const applyPreset = (type) => {
    if (type === 'fiber') {
      setWavelength(633);
      setWaist(0.8);
      setFocalLength(60);
      setLensPosition(200);
      setMode('lbl');
    } else if (type === 'ebl_spot') {
      setWavelength(400);
      setWaist(0.4);
      setFocalLength(40);
      setLensPosition(280);
      setMode('ebl');
    } else if (type === 'high_power') {
      setWavelength(1064);
      setWaist(2.5);
      setFocalLength(150);
      setLensPosition(320);
      setMode('fib');
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              LBLFIBEBL 2D Interactive Physics & Lithography Engine
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                LIVE CANVAS
              </span>
            </h2>
            <p className="text-xs text-gray-400">
              Real-time Gaussian Beam propagation $w(z)$, Rayleigh range $z_R$, and ABCD focal lens refraction
            </p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-gray-800 p-1.5 rounded-2xl border border-gray-700 text-xs font-semibold">
          <button
            onClick={() => setMode('lbl')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              mode === 'lbl' ? 'bg-cyan-500 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            LBL Laser
          </button>
          <button
            onClick={() => setMode('ebl')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              mode === 'ebl' ? 'bg-cyan-500 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            EBL Electron
          </button>
          <button
            onClick={() => setMode('fib')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              mode === 'fib' ? 'bg-cyan-500 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            FIB Ion Beam
          </button>
        </div>
      </div>

      {/* HTML5 Canvas */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-800 shadow-inner bg-black">
        <canvas
          ref={canvasRef}
          width={800}
          height={320}
          className="w-full h-auto block"
        />

        <div className="absolute top-3 right-3 flex items-center gap-2 bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-800 text-xs text-gray-300">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="flex items-center gap-1 hover:text-white"
          >
            {isAnimating ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            {isAnimating ? 'Pause Flow' : 'Animate Ray Particles'}
          </button>
        </div>
      </div>

      {/* Preset Actions & Telemetry Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Preset Action Buttons */}
        <div className="lg:col-span-1 bg-gray-800/50 border border-gray-800 rounded-2xl p-4 space-y-2">
          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Simulation Presets
          </span>
          <button
            onClick={() => applyPreset('fiber')}
            className="w-full text-left p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 border border-gray-700 transition-colors flex items-center justify-between"
          >
            <span>Fiber Coupler (LBL)</span>
            <span className="text-[10px] text-cyan-400">633 nm</span>
          </button>
          <button
            onClick={() => applyPreset('ebl_spot')}
            className="w-full text-left p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 border border-gray-700 transition-colors flex items-center justify-between"
          >
            <span>Nanofabrication Spot (EBL)</span>
            <span className="text-[10px] text-cyan-400">100 kV</span>
          </button>
          <button
            onClick={() => applyPreset('high_power')}
            className="w-full text-left p-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 border border-gray-700 transition-colors flex items-center justify-between"
          >
            <span>High-Power Focus (FIB)</span>
            <span className="text-[10px] text-amber-400">1064 nm</span>
          </button>
        </div>

        {/* Telemetry Panels */}
        <div className="lg:col-span-3 grid grid-cols-3 gap-3">
          <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-4">
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Rayleigh Length ($z_R$)
            </span>
            <div className="text-xl font-extrabold text-cyan-400">
              {rayleighLength} <span className="text-xs font-medium text-gray-400">mm</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">Distance to $\sqrt{2} w_0$ waist expansion</p>
          </div>

          <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-4">
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Focal Spot Size ($w'_0$)
            </span>
            <div className="text-xl font-extrabold text-emerald-400">
              {focusedSpotSize} <span className="text-xs font-medium text-gray-400">µm</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">Transverse waist at focal plane</p>
          </div>

          <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-4">
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Divergence Angle ($\theta$)
            </span>
            <div className="text-xl font-extrabold text-indigo-400">
              {divergenceAngle} <span className="text-xs font-medium text-gray-400">mrad</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">Far-field asymptotic beam spreading</p>
          </div>
        </div>

      </div>

      {/* Sliders Panel */}
      <div className="bg-gray-800/40 border border-gray-800 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {mode === 'lbl' ? (
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
              <span>Wavelength ($\lambda$)</span>
              <span className="text-cyan-400">{wavelength} nm</span>
            </div>
            <input
              type="range"
              min={350}
              max={1100}
              value={wavelength}
              onChange={(e) => setWavelength(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-gray-700 rounded-lg cursor-pointer"
            />
          </div>
        ) : mode === 'ebl' ? (
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
              <span>Acceleration Voltage</span>
              <span className="text-cyan-400">{eblVoltage} kV</span>
            </div>
            <input
              type="range"
              min={50}
              max={150}
              value={eblVoltage}
              onChange={(e) => setEblVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-gray-700 rounded-lg cursor-pointer"
            />
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
              <span>FIB Ion Milling Dose</span>
              <span className="text-amber-400">{fibDose} nC/cm²</span>
            </div>
            <input
              type="range"
              min={10}
              max={200}
              value={fibDose}
              onChange={(e) => setFibDose(Number(e.target.value))}
              className="w-full accent-amber-500 bg-gray-700 rounded-lg cursor-pointer"
            />
          </div>
        )}

        <div>
          <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
            <span>Input Beam Waist ($w_0$)</span>
            <span className="text-cyan-400">{waist} mm</span>
          </div>
          <input
            type="range"
            min={0.2}
            max={4.0}
            step={0.1}
            value={waist}
            onChange={(e) => setWaist(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-gray-700 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
            <span>Lens Focal Length ($f$)</span>
            <span className="text-cyan-400">{focalLength} mm</span>
          </div>
          <input
            type="range"
            min={30}
            max={300}
            value={focalLength}
            onChange={(e) => setFocalLength(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-gray-700 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1.5">
            <span>Lens Position ($z_L$)</span>
            <span className="text-cyan-400">{lensPosition} px</span>
          </div>
          <input
            type="range"
            min={100}
            max={550}
            value={lensPosition}
            onChange={(e) => setLensPosition(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-gray-700 rounded-lg cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};

export default LaserOpticsCanvas;
