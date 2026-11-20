"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Droplets, 
  CheckCircle2, 
  Star, 
  MapPin, 
  ArrowRight, 
  Award, 
  Sparkles,
  PhoneCall,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  Filter,
  Factory
} from "lucide-react";
import { 
  COMPANY_DETAILS, 
  PRODUCTS_DATA, 
  SERVICES_DATA, 
  AMC_PLANS, 
  TESTIMONIALS, 
  FAQS 
} from "@/data/roData";
import BookServiceModal from "@/components/ui/BookServiceModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const featuredProducts = PRODUCTS_DATA.slice(0, 6);

  const openBookingModal = (productName = "") => {
    setSelectedProductForModal(productName);
    setModalOpen(true);
  };

  const commonProblems = [
    {
      title: "Low Water Flow / Slow Filling",
      desc: "Water trickling slowly from the tap. Choked sediment filter or weakened booster pump.",
      icon: Droplets,
    },
    {
      title: "Foul Smell / Bitter Taste",
      desc: "Unpleasant taste or odor. Expired carbon filter or bacterial growth inside tank.",
      icon: Filter,
    },
    {
      title: "Continuous Beep / Alarm Sound",
      desc: "UV lamp failure or filter life expired alarm triggered in smart purifiers.",
      icon: Sparkles,
    },
    {
      title: "Water Leakage Under Counter",
      desc: "Loose push-fit connector, cracked pipe, or leaking membrane housing.",
      icon: Wrench,
    },
    {
      title: "RO Machine Dead / Pump Silent",
      desc: "Power adapter (SMPS) failure, float switch issue, or solenoid valve jammed.",
      icon: Award,
    },
    {
      title: "High TDS in Purified Water",
      desc: "TDS controller misaligned or RO membrane depleted. Free TDS testing provided.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping"></span>
                <span>Ramprastha & Ghaziabad&apos;s #1 Multi-Brand RO Specialists</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Pure, Alkaline & Healthy Water For Your Family
              </h1>

              {/* Subtitle with Poster Details */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Expert <strong className="text-slate-900">RO Repair, 2-Hour Doorstep Service, Annual AMC Contracts</strong>, and brand new <strong className="text-slate-900">Alkaline & Copper Purifiers</strong>. Authorized spares for Kent, Aquaguard, Livpure, Zero B, and all brands.
              </p>

              {/* Poster Key Callouts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-cyan-600 font-black text-xl sm:text-2xl">2 Hours</div>
                  <div className="text-xs text-slate-500 font-medium">Doorstep Response</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-emerald-600 font-black text-xl sm:text-2xl">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Genuine OEM Spares</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                  <div className="text-blue-600 font-black text-xl sm:text-2xl">10,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Happy Customers</div>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => openBookingModal()}
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-black text-base shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
                >
                  <Wrench className="w-5 h-5" />
                  <span>Book Doorstep Service (₹199)</span>
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>Call: {COMPANY_DETAILS.phones[0]}</span>
                </a>

                <Link
                  href="/products"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-base shadow-sm flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Explore Purifiers</span>
                  <ChevronRight className="w-4 h-4 text-cyan-600" />
                </Link>
              </div>

              {/* Service Brands Strip */}
              <div className="pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Supported Brands: </span>
                <span>Aquaguard • Kent • Livpure • Zero B • Pureit • Blue Star • Aqua Fresh & all local ROs</span>
              </div>
            </div>

            {/* Right Hero Visual Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-5 shadow-2xl border border-slate-100">
                {/* Main Featured Purifier Image (Star X Ice Qube) */}
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center group">
                  <Image
                    src="/images/products/star-x-iceqube.jpg"
                    alt="IQ Ice Qube STAR X Series Smart RO Purifier"
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-cyan-400 text-xs font-black px-3 py-1 rounded-full border border-cyan-500/30 shadow-md">
                    ★ Bestseller 2026
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-slate-100">
                    Copper + Alkaline + Zinc
                  </div>
                </div>

                {/* Sub Features Inside Hero Card */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">STAR X Series IQ Ice Qube</h3>
                    <p className="text-xs text-slate-500">Smart LED • Copper Infusion • 12L Tank</p>
                  </div>
                  <button
                    onClick={() => openBookingModal("STAR X Series IQ Ice Qube")}
                    className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Get Best Price
                  </button>
                </div>

                {/* Thumbnail strip */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="relative h-16 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                    <Image
                      src="/images/products/aqua-mars-grey.jpg"
                      alt="Nile Aqua Mars"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative h-16 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                    <Image
                      src="/images/products/alfa-ultrasmart.jpg"
                      alt="Alfa UltraSmart"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative h-16 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                    <Image
                      src="/images/products/commercial-ro-plant.jpg"
                      alt="Commercial Plant"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>

                {/* Live Service Availability Ribbon */}
                <div className="mt-4 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Technicians on-duty in Ramprastha & Ghaziabad
                  </span>
                  <a href={`tel:${COMPANY_DETAILS.rawPhones[0]}`} className="text-emerald-900 underline font-extrabold">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Serviced Marquee Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <p className="text-center text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-4">
            Authorized Service & Genuine Spares Available For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-800 font-bold text-sm sm:text-base">
            {COMPANY_DETAILS.brandsServiced.map((b) => (
              <span
                key={b}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-cyan-300 hover:text-cyan-600 transition-all shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RO Troubleshooting / Problem Solver Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Instant Doorstep Diagnostics</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Issue Is Your Water Purifier Facing?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Don&apos;t compromise on clean drinking water. Select your issue below for rapid 2-hour technician dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonProblems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600">Fixed within 45 Mins</span>
                  <button
                    onClick={() => openBookingModal(prob.title)}
                    className="text-xs font-extrabold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Fix This Issue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Water Purifiers Catalog Preview */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Original Star Line Range & Top Models</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Latest Domestic & Alkaline Purifiers
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                Equipped with Copper Infusion, Zinc fortification, alkaline mineral balance, and food-grade detachable tanks.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md transition-all self-start md:self-auto"
            >
              <span>View All 12+ Purifiers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-950/80 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative h-64 w-full bg-slate-900 flex items-center justify-center p-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-800">
                      {product.badge}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {product.technology}
                    </div>
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px]">Tank Capacity</span>
                        <strong className="text-white">{product.tankCapacity}</strong>
                      </div>
                      <div className="h-6 w-px bg-slate-800"></div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">TDS Limit</span>
                        <strong className="text-white">{product.maxTds}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & Action Footer */}
                <div className="p-6 pt-0 border-t border-slate-900 mt-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-500 line-through mr-2">{product.mrp}</span>
                    <span className="text-xl font-black text-white text-cyan-400">{product.price}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                        `Hello Star Line RO Care! I want to inquire about purchasing the ${product.name} (${product.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white"
                      title="Order on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => openBookingModal(product.name)}
                      className="px-3.5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial RO Plant Banner (Image 12 Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700 text-cyan-300 text-xs font-bold">
                <Factory className="w-3.5 h-3.5" />
                <span>Heavy Duty Commercial Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Commercial & Industrial RO Plants (50 LPH to 5000 LPH)
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Custom engineered for Schools, Colleges, Hospitals, Offices, Hotels, Factories, and Residential Societies. Built with SS 304 Grade Skid, multi-port valve FRP media vessels, and heavy-duty vertical multistage booster pumps.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-bold block">SS 304 Skid</span>
                  <span className="text-slate-400">Anti-Corrosive Frame</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-bold block">FRP Sand & Carbon</span>
                  <span className="text-slate-400">Multi-Media Filtration</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-cyan-400 font-bold block">4040/8040 RO</span>
                  <span className="text-slate-400">Industrial Membranes</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/commercial"
                  className="px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Commercial Capacities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call for Plant Site Visit</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-cyan-800/60 shadow-2xl bg-slate-950">
                <Image
                  src="/images/products/commercial-ro-plant.jpg"
                  alt="Industrial Commercial RO Plant Installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs">
                  <p className="font-bold text-cyan-400">Actual Installation by Star Line RO Care</p>
                  <p className="text-slate-300 text-[11px]">Turnkey project executed in Ghaziabad NCR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Shop Physical Presence Section (Image 10 Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
                <Image
                  src="/images/shop-front.jpg"
                  alt="Star Line RO Care Physical Shop Front at City Center Market Ramprastha"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700">
                  📍 Verified Physical Store
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Us In Person Or Order At Home</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Welcome To STAR LINE RO CARE Store & Workshop
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike online aggregators who outsource your work to unknown freelance mechanics, we operate an established physical retail and service center in Ramprastha, Ghaziabad. We carry ready stock of all major water purifiers, certified RO membranes, booster pumps, and genuine spare parts.
              </p>

              <div className="space-y-2.5 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Shop Address:</strong> Shop No. 62, City Center Market, Ramprastha, Ghaziabad, UP (Also No. 45 1st Floor, C-Block)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Helpline:</strong> {COMPANY_DETAILS.phones[0]} & {COMPANY_DETAILS.phones[1]}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Store Timings:</strong> 8:00 AM - 9:00 PM (Open all 7 days of the week)
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Shop Directly</span>
                </a>
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-bold text-sm border border-cyan-200 inline-flex items-center gap-1.5"
                >
                  <span>Read Store Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Maintenance Section Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Worry-Free Pure Water All Year</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Annual Maintenance Contracts (AMC)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Save up to 40% on annual RO maintenance. Scheduled service visits, free filter replacements, and unlimited breakdown visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AMC_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-2xl border-2 border-cyan-500 scale-105 z-10"
                  : "bg-white text-slate-800 border border-slate-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-extrabold text-xs shadow-md uppercase tracking-wider">
                  ★ Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>
                <p className={`text-xs mt-1 ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.tagline}
                </p>

                <div className="my-6">
                  <span className="text-3xl sm:text-4xl font-black">{plan.price}</span>
                  <span className={`text-xs ml-2 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                    /{plan.period}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  {plan.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-cyan-400" : "text-emerald-600"
                        }`}
                      />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/20">
                <button
                  onClick={() => openBookingModal(`AMC Plan: ${plan.name}`)}
                  className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/amc"
            className="text-cyan-700 font-extrabold text-sm hover:underline inline-flex items-center gap-1"
          >
            <span>Compare detailed features of all AMC plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sky-50/60 py-16 sm:py-20 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-slate-900 font-black ml-2 text-sm">4.9 / 5 Rating</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our Neighbors In Ghaziabad Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Over 10,000 households and businesses rely on Star Line RO Care for crystal clean water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="font-extrabold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-[11px] text-slate-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full py-4 px-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <span className="text-cyan-600 text-lg font-black shrink-0">
                  {activeFaq === idx ? "−" : "+"}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-8 sm:p-12 text-center shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Need Immediate RO Repair or Service in Ghaziabad?
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base max-w-xl mx-auto">
            Our certified technician is ready to visit your doorstep within 2 hours. Call our direct shop lines now:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
              className="px-8 py-4 rounded-xl bg-slate-950 text-white font-black text-base shadow-lg hover:bg-slate-900 inline-flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Call: {COMPANY_DETAILS.phones[0]}</span>
            </a>

            <a
              href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                "Hello Star Line RO Care! I need immediate RO service at my home in Ghaziabad."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-lg inline-flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 text-slate-950" />
              <span>WhatsApp Us: {COMPANY_DETAILS.whatsapp}</span>
            </a>
          </div>

          <p className="text-xs text-cyan-200">
            Shop No. 62, City Center Market, Ramprastha, Ghaziabad • 8:00 AM to 9:00 PM Every Day
          </p>
        </div>
      </section>

      {/* Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="General RO Repair & Service"
        defaultProduct={selectedProductForModal}
      />
    </div>
  );
}
