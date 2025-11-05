import Spline from '@splinetool/react-spline';
import { Rocket, Play, BookOpen } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/80">Virtual Lab • 3D • Interactive</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Explore Physics in 3D
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Real-time, realistic, remarkable.</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Run experiments, tweak parameters, and understand the world through immersive simulations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experiments" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-white shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/20 transition">
                <Play className="h-4 w-4" />
                Start experimenting
              </a>
              <a href="#learn" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-4 py-2 text-white transition">
                <BookOpen className="h-4 w-4" />
                Learn concepts
              </a>
              <a href="#custom-lab" className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:border-white/40 px-4 py-2 text-white transition">
                <Rocket className="h-4 w-4" />
                Build custom lab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
