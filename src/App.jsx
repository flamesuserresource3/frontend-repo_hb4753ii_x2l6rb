import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExperimentsGrid from './components/ExperimentsGrid';
import LearnPanel from './components/LearnPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero3D />
        <ExperimentsGrid />
        <LearnPanel />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-[#0b0b14] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">About Physics Lab 3D</h2>
            <p className="mt-4 text-white/80">A futuristic, educational lab where you can run real-world physics experiments in an immersive 3D space. Built with React and WebGL, it blends realistic lighting, smooth transitions, and interactive controls to make learning enjoyable on both desktop and mobile.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat label="Experiments" value="20+" />
              <Stat label="Interactive Params" value="50+" />
              <Stat label="Devices" value="Desktop & Mobile" />
              <Stat label="Rendering" value="WebGL / Spline" />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Design guidelines</h3>
            <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
              <li>Color: deep space background with cyan → violet accents</li>
              <li>Typography: modern, readable sans with generous spacing</li>
              <li>Motion: subtle parallax, smooth hover, no jank</li>
              <li>Accessibility: high contrast, keyboard-friendly controls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">{value}</p>
      <p className="text-white/70 text-sm">{label}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Physics Lab 3D. Learn fearlessly.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="text-white/70 hover:text-white">Home</a>
          <a href="#experiments" className="text-white/70 hover:text-white">Experiments</a>
          <a href="#learn" className="text-white/70 hover:text-white">Learn</a>
          <a href="#about" className="text-white/70 hover:text-white">About</a>
        </div>
      </div>
    </footer>
  );
}
