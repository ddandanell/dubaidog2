import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Plus,
  Minus,
  PawPrint,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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
    tagline: "Worldwide export coordination.",
    image: "/images/service-export.png",
  },
  {
    eyebrow: "03 / Urgent",
    title: "Complex Cases",
    tagline: "Restricted breeds. Short notice.",
    image: "/images/service-emergency.png",
    accent: true,
  },
];

const PROCESS = [
  "Case review",
  "Document audit",
  "Crate & cargo",
  "Permits",
  "Flight & handling",
  "Door-to-door",
];

const ROUTES = [
  { from: "Dubai", to: "United Kingdom" },
  { from: "Dubai", to: "European Union" },
  { from: "Dubai", to: "United States" },
  { from: "Worldwide", to: "Dubai" },
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
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#c9a96e]/15 ring-1 ring-[#c9a96e]/40">
                <PawPrint className="h-4 w-4 text-[#c9a96e]" />
              </div>
              <span className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold tracking-wide text-white">
                PawClearance
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:gap-10">
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
              className="md:hidden flex items-center justify-center h-10 w-10 -mr-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1f3c] border-t border-white/5">
            <div className="px-5 py-8 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-['Playfair_Display'] text-white border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-8 bg-[#c9a96e] text-[#0d1f3c] px-6 py-4 rounded-full font-semibold text-sm text-center"
              >
                Start Case Review
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-[640px] h-[100svh] max-h-[900px] flex items-end overflow-hidden bg-[#0d1f3c]">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c] via-[#0d1f3c]/70 to-[#0d1f3c]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/80 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
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
                href="#services"
                className="group inline-flex items-center justify-center gap-2 text-white px-2 sm:px-4 py-4 font-medium text-sm transition-all"
              >
                Explore services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom credential strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 backdrop-blur-sm bg-[#0d1f3c]/40 hidden lg:block">
          <div className="mx-auto max-w-7xl px-8 py-5 flex items-center justify-between text-white/60 text-xs tracking-wide">
            <span>MOCCAE accredited</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>IATA-compliant transport</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Door-to-door coordination</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>24-hour case response</span>
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
      <section id="process" className="py-24 sm:py-32 bg-[#f5f2ee] border-y border-black/5 scroll-mt-20">
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
            {PROCESS.map((step, i) => (
              <div
                key={step}
                className="bg-[#f5f2ee] p-6 sm:p-8 hover:bg-white transition-colors aspect-square flex flex-col justify-between"
              >
                <div className="font-['Playfair_Display'] text-3xl text-[#c9a96e] font-medium">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-sm sm:text-base font-medium text-[#0d1f3c] leading-snug">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PRICING TEASER ─────────── */}
      <section
        id="pricing"
        className="relative py-24 sm:py-32 bg-[#0d1f3c] text-white overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/cta-bg.png"
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

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 mt-10 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-7 py-4 rounded-full font-semibold text-sm transition-all"
          >
            Request your estimate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* ─────────── ROUTES ─────────── */}
      <section className="py-24 sm:py-32 bg-white">
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
                className="group bg-white p-8 sm:p-10 transition-colors hover:bg-[#f5f2ee] flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="text-xs text-[#8a9ab0] font-medium tracking-wide">
                    {r.from}
                  </div>
                  <div className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#0d1f3c] font-medium mt-1 leading-tight">
                    → {r.to}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#8a9ab0] group-hover:text-[#c9a96e] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-8" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="py-24 sm:py-32 bg-[#f5f2ee] border-t border-black/5">
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
        </div>
      </section>

      {/* ─────────── CONTACT ─────────── */}
      <section id="contact" className="relative py-24 sm:py-32 bg-[#0d1f3c] text-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/cta-bg.png"
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

            <button
              type="submit"
              className="group mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#d4b478] text-[#0d1f3c] px-8 py-4 rounded-full font-semibold text-sm transition-all"
            >
              Submit case
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="bg-[#0a1830] text-white/75 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#c9a96e]/15 ring-1 ring-[#c9a96e]/40">
                  <PawPrint className="h-4 w-4 text-[#c9a96e]" />
                </div>
                <span className="font-['Playfair_Display'] text-xl font-semibold tracking-wide text-white">
                  PawClearance
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs font-light">
                Discreet pet relocation logistics for Dubai and the world.
              </p>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
                Services
              </div>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Into Dubai</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Out of Dubai</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Complex cases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Worldwide routes</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
                Company
              </div>
              <ul className="space-y-3 text-sm">
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs text-white/60">
            <div>© {new Date().getFullYear()} PawClearance. Dubai, UAE.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
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
