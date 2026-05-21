import React, { useState } from "react";
import {
  Plane,
  FileCheck,
  ShieldAlert,
  MapPin,
  Clock,
  ChevronDown,
  Globe,
  ArrowRight,
  ShieldCheck,
  PlaneTakeoff,
  Stethoscope,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
  Info,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f5f2ee] font-['Inter'] text-[#1c2531]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#0d1f3c] text-white shadow-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-[#c9a96e]" />
              <span className="font-['Playfair_Display'] text-2xl font-bold tracking-wide">
                PawClearance
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Relocation Service</a>
              <a href="#routes" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Worldwide Relocation</a>
              <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing Calculator</a>
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#contact" className="bg-[#c9a96e] hover:bg-[#b87333] text-[#0d1f3c] px-6 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-md">
                Get Case Review
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-300 hover:text-white">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1c2531] px-4 pt-2 pb-6 space-y-3 shadow-2xl">
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0d1f3c] rounded-md">Home</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0d1f3c] rounded-md">Relocation Service</a>
            <a href="#routes" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0d1f3c] rounded-md">Worldwide Relocation</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-white hover:bg-[#0d1f3c] rounded-md">Pricing Calculator</a>
            <a href="#contact" className="block w-full mt-4 bg-[#c9a96e] text-[#0d1f3c] px-6 py-3 rounded-sm font-semibold text-base text-center">
              Get Case Review
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#0d1f3c] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="German Shepherd by travel crate"
            className="h-full w-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c] via-[#0d1f3c]/90 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#2d8f5e]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-200">Dubai Import & Export Specialists</span>
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white mb-6">
              Pet Relocation in Dubai, Handled Properly From Start to Finish
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
              Import, export, documents, flights, crate planning, airport clearance, and door-to-door coordination for dogs and cats moving to or from Dubai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#b87333] text-[#0d1f3c] px-8 py-4 rounded-sm font-bold text-sm transition-all shadow-lg">
                Get Relocation Estimate
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-sm font-semibold text-sm transition-all backdrop-blur-sm">
                <FileCheck className="h-4 w-4" />
                Check My Documents
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#e8a020] border border-[#e8a020]/30 px-6 py-4 rounded-sm font-semibold text-sm transition-all">
                <ShieldAlert className="h-4 w-4" />
                Emergency Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#1c2531] border-b border-[#0d1f3c]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:justify-between opacity-80">
            {[
              { icon: Globe, text: "Dubai Import & Export" },
              { icon: PlaneTakeoff, text: "Flight & Cargo Coordination" },
              { icon: Stethoscope, text: "Vet Document Guidance" },
              { icon: MapPin, text: "Door-to-Door Planning" },
              { icon: ShieldAlert, text: "Emergency Case Review" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <item.icon className="h-5 w-5 text-[#c9a96e]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Doors */}
      <section id="services" className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0d1f3c] mb-4">Core Logistics Services</h2>
          <p className="text-[#8a9ab0] max-w-2xl mx-auto">We manage the complexity of UAE regulations so you don't have to. Choose your required service below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 flex flex-col cursor-pointer">
            <div className="h-56 overflow-hidden relative">
              <img src="/images/service-import.png" alt="Import to Dubai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white font-['Playfair_Display'] text-2xl font-bold">Moving INTO Dubai</h3>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-[#1c2531] mb-6 flex-grow leading-relaxed">Full handling of UAE Ministry of Climate Change and Environment (MOCCAE) import permits, flight bookings, and Dubai customs clearance.</p>
              <div className="flex items-center text-[#0d1f3c] font-semibold text-sm uppercase tracking-wide group-hover:text-[#b87333] transition-colors">
                Start Import Case <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 flex flex-col cursor-pointer">
            <div className="h-56 overflow-hidden relative">
              <img src="/images/service-export.png" alt="Export from Dubai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white font-['Playfair_Display'] text-2xl font-bold">Moving OUT of Dubai</h3>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-[#1c2531] mb-6 flex-grow leading-relaxed">Export health certificates, airline-approved cargo crates, and coordination with your destination country's import regulations.</p>
              <div className="flex items-center text-[#0d1f3c] font-semibold text-sm uppercase tracking-wide group-hover:text-[#b87333] transition-colors">
                Start Export Case <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 flex flex-col cursor-pointer ring-1 ring-[#e8a020]/20">
            <div className="h-56 overflow-hidden relative">
              <img src="/images/service-emergency.png" alt="Emergency Case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-[#e8a020] text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">High Priority</div>
              <h3 className="absolute bottom-4 left-6 text-white font-['Playfair_Display'] text-2xl font-bold">Emergency & Complex</h3>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-[#1c2531] mb-6 flex-grow leading-relaxed">Expedited handling for rejected documents, restricted breeds, short-notice moves, or pets stuck in transit requiring immediate intervention.</p>
              <div className="flex items-center text-[#e8a020] font-semibold text-sm uppercase tracking-wide group-hover:text-[#b87333] transition-colors">
                Request Urgent Review <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="bg-white py-24 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0d1f3c] mb-4">Precision Logistics Process</h2>
            <p className="text-[#8a9ab0] max-w-2xl mx-auto">Every relocation follows a strict protocol to ensure safety, compliance, and zero delays at the border.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: "Pet & Route Review", desc: "Initial assessment of pet breed, age, health history, and destination routing to identify any immediate risks." },
              { title: "Document & Vaccine Check", desc: "Comprehensive audit of rabies titer tests, microchip dates, and vaccination records against UAE requirements." },
              { title: "Airline & Crate Planning", desc: "Securing cargo space and determining the exact IATA-compliant crate dimensions required for safe transport." },
              { title: "Permit & Certificate Coordination", desc: "Applying for MOCCAE import/export permits and securing official government veterinary endorsements." },
              { title: "Flight & Airport Handling", desc: "Supervising terminal drop-off, cargo manifesting, and providing real-time tracking during transit." },
              { title: "Delivery & Final Handover", desc: "Clearing customs on arrival and coordinating secure ground transport to the final residence." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#f5f2ee] text-[#0d1f3c] font-bold text-lg border border-gray-200 shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h4 className="text-[#0d1f3c] font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-[#1c2531] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator Preview */}
      <section id="pricing" className="py-24 bg-[#0d1f3c] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-6">Predictable Logistics Pricing</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Pet relocation costs vary dramatically based on cargo volume, route, and regulatory fees. Use our calculator to understand the specific variables affecting your move. No hidden fees. No last-minute surprises.
            </p>
            <ul className="space-y-4 mb-10">
              {['Airline Cargo Fees (Volume/Weight)', 'UAE MOCCAE Permit Fees', 'Veterinary Endorsement Costs', 'Airport Handling & Customs Clearance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#2d8f5e]" />
                  <span className="text-sm text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block bg-[#c9a96e] hover:bg-[#b87333] text-[#0d1f3c] px-8 py-3 rounded-sm font-bold text-sm transition-all">
              Get Detailed Estimate
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#1c2531] rounded-sm p-8 shadow-2xl border border-white/10 relative">
              <div className="absolute top-0 right-0 p-4">
                <Info className="h-5 w-5 text-[#8a9ab0]" />
              </div>
              <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">Cost Estimator</h3>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Route</label>
                    <div className="bg-[#0d1f3c] border border-white/10 p-3 rounded-sm flex justify-between items-center text-sm">
                      <span>Dubai → UK</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Pet Type</label>
                    <div className="bg-[#0d1f3c] border border-white/10 p-3 rounded-sm flex justify-between items-center text-sm">
                      <span>Dog (Medium)</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wide">Document Status</label>
                  <div className="bg-[#0d1f3c] border border-white/10 p-3 rounded-sm flex justify-between items-center text-sm">
                    <span>Needs Rabies Titer Test</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Estimated Range</div>
                    <div className="text-2xl font-bold text-[#c9a96e]">AED 8,500 – 12,000</div>
                  </div>
                  <button className="bg-white/5 hover:bg-white/10 border border-white/20 px-4 py-2 rounded-sm text-sm transition-colors">
                    Detailed Breakdown
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0d1f3c] mb-4">Established Trade Routes</h2>
              <p className="text-[#8a9ab0]">We hold established accounts with major airlines operating out of DXB and DWC, ensuring priority cargo space and predictable handling.</p>
            </div>
            <a href="#" className="text-[#b87333] font-semibold text-sm flex items-center gap-2 hover:text-[#0d1f3c] transition-colors mt-4 md:mt-0">
              View All Global Routes <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { dest: "United Kingdom", desc: "DEFRA compliance & Heathrow ARC handling." },
              { dest: "European Union", desc: "TRACES coordination & EU health certificates." },
              { dest: "United States", desc: "CDC permits & straightforward entry protocols." },
              { dest: "Worldwide to UAE", desc: "Import permits & DXB clearance operations." }
            ].map((route, idx) => (
              <div key={idx} className="border border-gray-200 p-6 rounded-sm hover:border-[#c9a96e] transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <Plane className="h-6 w-6 text-[#1c2531] group-hover:text-[#c9a96e] transition-colors" />
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#c9a96e] transition-colors" />
                </div>
                <div className="font-bold text-[#0d1f3c] text-lg mb-2">
                  {idx === 3 ? "Any Origin" : "Dubai"} <br />
                  <span className="text-sm font-normal text-gray-500">to</span> <br />
                  {route.dest}
                </div>
                <p className="text-xs text-[#8a9ab0] mt-4">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breed & Risk Review */}
      <section className="py-24 bg-[#f5f2ee] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-l-4 border-[#e8a020] pl-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0d1f3c] mb-2">Restricted Breeds & High-Risk Travel</h2>
            <p className="text-[#1c2531] max-w-3xl">Certain pets require specialized airline negotiation or face strict UAE entry bans. Identify your risk profile early.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Restricted Breeds", desc: "Pit Bulls, Mastiffs, and specific working dogs are banned from UAE import. Contact us for the complete MOCCAE banned list.", icon: ShieldAlert, high: true },
              { title: "Brachycephalic Dogs", desc: "Snub-nosed breeds (French Bulldogs, Pugs) face severe airline embargoes due to respiratory risks during flight.", icon: AlertTriangle, high: true },
              { title: "Large Breed Dogs", desc: "Pets requiring custom wooden crates (CR82) require special cargo door clearance and specific aircraft routing.", icon: Info, high: false },
              { title: "Senior Pets", desc: "Older animals require additional veterinary clearance and specialized comfort planning for long-haul routes.", icon: Stethoscope, high: false },
              { title: "Puppies Under 15 Weeks", desc: "UAE mandates pets must be at least 15 weeks old (12 weeks for rabies + 21 day wait) prior to import.", icon: Clock, high: false },
              { title: "Multiple Pets", desc: "Families moving 3+ pets require strategic cargo spacing and phased customs clearance protocols.", icon: Briefcase, high: false }
            ].map((risk, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex gap-4">
                <div className="mt-1">
                  <risk.icon className={`h-5 w-5 ${risk.high ? 'text-[#e8a020]' : 'text-[#8a9ab0]'}`} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1f3c] mb-2">{risk.title}</h4>
                  <p className="text-sm text-[#1c2531] leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1c2531] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4 text-white">The PawClearance Standard</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We operate with the precision of a commercial logistics firm, applied to the sensitive nature of live animal transport.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {[
              "Clear Relocation Plan",
              "Transparent Cost Structure",
              "Document-First Process",
              "Airline-Aware Planning",
              "Fast Case Review",
              "Door-to-Door Coordination",
              "Emergency Support",
              "Dedicated Handler"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#c9a96e] shrink-0 mt-0.5" />
                <span className="font-medium text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0d1f3c] mb-4">Critical Information</h2>
            <p className="text-[#8a9ab0]">Answers to the questions that matter before anything moves.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Can my pet travel in the cabin to Dubai?", a: "No. The UAE requires all pets entering the country to arrive as Manifested Cargo. They cannot arrive in the cabin or as excess baggage, regardless of size or airline policy." },
              { q: "What documents are absolutely mandatory for UAE import?", a: "At minimum: a microchip, a valid Rabies vaccination (at least 21 days old), a Rabies Titer Test (RNATT) from an approved lab, a UAE MOCCAE Import Permit, and a government-endorsed health certificate from the origin country." },
              { q: "How long does the relocation process take to plan?", a: "Ideally, 1 to 3 months. If your pet requires a Rabies Titer Test, there is a mandatory waiting period. Contact us immediately to establish a timeline." },
              { q: "What happens if my documents are incorrect on arrival?", a: "Incorrect documents can result in the pet being held in airport quarantine, returned to the origin country at your expense, or worse. This is why our 'Document-First' verification is the core of our service." },
              { q: "Do you handle Brachycephalic (snub-nosed) breeds?", a: "Yes, but options are highly restricted. Many airlines embargo these breeds year-round. We map out specialized routes using carriers that maintain climate-controlled protocols for high-risk breeds." },
              { q: "What is included in a full-service relocation?", a: "A full-service case includes document verification, permit applications, airline cargo booking, IATA-compliant crate sourcing, airport drop-off supervision, real-time tracking, and customs clearance on arrival." },
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-[#f5f2ee] hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="font-semibold text-[#0d1f3c] pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#1c2531] transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-white text-[#1c2531] text-sm leading-relaxed border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="relative bg-[#0d1f3c] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-bg.png"
            alt="Dubai Skyline"
            className="h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#0d1f3c]/80"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1c2531]/90 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-6">Start With a Case Review</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Tell us where your pet is going, what documents you have, and when you need to travel. We will check the route, risks, timeline, and likely cost before you move forward.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <ShieldCheck className="h-5 w-5 text-[#2d8f5e]" />
                    <span className="text-sm">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FileCheck className="h-5 w-5 text-[#2d8f5e]" />
                    <span className="text-sm">Free preliminary document check</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-[#2d8f5e]" />
                    <span className="text-sm">No obligation assessment</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1f3c] p-6 rounded-sm border border-white/10">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Origin City</label>
                      <input type="text" placeholder="e.g. London" className="w-full bg-[#1c2531] border border-white/10 rounded-sm p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a96e] transition-colors text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Destination</label>
                      <input type="text" placeholder="e.g. Dubai" className="w-full bg-[#1c2531] border border-white/10 rounded-sm p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a96e] transition-colors text-sm" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Pet Details</label>
                    <input type="text" placeholder="e.g. 1 Dog (Golden Retriever, 30kg)" className="w-full bg-[#1c2531] border border-white/10 rounded-sm p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a96e] transition-colors text-sm" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Target Travel Date</label>
                    <input type="text" placeholder="Month / Year" className="w-full bg-[#1c2531] border border-white/10 rounded-sm p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a96e] transition-colors text-sm" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Message (optional)</label>
                    <textarea rows={3} placeholder="Describe your situation or any urgent concerns..." className="w-full bg-[#1c2531] border border-white/10 rounded-sm p-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c9a96e] transition-colors text-sm resize-none" />
                  </div>

                  <button className="w-full bg-[#c9a96e] hover:bg-[#b87333] text-[#0d1f3c] px-6 py-3.5 rounded-sm font-bold text-sm transition-all mt-2">
                    Submit Case for Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1830] border-t border-white/5 py-16 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-[#c9a96e]" />
            <span className="font-['Playfair_Display'] text-xl font-bold tracking-wide text-white">
              PawClearance
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Professional pet logistics and relocation services based in Dubai, UAE. Operating worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#routes" className="hover:text-white transition-colors">Worldwide Routes</a>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} PawClearance Logistics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
