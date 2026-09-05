'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Check, ChevronRight, Instagram, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';

const image = {
  hero: 'https://images.unsplash.com/photo-1687881091813-fb2626c3d416?auto=format&fit=crop&w=2200&q=88',
  house: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?auto=format&fit=crop&w=1400&q=85',
  commercial: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1400&q=85',
  civil: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1400&q=85',
  about: 'https://images.unsplash.com/photo-1683936367261-509ce662cf87?auto=format&fit=crop&w=1400&q=85',
  mountains: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2200&q=85',
  cement: 'https://images.pexels.com/photos/29817952/pexels-photo-29817952.jpeg?auto=compress&cs=tinysrgb&w=1000',
  bricks: 'https://images.pexels.com/photos/33160441/pexels-photo-33160441.jpeg?auto=compress&cs=tinysrgb&w=1000',
  steel: 'https://images.pexels.com/photos/37475275/pexels-photo-37475275.jpeg?auto=compress&cs=tinysrgb&w=1000',
  sand: 'https://images.pexels.com/photos/13131005/pexels-photo-13131005.jpeg?auto=compress&cs=tinysrgb&w=1000',
  aggregate: 'https://images.pexels.com/photos/32967189/pexels-photo-32967189.jpeg?auto=compress&cs=tinysrgb&w=1000',
  otherMaterials: 'https://images.pexels.com/photos/36815365/pexels-photo-36815365.jpeg?auto=compress&cs=tinysrgb&w=1000',
};
const phone = '+916005413428';
const alternatePhone = '+917051009486';
const email = 'orionconstructionsonline@gmail.com';
const founderInstagram = 'https://www.instagram.com/mohammadsamil_/?igsh=MTk2cDFxdXV3Nmlrbw==';
const companyInstagram = 'https://www.instagram.com/orionconstructions_/?igsh=MWM0ajNkMW84OHNuMw==';
const facebook = 'https://www.facebook.com/share/19FkKJ6Fjr/';
const whatsappFor = (message: string) => `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
const whatsappHeader = whatsappFor('Hello Orion Constructions, I would like to start a construction project.');
const whatsappHero = whatsappFor('Hello Orion Constructions, I would like to tell you about my construction project.');
const whatsappMountain = whatsappFor('Hello Orion Constructions, I would like to discuss my project in Kashmir.');
const whatsappFooter = whatsappFor('Hello Orion Constructions, I would like to connect about construction services.');
const whatsappFloating = whatsappFor('Hello Orion Constructions, I have a quick construction enquiry.');
const nav = [['Services', '#services'], ['Materials', '#materials'], ['Approach', '#approach'], ['About', '#about'], ['Contact', '#contact']];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell header-inner"><a href="#home" className="brand"><span className="brand-mark">O</span><span><strong>Orion</strong><small>Constructions · Kashmir</small></span></a><nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="header-actions"><a className="phone-link" href={`tel:${phone}`}><Phone size={15}/> +91 60054 13428</a><a className="button button-dark button-small" href={whatsappHeader}>Start a project <ArrowUpRight size={15}/></a></div><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div>{open && <nav className="mobile-nav">{nav.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href}>{label}</a>)}<a className="button button-dark" href={whatsappHeader}>Start a project <ArrowUpRight size={15}/></a></nav>}</header>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) { return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{children && <p>{children}</p>}</div>; }

function Hero() {
  return <section id="home" className="hero"><Image src={image.hero} alt="Orion construction project in Kashmir" fill priority sizes="100vw" className="hero-image"/><div className="hero-shade"/><div className="shell hero-content"><div className="hero-copy"><Eyebrow>Kashmir · Construction & civil works</Eyebrow><h1>Built for the<br/><em>life ahead.</em></h1><p>Thoughtful construction for homes, businesses and the places that bring Kashmir forward.</p><div className="hero-buttons"><a className="button button-accent" href={whatsappHero}>Tell us about your project <ArrowUpRight size={17}/></a><a className="text-link light" href="#services">Explore our services <ChevronRight size={17}/></a></div></div><div className="hero-note"><span>01 / 03</span><span>Reliable work.<br/>Clear communication.</span></div></div><a href="#services" className="scroll-cue">Scroll to explore <span>↓</span></a></section>;
}

function Intro() {
  return <section className="intro"><div className="shell intro-grid"><div><Eyebrow>01 / What we do</Eyebrow><h2>Strong foundations.<br/><span>Simple process.</span></h2></div><div className="intro-copy"><p>Orion Constructions is a Kashmir-based construction partner for people who care about how their spaces are built.</p><p className="muted">From the first conversation to the final detail, we bring practical thinking, capable execution and a direct line of communication to every project.</p><a className="text-link" href="#contact">Talk to our team <ArrowUpRight size={16}/></a></div></div><div className="shell stat-row"><div><strong>01</strong><span>Clear point<br/>of contact</span></div><div><strong>02</strong><span>Residential &<br/>commercial work</span></div><div><strong>03</strong><span>Serving across<br/>Kashmir</span></div><div className="stat-last"><strong>24/7</strong><span>Easy enquiry<br/>on WhatsApp</span></div></div></section>;
}

const services = [
  { number: '01', title: 'Residential construction', copy: 'Homes made for everyday life, shaped around your site, needs and ambition.', image: image.house, whatsapp: whatsappFor('Hello Orion Constructions, I am interested in residential construction for my home.') },
  { number: '02', title: 'Commercial spaces', copy: 'Practical, considered spaces for shops, offices and growing businesses.', image: image.commercial, whatsapp: whatsappFor('Hello Orion Constructions, I would like to discuss building a commercial space.') },
  { number: '03', title: 'Civil & structural works', copy: 'The essential work beneath and around your project, delivered with care.', image: image.civil, whatsapp: whatsappFor('Hello Orion Constructions, I need help with civil or structural works.') },
];
function Services() {
  return <section id="services" className="services section"><div className="shell"><SectionHeading eyebrow="02 / Capabilities" title="What we build" >One capable team for the work that matters most.</SectionHeading><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><a className="service-photo" href={service.whatsapp} aria-label={`Enquire about ${service.title}`}><Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 33vw"/></a><div className="service-body"><span className="card-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><a href={service.whatsapp} aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={18}/></a></div></article>)}</div></div></section>;
}

const materials = [
  { title: 'Cement', copy: 'Quality cement for residential, commercial and general construction needs.', image: image.cement, whatsapp: whatsappFor('Hello Orion Constructions, I would like a quote for cement supply.') },
  { title: 'Bricks', copy: 'Construction bricks for masonry and building work, supplied reliably to your site.', image: image.bricks, whatsapp: whatsappFor('Hello Orion Constructions, I would like a quote for bricks supply.') },
  { title: 'Steel', copy: 'Structural steel and reinforcement bars for strong, dependable construction.', image: image.steel, whatsapp: whatsappFor('Hello Orion Constructions, I would like a quote for steel and reinforcement bars.') },
  { title: 'Sand', copy: 'Construction-grade sand for concrete, plastering, masonry and site work.', image: image.sand, whatsapp: whatsappFor('Hello Orion Constructions, I would like a quote for construction sand.') },
  { title: 'Aggregate', copy: 'Aggregate for concrete, foundations, roads and other construction work.', image: image.aggregate, whatsapp: whatsappFor('Hello Orion Constructions, I would like a quote for aggregate supply.') },
  { title: 'Other construction materials', copy: 'Looking for another material for your project? Get in touch and we will source it.', image: image.otherMaterials, whatsapp: whatsappFor('Hello Orion Constructions, I need help sourcing another construction material.') },
];
function Materials() {
  return <section id="materials" className="materials section"><div className="shell"><SectionHeading eyebrow="03 / Additional service" title="Construction materials supply">As an additional service, Orion Constructions also supplies essential construction materials across Kashmir for residential, commercial and other construction projects.</SectionHeading><div className="materials-grid">{materials.map((material) => <article className="material-card" key={material.title}><a className="material-photo" href={material.whatsapp} aria-label={`Enquire about ${material.title}`}><Image src={material.image} alt={material.title} fill sizes="(max-width: 900px) 100vw, 33vw"/></a><div className="material-body"><h3>{material.title}</h3><p>{material.copy}</p></div></article>)}</div></div></section>;
}

function About() {
  return <section id="about" className="about section"><div className="shell about-grid"><div className="about-image"><Image src={image.about} alt="Construction team working on site" fill sizes="(max-width: 900px) 100vw, 50vw"/><span>On site · Kashmir</span></div><div className="about-copy"><SectionHeading eyebrow="04 / The Orion way" title="Good work feels clear."/><p className="lead">Construction can be complex. Working with us shouldn’t be.</p><p>We keep the process grounded in honest conversations, realistic planning and dependable work on site. Whether it’s a new home, a commercial property or a civil project, our focus stays the same: build it right and keep you informed.</p><div className="check-list"><span><Check size={16}/> Straightforward communication</span><span><Check size={16}/> Practical project planning</span><span><Check size={16}/> Quality-minded execution</span></div><p className="founder-line">Mohammad Samil <span>Founder, Orion Constructions</span></p><div className="social-row"><a className="text-link" href={founderInstagram}>Founder Instagram <ArrowUpRight size={16}/></a><a className="text-link" href={companyInstagram}>Company Instagram <ArrowUpRight size={16}/></a></div></div></div></section>;
}

function Founder() {
  return <section className="founder section"><div className="shell founder-grid"><div className="founder-photo"><Image src="/assets/founder.jpeg" alt="Mohammad Samil, Founder of Orion Constructions" fill sizes="(max-width: 900px) 100vw, 40vw"/><div className="founder-badge">Founder<br/><span>Orion Constructions</span></div></div><div className="founder-copy"><Eyebrow>05 / A note from the founder</Eyebrow><h2>Building trust,<br/><em>one project at a time.</em></h2><blockquote>“Thank you for considering Orion Constructions. Every project is an opportunity to create something useful, lasting and meaningful. My promise is to keep the process honest, the communication clear and the work worthy of your trust.”</blockquote><div className="founder-signature"><strong>Mohammad Samil</strong><span>Founder & Director</span></div><a className="text-link" href={founderInstagram}>Follow Mohammad on Instagram <ArrowUpRight size={16}/></a></div></div></section>;
}

function Approach() {
  const steps = [['01', 'Listen', 'We start with your vision, your site and what matters to you.'], ['02', 'Plan', 'We turn the requirement into a clear, practical way forward.'], ['03', 'Build', 'Our team gets to work with care, coordination and attention to detail.']];
  return <section id="approach" className="approach section"><div className="shell"><SectionHeading eyebrow="06 / Our approach" title="A better way to build"/><div className="steps">{steps.map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>;
}

function Enquiry() {
  const [sent, setSent] = useState(false);
  return <section id="contact" className="enquiry section"><div className="shell enquiry-grid"><div><Eyebrow>07 / Let’s talk</Eyebrow><h2>Have a project<br/><em>in mind?</em></h2><p>Tell us a little about what you’re building. We’ll get back to you and take it from there.</p><div className="contact-details"><span><MapPin size={17}/> Across Kashmir</span><a href={`tel:${phone}`}><Phone size={17}/> +91 60054 13428</a><a href={`tel:${alternatePhone}`}><Phone size={17}/> +91 70510 09486</a><a href={`mailto:${email}`}>{email}</a></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required placeholder="Your name"/></label><label>Phone number<input required type="tel" placeholder="Your phone number"/></label><label className="full">What are you building?<select><option>House / residential project</option><option>Commercial space</option><option>Civil or structural work</option><option>Renovation</option></select></label><label className="full">A few details<textarea rows={4} placeholder="Location, size, timeline..."/></label><button className="button button-accent full" type="submit">{sent ? <><Check size={17}/> Enquiry received</> : <>Send enquiry <ArrowUpRight size={17}/></>}</button></form></div></section>;
}

function Footer() { return <footer><div className="shell footer-grid"><div><a className="brand" href="#home"><span className="brand-mark">O</span><span><strong>Orion</strong><small>Constructions · Kashmir</small></span></a><p className="footer-note">Building useful, lasting spaces across Kashmir.</p></div><div><Eyebrow>Navigate</Eyebrow>{nav.map(([label, href]) => <a className="footer-link" key={label} href={href}>{label}</a>)}</div><div><Eyebrow>Connect</Eyebrow><a className="footer-link" href={whatsappFooter}><MessageCircle size={15}/> WhatsApp</a><a className="footer-link" href={companyInstagram}><Instagram size={15}/> Company Instagram</a><a className="footer-link" href={founderInstagram}><Instagram size={15}/> Founder Instagram</a><a className="footer-link" href={facebook}>Facebook</a><a className="footer-link" href={`mailto:${email}`}>{email}</a></div></div><div className="shell footer-bottom"><span>© 2026 Orion Constructions</span><span>Construction · Civil works · Kashmir</span></div></footer>; }

export default function Site() { return <><Header/><main><Hero/><Intro/><Services/><Materials/><About/><Founder/><Approach/><section className="mountain"><Image src={image.mountains} alt="Kashmir mountains" fill sizes="100vw"/><div className="mountain-overlay"/><div className="shell mountain-copy"><Eyebrow>Built here</Eyebrow><h2>Rooted in Kashmir.<br/><em>Ready for what’s next.</em></h2><a className="button button-light" href={whatsappMountain}>Discuss your project <ArrowUpRight size={17}/></a></div></section><Enquiry/></main><Footer/><a className="whatsapp-float" href={whatsappFloating} aria-label="Chat on WhatsApp"><MessageCircle size={21}/></a></>; }
