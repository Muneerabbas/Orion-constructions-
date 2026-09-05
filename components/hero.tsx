import Image from 'next/image';
import { ArrowDown, MessageCircle, Phone } from 'lucide-react';

const heroImage = 'https://images.unsplash.com/photo-1687881091813-fb2626c3d416?auto=format&fit=crop&w=2400&q=90';
const whatsapp = 'https://wa.me/919419000000?text=Hello%20Orion%20Constructions,%20I%20would%20like%20to%20discuss%20a%20construction%20project.';

export default function ReferenceHero() {
  return <section id="home" className="reference-hero relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
    <Image src={heroImage} alt="Construction site with the Kashmir mountains in the background" fill priority sizes="100vw" className="object-cover object-center" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/35" />
    <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8 py-28 md:py-32">
      <p className="font-display text-xs md:text-sm tracking-[.42em] uppercase text-amber">Kashmir&apos;s Construction Partner</p>
      <h1 className="mt-7 max-w-[850px] font-display text-[4rem] sm:text-[5.5rem] lg:text-[6.5rem] font-bold uppercase leading-[.94] tracking-[-.025em] text-white">Build Your Vision.<br />Build With <span className="text-amber">Orion.</span></h1>
      <div className="mt-8 max-w-[640px]">
        <p className="text-base md:text-lg leading-[1.55] text-white/70">Reliable construction services, civil works and building solutions for residential, commercial and other projects across Kashmir.</p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/50">Tell us about your project and let&apos;s discuss how we can bring your vision to life.</p>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a href={whatsapp} className="flex min-h-[58px] items-center justify-center gap-3 bg-amber px-7 md:px-8 text-[#0a0a0a] font-display text-xs md:text-sm font-semibold tracking-[.14em] uppercase hover:bg-white transition-colors"><MessageCircle size={20} /> Start Your Construction Project</a>
        <a href="tel:+919419000000" className="flex min-h-[58px] items-center justify-center gap-3 border border-white/35 px-7 md:px-8 text-white font-display text-xs md:text-sm font-semibold tracking-[.14em] uppercase hover:border-amber hover:text-amber transition-colors"><Phone size={16} /> Call For Construction Enquiry</a>
      </div>
      <p className="mt-10 text-xs tracking-[.32em] uppercase text-white/40">Serving Construction Requirements Across Kashmir</p>
    </div>
    <a href="#services" aria-label="Scroll to services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/55"><ArrowDown size={20} className="animate-bounce" /></a>
  </section>;
}
