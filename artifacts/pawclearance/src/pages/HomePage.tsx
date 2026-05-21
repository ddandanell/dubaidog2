import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  Minus,
  FileSearch,
  FileCheck,
  Stethoscope,
  Stamp,
  Plane,
  Home,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Globe2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "971501234567";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello, I'd like to discuss a pet relocation case."
)}`;

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Routes", href: "#routes" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    eyebrow: "01 / Inbound",
    title: "Into Dubai",
    tagline: "Permits, customs, clearance.",
    image: "/images/service-import.png",
  },
  {
    eyebrow: "02 / Outbound",
    title: "Out of Dubai",
    tagline: "Worldwide relocation, vet-supervised.",
    image: "/images/service-export.png",
  },
  {
    eyebrow: "03 / Specialist",
    title: "Complex Cases",
    tagline: "Restricted breeds. Sensitive timelines.",
    image: "/images/service-emergency.png",
    accent: true,
  },
];

const PROCESS = [
  { title: "Case review", icon: FileSearch },
  { title: "Document audit", icon: FileCheck },
  { title: "Vet & wellness", icon: Stethoscope },
  { title: "Permits", icon: Stamp },
  { title: "Flight & handling", icon: Plane },
  { title: "Door-to-door", icon: Home },
];

const ROUTES = [
  { from: "Dubai", to: "United Kingdom", note: "DEFRA · ARC handling" },
  { from: "Dubai", to: "European Union", note: "TRACES · EU certificates" },
  { from: "Dubai", to: "United States", note: "CDC permits" },
  { from: "Worldwide", to: "Dubai", note: "MOCCAE · DXB clearance" },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "MOCCAE certified",
    desc: "Fully accredited with UAE authorities.",
  },
  {
    icon: Stethoscope,
    title: "Veterinary network",
    desc: "Trusted clinics for every check and certificate.",
  },
  {
    icon: Clock,
    title: "24-hour response",
    desc: "Every case reviewed within one day.",
  },
  {
    icon: HeartHandshake,
    title: "One dedicated handler",
    desc: "A single point of contact from first call to homecoming.",
  },
];

const FAQS = [
  {
    q: "Can pets travel in the cabin to Dubai?",
    a: "No. The UAE requires all pets to enter as manifested cargo. We handle the full cargo booking and clearance process.",
  },
  {
    q: "How long does relocation take to plan?",
    a: "Typically four to twelve weeks. The rabies titer test imposes a mandatory waiting period, so we recommend contacting us as early as possible.",
  },
  {
    q: "What if my documents are wrong on arrival?",
    a: "Our document-first protocol is designed to prevent exactly that. If issues arise mid-transit, our team intervenes directly with airline and customs authorities.",
  },
  {
    q: "Do you handle restricted or high-risk breeds?",
    a: "Where airline embargoes and UAE regulations allow. We are direct about what is and is not possible before you commit.",
  },
];

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "Into Dubai", href: "#services" },
      { label: "Out of Dubai", href: "#services" },
      { label: "Complex cases", href: "#services" },
      { label: "Pricing estimate", href: "#pricing" },
    ],
  },
  {
    heading: "Routes",
    links: [
      { label: "Dubai → UK", href: "#routes" },
      { label: "Dubai → EU", href: "#routes" },
      { label: "Dubai → USA", href: "#routes" },
      { label: "Worldwide → Dubai", href: "#routes" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our process", href: "#process" },
      { label: "Why us", href: "#why-us" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

function Logo({ tone = "gold" }: { tone?: "gold" | "white" }) {
  const color = tone === "gold" ? "#c9a96e" : "#ffffff";
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9 sm:h-10 sm:w-10"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="19" stroke={color} strokeOpacity="0.4" />
      <path
        d="M 7 16 Q 20 4 33 16"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="1.5 2.5"
      />
      <circle cx="32" cy="15" r="1.2" fill={color} />
      <g transform="translate(20 25)" fill={color}>
        <ellipse cx="0" cy="2.5" rx="5.2" ry="4.2" />
        <ellipse cx="-5.4" cy="-2.8" rx="1.7" ry="2" />
        <ellipse cx="-2" cy="-5.3" rx="1.4" ry="1.7" />
        <ellipse cx="2" cy="-5.3" rx="1.4" ry="1.7" />
        <ellipse cx="5.4" cy="-2.8" rx="1.7" ry="2" />
      </g>
    </svg>
  );
}

function Wordmark({ tone = "white" }: { tone?: "white" | "navy" }) {
  return (
    <div
      className={`flex flex-col leading-none ${
        tone === "white" ? "text-white" : "text-[#0d1f3c]"
      }`}
    >
      <span className="font-['Playfair_Display'] text-base sm:text-lg font-semibold tracking-wide">
        Dubai Pet Relocation
      </span>
      <span className="text-[9px] tracking-[0.3em] uppercase text-[#c9a96e] mt-1">
        Premium Pet Logistics
      </span>
    </div>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#f5f2ee] font-['Inter'] text-[#1c2531] antialiased">
      {/* ─────────── NAV ─────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#0d1f3c]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <a href="#" className="flex items-center gap-3 group" aria-label="Dubai Pet Relocation — home">
              <Logo tone="gold" />
              <Wordmark tone="white" />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-5 py-2.5 rounded-full font-semibold text-[13px] transition-all"
              >
                Start Case Review
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 -mr-2 text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1f3c] border-t border-white/5">
            <div className="px-5 py-8 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-['Playfair_Display'] text-white border-b border-white/5"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-[#c9a96e]" />
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 border border-white/20 text-white px-4 py-3.5 rounded-full font-semibold text-sm"
                >
                  <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center bg-[#c9a96e] text-[#0d1f3c] px-4 py-3.5 rounded-full font-semibold text-sm"
                >
                  Start Case
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-[640px] h-[100svh] max-h-[900px] flex items-end overflow-hidden bg-[#0d1f3c]">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="A calm well-cared-for dog with a professional handler"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/70 to-[#0d1f3c]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pb-20 sm:pb-24 pt-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
              <div className="h-px w-8 bg-[#c9a96e]" />
              <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#c9a96e]">
                Dubai · Worldwide
              </span>
            </div>

            <h1 className="font-['Playfair_Display'] text-[40px] leading-[1.05] sm:text-6xl lg:text-7xl font-medium text-white mb-6 sm:mb-8 tracking-tight">
              Pet relocation,
              <br />
              <span className="italic text-[#c9a96e]">handled.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 mb-10 sm:mb-12 max-w-lg leading-relaxed font-light">
              A discreet, document-first service for moving dogs and cats to and from Dubai.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-7 py-4 rounded-full font-semibold text-sm transition-all"
              >
                Start a case review
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm px-7 py-4 rounded-full font-semibold text-sm transition-all"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom credential strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 backdrop-blur-sm bg-[#0d1f3c]/40 hidden lg:block">
          <div className="mx-auto max-w-7xl px-8 py-5 flex items-center justify-between text-white/70 text-xs tracking-wide">
            <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-[#c9a96e]" /> MOCCAE accredited</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-2"><Stethoscope className="h-3.5 w-3.5 text-[#c9a96e]" /> Veterinary partners</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-2"><HeartHandshake className="h-3.5 w-3.5 text-[#c9a96e]" /> One dedicated handler</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[#c9a96e]" /> 24-hour case response</span>
          </div>
        </div>
      </section>

      {/* ─────────── INTRO STATEMENT ─────────── */}
      <section className="py-24 sm:py-32 bg-[#f5f2ee]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#b87333] font-medium">
            Our principle
          </span>
          <p className="mt-6 sm:mt-8 font-['Playfair_Display'] text-[28px] sm:text-4xl lg:text-5xl leading-[1.2] text-[#0d1f3c] font-medium">
            Check the route. Check the documents.
            <br className="hidden sm:block" />{" "}
            <span className="italic text-[#8a9ab0]">Then</span> move the pet.
          </p>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section id="services" className="py-24 sm:py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#b87333] font-medium">
                Services
              </span>
              <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-5xl font-medium text-[#0d1f3c] tracking-tight">
                What we handle.
              </h2>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-[#b87333] hover:text-[#0d1f3c] font-semibold text-sm transition-colors group"
            >
              Discuss your case
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href="#contact"
                className="group relative block aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-md"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/40 to-transparent" />
                {s.accent && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#e8a020]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8a020] animate-pulse" />
                    Priority
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c9a96e] mb-3">
                    {s.eyebrow}
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-white mb-2 font-medium">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-5">{s.tagline}</p>
                  <div className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-wide uppercase border-b border-white/30 pb-1 group-hover:border-[#c9a96e] group-hover:text-[#c9a96e] transition-colors">
                    Discuss case
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section
        id="process"
        className="py-24 sm:py-32 bg-[#f5f2ee] border-y border-black/5 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#b87333] font-medium">
              Process
            </span>
            <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-5xl font-medium text-[#0d1f3c] tracking-tight">
              Six steps. No surprises.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-black/10 rounded-md overflow-hidden border border-black/10">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-[#f5f2ee] p-6 sm:p-8 hover:bg-white transition-colors aspect-square flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#c9a96e] font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Icon className="h-5 w-5 text-[#0d1f3c]/70" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm sm:text-base font-medium text-[#0d1f3c] leading-snug">
                    {step.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── REUNION BAND CTA ─────────── */}
      <section className="relative overflow-hidden bg-[#0d1f3c]">
        <div className="absolute inset-0">
          <img
            src="/images/reunion-airport.png"
            alt="A traveler reunited with their dog at the airport"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c] via-[#0d1f3c]/80 to-[#0d1f3c]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-xl text-white">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e] font-medium">
              The reunion
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl sm:text-5xl font-medium leading-tight tracking-tight">
              The only outcome that matters.
            </h2>
            <p className="mt-6 text-white/70 text-base sm:text-lg font-light leading-relaxed">
              Every detail of our service exists to make the moment at the arrivals hall feel effortless.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-7 py-4 rounded-full font-semibold text-sm transition-all group"
              >
                Begin your case
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm px-7 py-4 rounded-full font-semibold text-sm transition-all"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                Quick chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── WHY US ─────────── */}
      <section id="why-us" className="py-24 sm:py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#b87333] font-medium">
              Why us
            </span>
            <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-5xl font-medium text-[#0d1f3c] tracking-tight">
              The standard, set quietly.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-7 sm:p-8 bg-[#f5f2ee] rounded-md border border-black/5 hover:border-[#c9a96e]/50 transition-colors"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-[#c9a96e]/30 mb-6">
                    <Icon className="h-5 w-5 text-[#b87333]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl text-[#0d1f3c] font-medium mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#1c2531]/75 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── PORTRAIT FEATURE BAND ─────────── */}
      <section className="bg-[#0d1f3c] text-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
            <img
              src="/images/vet-care.png"
              alt="A veterinarian gently examining a dog before relocation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e] font-medium">
              Our promise
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
              Cared for, end to end.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "A dedicated handler from day one",
                "Vet partners for every check and certificate",
                "Document audit before any booking",
                "Direct line to airlines and customs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-[#c9a96e] mt-0.5 shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-flex w-fit items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-7 py-4 rounded-full font-semibold text-sm transition-all group"
            >
              Start a case review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── PRICING TEASER ─────────── */}
      <section
        id="pricing"
        className="relative py-24 sm:py-32 bg-[#0d1f3c] text-white overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/dubai-skyline.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f3c]/60 via-[#0d1f3c]/80 to-[#0d1f3c]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e] font-medium">
            Pricing
          </span>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
            A single, transparent estimate.
            <br />
            <span className="italic text-white/50">No last-minute fees.</span>
          </h2>

          <p className="mt-8 text-white/70 max-w-xl mx-auto text-base sm:text-lg font-light">
            Every case begins with a complimentary review and a clear cost breakdown before anything moves.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-7 py-4 rounded-full font-semibold text-sm transition-all"
            >
              Request your estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm px-7 py-4 rounded-full font-semibold text-sm transition-all"
            >
              <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── ROUTES ─────────── */}
      <section id="routes" className="py-24 sm:py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#b87333] font-medium">
              Routes
            </span>
            <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-5xl font-medium text-[#0d1f3c] tracking-tight">
              Established corridors.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-md overflow-hidden">
            {ROUTES.map((r) => (
              <a
                key={`${r.from}-${r.to}`}
                href="#contact"
                className="group bg-white p-8 sm:p-10 transition-colors hover:bg-[#f5f2ee] flex flex-col justify-between min-h-[220px]"
              >
                <Plane className="h-5 w-5 text-[#c9a96e] -rotate-45" strokeWidth={1.5} />
                <div className="mt-6">
                  <div className="text-xs text-[#8a9ab0] font-medium tracking-wide">
                    {r.from}
                  </div>
                  <div className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#0d1f3c] font-medium mt-1 leading-tight">
                    → {r.to}
                  </div>
                  <div className="mt-3 text-xs text-[#8a9ab0]">{r.note}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#8a9ab0] group-hover:text-[#c9a96e] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-6 self-end" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section
        id="faq"
        className="py-24 sm:py-32 bg-[#f5f2ee] border-t border-black/5 scroll-mt-20"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#b87333] font-medium">
              Answers
            </span>
            <h2 className="mt-3 font-['Playfair_Display'] text-3xl sm:text-5xl font-medium text-[#0d1f3c] tracking-tight">
              Common questions.
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;
              return (
                <div key={idx}>
                  <button
                    id={buttonId}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-6 sm:py-7 flex justify-between items-start gap-4 text-left group"
                  >
                    <span className="font-['Playfair_Display'] text-lg sm:text-xl text-[#0d1f3c] font-medium leading-snug">
                      {faq.q}
                    </span>
                    <span className="mt-1 shrink-0 flex items-center justify-center h-7 w-7 rounded-full border border-black/15 text-[#0d1f3c] group-hover:border-[#c9a96e] group-hover:text-[#c9a96e] transition-colors">
                      {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="pb-6 sm:pb-8 pr-10 text-sm sm:text-base text-[#1c2531]/80 leading-relaxed font-light"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#b87333] hover:text-[#0d1f3c] font-semibold text-sm transition-colors group"
            >
              <FaWhatsapp className="h-4 w-4" />
              Have a different question? Message us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── CONTACT ─────────── */}
      <section
        id="contact"
        className="relative py-24 sm:py-32 bg-[#0d1f3c] text-white overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/dubai-skyline.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e] font-medium">
              Contact
            </span>
            <h2 className="mt-4 font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
              Start your case review.
            </h2>
            <p className="mt-6 text-white/70 max-w-lg mx-auto text-base sm:text-lg font-light">
              Tell us about the move. We respond within 24 hours.
            </p>
          </div>

          <form
            className="space-y-5 sm:space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <Field label="From" placeholder="e.g. London" />
              <Field label="To" placeholder="e.g. Dubai" />
            </div>
            <Field label="Pet" placeholder="e.g. Golden Retriever, 30kg" />
            <Field label="Travel window" placeholder="Month / year" />
            <div>
              <label
                htmlFor="field-notes"
                className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-3"
              >
                Notes (optional)
              </label>
              <textarea
                id="field-notes"
                rows={3}
                placeholder="Anything we should know..."
                className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a96e] transition-colors text-base resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
              <button
                type="submit"
                className="group flex-1 inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-8 py-4 rounded-full font-semibold text-sm transition-all"
              >
                Submit case
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-sm transition-all"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                Or message on WhatsApp
              </a>
            </div>
          </form>

          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/70">
            <a href="tel:+971501234567" className="flex items-center gap-3 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-[#c9a96e]" />
              +971 50 123 4567
            </a>
            <a href="mailto:hello@dubai-pet-relocation.ae" className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-[#c9a96e]" />
              hello@dubai-pet-relocation.ae
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#c9a96e]" />
              Dubai, United Arab Emirates
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="bg-[#0a1830] text-white/75 pt-20 pb-32 lg:pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 sm:gap-12 mb-16">
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-3 mb-5">
                <Logo tone="gold" />
                <Wordmark tone="white" />
              </a>
              <p className="text-sm leading-relaxed max-w-xs font-light text-white/70">
                Discreet pet relocation logistics for Dubai and the world. Document-first. Outcome-obsessed.
              </p>
              <a
                href="https://dubai-pet-relocation.ae"
                className="inline-block mt-5 text-sm text-[#c9a96e] hover:text-white transition-colors tracking-wide"
              >
                dubai-pet-relocation.ae
              </a>

              <div className="mt-8 space-y-3 text-sm">
                <a href="tel:+971501234567" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-[#c9a96e]" />
                  +971 50 123 4567
                </a>
                <a href="mailto:hello@dubai-pet-relocation.ae" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-[#c9a96e]" />
                  hello@dubai-pet-relocation.ae
                </a>
              </div>
            </div>

            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
                  {col.heading}
                </div>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs text-white/60">
            <div>© {new Date().getFullYear()} Dubai Pet Relocation. Dubai, UAE.</div>
            <div className="flex gap-6">
              <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─────────── FLOATING WHATSAPP ─────────── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-24 lg:bottom-6 right-5 sm:right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl transition-all"
      >
        <FaWhatsapp className="h-7 w-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>

      {/* ─────────── STICKY MOBILE CTA ─────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0d1f3c]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <a
            href="tel:+971501234567"
            aria-label="Call us"
            className="flex items-center justify-center h-12 w-12 rounded-full border border-white/20 text-white shrink-0"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#c9a96e] text-[#0d1f3c] px-4 py-3 rounded-full font-semibold text-sm"
          >
            Start Case Review
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  const id = `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a96e] transition-colors text-base"
      />
    </div>
  );
}
