import { useState } from 'react';
import { Atom, Rocket, BookOpen, Settings } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500">
              <Atom className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">Physics Lab 3D</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#experiments" className="text-white/80 hover:text-white transition">Experiments</a>
            <a href="#learn" className="text-white/80 hover:text-white transition">Learn</a>
            <a href="#custom-lab" className="text-white/80 hover:text-white transition">Custom Lab</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition">
              <Rocket className="h-4 w-4" />
              <span>Launch</span>
            </a>
            <a href="#settings" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 hover:border-white/40 text-white transition">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </a>
          </div>

          <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-2">
            <a onClick={() => setOpen(false)} href="#experiments" className="block text-white/80 hover:text-white">Experiments</a>
            <a onClick={() => setOpen(false)} href="#learn" className="block text-white/80 hover:text-white">Learn</a>
            <a onClick={() => setOpen(false)} href="#custom-lab" className="block text-white/80 hover:text-white">Custom Lab</a>
            <a onClick={() => setOpen(false)} href="#about" className="block text-white/80 hover:text-white">About</a>
            <a onClick={() => setOpen(false)} href="#get-started" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white">
              <Rocket className="h-4 w-4" /> Launch
            </a>
            <a onClick={() => setOpen(false)} href="#settings" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 text-white">
              <Settings className="h-4 w-4" /> Settings
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
