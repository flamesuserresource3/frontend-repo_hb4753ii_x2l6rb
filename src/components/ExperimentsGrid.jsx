import { useState } from 'react';
import { Beaker, Zap, Cube, Activity, Camera, CircuitBoard } from 'lucide-react';

const experiments = [
  {
    key: 'motion',
    title: 'Motion & Kinematics',
    icon: Activity,
    desc: 'Adjust mass, force, and angle to visualize trajectories and time-of-flight.',
    params: [
      { key: 'mass', label: 'Mass (kg)', min: 0.1, max: 10, step: 0.1, defaultValue: 1 },
      { key: 'velocity', label: 'Velocity (m/s)', min: 1, max: 50, step: 1, defaultValue: 20 },
      { key: 'angle', label: 'Angle (°)', min: 0, max: 90, step: 1, defaultValue: 45 },
      { key: 'gravity', label: 'Gravity (m/s²)', min: 1, max: 20, step: 0.1, defaultValue: 9.8 },
    ],
  },
  {
    key: 'waves',
    title: 'Waves & Oscillations',
    icon: Beaker,
    desc: 'Play with amplitude, frequency, and damping to see wave interference patterns.',
    params: [
      { key: 'amplitude', label: 'Amplitude', min: 0, max: 5, step: 0.1, defaultValue: 1 },
      { key: 'frequency', label: 'Frequency (Hz)', min: 0.1, max: 10, step: 0.1, defaultValue: 1 },
      { key: 'damping', label: 'Damping', min: 0, max: 1, step: 0.01, defaultValue: 0.05 },
    ],
  },
  {
    key: 'optics',
    title: 'Optics & Lenses',
    icon: Camera,
    desc: 'Move the object and change focal length to study image formation.',
    params: [
      { key: 'focal', label: 'Focal Length (cm)', min: 1, max: 50, step: 1, defaultValue: 10 },
      { key: 'objectDistance', label: 'Object Distance (cm)', min: 5, max: 100, step: 1, defaultValue: 25 },
    ],
  },
  {
    key: 'electricity',
    title: 'Electricity & Circuits',
    icon: CircuitBoard,
    desc: 'Change voltage and resistance to see current and power in real-time.',
    params: [
      { key: 'voltage', label: 'Voltage (V)', min: 0, max: 24, step: 0.5, defaultValue: 9 },
      { key: 'resistance', label: 'Resistance (Ω)', min: 1, max: 1000, step: 1, defaultValue: 100 },
    ],
  },
];

function Card({ title, desc, icon: Icon, children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition shadow-lg shadow-black/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 text-cyan-200">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-white/70 text-sm">{desc}</p>
          </div>
        </div>
        <Cube className="h-5 w-5 text-white/30 opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1 text-sm text-white/80">
        <span>{label}</span>
        <span className="text-white/60">{Number(value).toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-cyan-400"
      />
    </label>
  );
}

function Preview({ type, state }) {
  // Simple math previews to make it feel alive
  if (type === 'motion') {
    const v0 = state.velocity;
    const theta = (state.angle * Math.PI) / 180;
    const g = state.gravity;
    const range = (v0 * v0 * Math.sin(2 * theta)) / g;
    const time = (2 * v0 * Math.sin(theta)) / g;
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
        <p>Projected range: <span className="text-cyan-300">{range.toFixed(2)} m</span></p>
        <p>Time of flight: <span className="text-cyan-300">{time.toFixed(2)} s</span></p>
        <div className="mt-3 h-2 w-full rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${Math.min(100, (range / 100) * 100)}%` }} />
        </div>
      </div>
    );
  }
  if (type === 'waves') {
    const amplitude = state.amplitude;
    const frequency = state.frequency;
    const wavelength = (3e8 / (frequency * 1e6)) * 1e-3; // fake visual metric
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
        <p>Amplitude: <span className="text-cyan-300">{amplitude.toFixed(2)}</span></p>
        <p>Frequency: <span className="text-cyan-300">{frequency.toFixed(2)} Hz</span></p>
        <p>Wavelength: <span className="text-cyan-300">{wavelength.toFixed(2)} mm</span></p>
        <div className="mt-3 h-12 w-full rounded bg-white/5 relative overflow-hidden">
          <svg viewBox="0 0 200 40" className="absolute inset-0">
            <path d={Array.from({ length: 200 }, (_, x) => {
              const y = 20 + Math.sin((x / 200) * frequency * 2 * Math.PI * 4) * amplitude * 3;
              return `${x === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')} fill="none" stroke="url(#grad)" strokeWidth="2" />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  if (type === 'optics') {
    const f = state.focal;
    const u = state.objectDistance;
    const v = (f * u) / (u - f);
    const magnification = -v / u;
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
        <p>Image distance: <span className="text-cyan-300">{v.toFixed(2)} cm</span></p>
        <p>Magnification: <span className="text-cyan-300">{magnification.toFixed(2)}</span></p>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-8 w-1 bg-white/30" />
          <div className="h-1 w-24 bg-white/30" />
          <div className="h-8 w-1 bg-gradient-to-b from-cyan-400 to-violet-500" style={{ transform: `scaleY(${Math.abs(magnification)})` }} />
        </div>
      </div>
    );
  }
  if (type === 'electricity') {
    const V = state.voltage;
    const R = Math.max(0.001, state.resistance);
    const I = V / R;
    const P = V * I;
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
        <p>Current: <span className="text-cyan-300">{I.toFixed(2)} A</span></p>
        <p>Power: <span className="text-cyan-300">{P.toFixed(2)} W</span></p>
        <div className="mt-3 h-2 w-full rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500" style={{ width: `${Math.min(100, (P / 200) * 100)}%` }} />
        </div>
      </div>
    );
  }
  return null;
}

export default function ExperimentsGrid() {
  return (
    <section id="experiments" className="relative py-16 md:py-24 bg-gradient-to-b from-black via-black to-[#0b0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Experiments</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Pick a domain and adjust parameters to see instant results. Full 3D interaction is available inside each experiment.</p>
          </div>
          <a href="#custom-lab" className="hidden md:inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Build your own →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((exp) => (
            <ExperimentCard key={exp.key} config={exp} />
          ))}
        </div>

        <div id="custom-lab" className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white text-xl font-semibold">Custom Lab (Prototype)</h3>
              <p className="text-white/70">Combine modules, save presets, and share labs. 3D scenes powered by WebGL & Three.js with realistic lighting.
              </p>
            </div>
            <a href="#home" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-white shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/20 transition">
              <Zap className="h-4 w-4" />
              Try a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperimentCard({ config }) {
  const initial = Object.fromEntries(config.params.map((p) => [p.key, p.defaultValue]));
  const [state, setState] = useState(initial);

  return (
    <Card title={config.title} desc={config.desc} icon={config.icon}>
      <div className="space-y-3">
        {config.params.map((p) => (
          <Slider
            key={p.key}
            label={p.label}
            min={p.min}
            max={p.max}
            step={p.step}
            value={state[p.key]}
            onChange={(val) => setState((s) => ({ ...s, [p.key]: val }))}
          />
        ))}
      </div>
      <Preview type={config.key} state={state} />
    </Card>
  );
}
