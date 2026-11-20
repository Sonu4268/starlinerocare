"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Award, 
  CheckCircle2, 
  Wrench, 
  Clock, 
  Droplets, 
  MessageCircle, 
  ArrowRight,
  HeartHandshake
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roData";
import BookServiceModal from "@/components/ui/BookServiceModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const values = [
    {
      title: "Real Store & Workshop",
      desc: "Unlike faceless aggregator apps that pass your phone number to unvetted freelancers, Star Line RO Care is a trusted physical retail shop & service center in City Center Market, Ramprastha.",
      icon: MapPin,
    },
    {
      title: "100% Genuine Sealed Spares",
      desc: "We exclusively install original OEM filters, certified Dow Filmtec & Vontron RO membranes, heavy-duty booster pumps, and genuine copper alkaline cartridges.",
      icon: ShieldCheck,
    },
    {
      title: "2-Hour Rapid Doorstep Response",
      desc: "A water leak or purifier breakdown shouldn't ruin your day. Our local technicians live and work right in Ramprastha & Ghaziabad, arriving at your doorstep within 2 hours.",
      icon: Clock,
    },
    {
      title: "Honest & Transparent Rates",
      desc: "No hidden charges or surprise invoices. We perform free digital TDS testing, clearly show you the issue, and provide a fixed rate before touching a single screw.",
      icon: Award,
    },
    {
      title: "30-Day Service Guarantee",
      desc: "Every repair, filter change, or installation comes with our 30-day post-service satisfaction warranty. If any issue recurs, we re-visit free of charge.",
      icon: HeartHandshake,
    },
    {
      title: "Multi-Brand Expertise",
      desc: "From Kent, Aquaguard, and Livpure to custom assembled ROs and 5000 LPH commercial plants, our technicians have over 15 years of hands-on experience.",
      icon: Wrench,
    },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Established Local Service Center</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          About STAR LINE RO CARE
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Serving Ramprastha, Surya Nagar, Brij Vihar, and Ghaziabad for over 15 years with genuine water purifier repair, preventive AMC contracts, and mineral-rich drinking water systems.
        </p>
      </section>

      {/* Main Story & Shop Front (Image 10 Highlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Shop Front Real Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 group">
                <Image
                  src="/images/shop-front.jpg"
                  alt="Star Line RO Care physical shop front at City Center Market Ramprastha Ghaziabad"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700">
                  📍 City Center Market, Ramprastha
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs text-white">
                  <p className="font-bold text-cyan-400">Our Physical Store & Service Workshop</p>
                  <p className="text-slate-300 text-[11px] mt-0.5">Shop No. 62 & No. 45 1st Floor, C-Block</p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold">
                <Droplets className="w-3.5 h-3.5" />
                <span>Our Story & Mission</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                Your Neighborhood RO Doctor In Ramprastha & Ghaziabad
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Water in Ghaziabad and East Delhi varies dramatically from heavy groundwater with TDS exceeding 2000 PPM to municipal supply with seasonal contamination. That&apos;s why a one-size-fits-all solution never works.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong className="text-slate-900">Star Line RO Care</strong>, we started with a simple belief: every home and office deserves pure, mineral-balanced water without paying exorbitant corporate service fees. Over the last 15 years, our shop in City Center Market, Ramprastha has grown to serve over 10,000 households and commercial institutions across the region.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-sky-50/80 p-3.5 rounded-xl border border-sky-100">
                  <span className="text-2xl font-black text-cyan-700 block">15+</span>
                  <span className="text-xs text-slate-600 font-medium">Years in Business</span>
                </div>
                <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-100">
                  <span className="text-2xl font-black text-emerald-700 block">10,000+</span>
                  <span className="text-xs text-slate-600 font-medium">Happy Customers</span>
                </div>
                <div className="bg-blue-50/80 p-3.5 rounded-xl border border-blue-100 col-span-2 sm:col-span-1">
                  <span className="text-2xl font-black text-blue-700 block">4.9 ★</span>
                  <span className="text-xs text-slate-600 font-medium">Service Rating</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book RO Service</span>
                </button>
                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: {COMPANY_DETAILS.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Ghaziabad Trusts Star Line RO Care
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The values that set us apart from freelance online mechanics and expensive brand call centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Shop Location & Service Areas */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black">Doorstep Coverage Across Ghaziabad</h3>
              <p className="text-xs text-slate-400">Rapid 2-Hour Doorstep Service in all following areas</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {COMPANY_DETAILS.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3.5 py-2 rounded-xl bg-slate-800 text-cyan-300 font-semibold text-xs border border-slate-700/80"
              >
                ✓ {area}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div>
              <strong className="text-white">Store Address: </strong>
              Shop No. 62, City Center Market, Ramprastha, Ghaziabad, UP - 201011
            </div>
            <a
              href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                "Hello Star Line RO Care! I want to visit your shop in City Center Market, Ramprastha."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              Get Directions on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="General RO Repair & Service"
      />
    </div>
  );
}
