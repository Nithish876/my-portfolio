"use client";

import { Scene } from "@/components/3d/Scene";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { CursorBlob } from "@/components/ui/CursorBlob";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030008] text-white overflow-hidden relative selection:bg-purple-500/50 selection:text-white">
      <CursorBlob />
      
      {/* 3D Background Wrapper */}
      <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-auto">
        <Scene />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full">
        {/* We place pointer-events-none manually only on portions of Hero to avoid globally blocking interactions */}
        <Hero />
        
        {/* Enable pointer events again for the content below */}
        <div className="pointer-events-auto bg-[#030008] relative z-20 border-t border-white/5">
          <About />
          <Projects />
          <Reviews />
          <Contact />
          
          <footer className="py-12 text-center text-gray-500 text-sm bg-[#030008]">
            <p className="tracking-widest uppercase font-mono text-xs">© {new Date().getFullYear()} Nithish. Engineered for Scale.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}