import { useState } from 'react';
import { BookOpen, Atom, Beaker, Camera, Activity, CircuitBoard } from 'lucide-react';

const tabs = [
  {
    key: 'motion',
    label: 'Motion',
    icon: Activity,
    theory: [
      'Projectile motion decomposes into horizontal and vertical components.',
      'Range R = (v^2 sin 2θ) / g and time T = 2v sin θ / g (neglecting air resistance).',
      'Newton’s 2nd Law: F = m·a. On an incline: a = g(sin θ − μ cos θ).',
    ],
  },
  {
    key: 'waves',
    label: 'Waves',
    icon: Beaker,
    theory: [
      'Wave speed v = f·λ. Superposition leads to interference and beats.',
      'Damped oscillation: x(t) = A e^(−βt) cos(ωt + φ).',
      'Resonance occurs when driving frequency matches natural frequency.',
    ],
  },
  {
    key: 'optics',
    label: 'Optics',
    icon: Camera,
    theory: [
      'Thin lens: 1/f = 1/v + 1/u with sign convention.',
      'Magnification m = −v/u. Real images invert; virtual remain upright.',
      'Snell’s Law: n1 sin θ1 = n2 sin θ2.',
    ],
  },
  {
    key: 'electricity',
    label: 'Electricity',
    icon: CircuitBoard,
    theory: [
      'Ohm’s Law: V = I·R. Power P = V·I = I^2R = V^2/R.',
      'Capacitor in RC: V(t) = V0(1 − e^(−t/RC)); discharge: V(t) = V0 e^(−t/RC).',
      'Kirchhoff’s laws conserve charge and energy in circuits.',
    ],
  },
];

export default function LearnPanel() {
  const [active, setActive] = useState('motion');

  const ActiveIcon = tabs.find((t) => t.key === active)?.icon || Atom;

  return (
    <section id="learn" className="relative py-16 md:py-24 bg-[#0b0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Learn the theory</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Concise explanations with clean visuals. Switch topics and connect equations with the simulations you explore.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md border transition ${
                  active === t.key
                    ? 'border-cyan-400/40 bg-cyan-400/10 text-white'
                    : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </div>

          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white/80">
              <ActiveIcon className="h-5 w-5 text-cyan-300" />
              <span className="uppercase tracking-wider text-xs">Key ideas</span>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-2 text-white/90">
              {tabs
                .find((t) => t.key === active)
                ?.theory.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
            </ul>
            <div className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-4 border border-white/10">
              <p className="text-white/70 text-sm">Tip: Use the controls above to match these equations with what you see in the simulations. Active learning cements intuition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
