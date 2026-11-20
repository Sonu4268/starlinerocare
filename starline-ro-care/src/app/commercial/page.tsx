"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Factory, 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Building2, 
  School, 
  Hospital, 
  Hotel, 
  Wrench,
  ArrowRight,
  Droplets
} from "lucide-react";
import { COMMERCIAL_CAPACITIES, COMPANY_DETAILS } from "@/data/roData";
import BookServiceModal from "@/components/ui/BookServiceModal";

export default function CommercialPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState("Commercial RO Plant Consultation");

  const openModal = (plantName: string) => {
    setSelectedPlant(`Commercial Plant: ${plantName}`);
    setModalOpen(true);
  };

  const applications = [
    { title: "Schools & Colleges", desc: "Ensure clean, sweet, and bacteria-free drinking water for students and staff with 250 - 500 LPH systems.", icon: School },
    { title: "Hospitals & Clinics", desc: "Ultra-pure water for dialysis units, labs, sterilization, and patient hydration with medical grade RO systems.", icon: Hospital },
    { title: "Offices & IT Parks", desc: "High-capacity water purification to eliminate bottled jar costs and provide continuous pure water.", icon: Building2 },
    { title: "Hotels & Restaurants", desc: "Enhance food taste and protect expensive espresso and cooking equipment from mineral scaling.", icon: Hotel },
    { title: "Factories & Warehouses", desc: "Heavy-duty industrial water solutions compliant with factory hydration and process regulations.", icon: Factory },
    { title: "Residential Societies", desc: "Centralized RO water plants for apartment blocks, hostels, and residential communities.", icon: Droplets },
  ];

  const plantComponents = [
    {
      title: "Stainless Steel SS 304 Skid",
      desc: "Heavy-gauge, anti-corrosive stainless steel frame that withstands damp and industrial environments without rusting.",
    },
    {
      title: "FRP Sand & Carbon Media Vessels",
      desc: "Dual multi-media pre-treatment vessels with automatic/manual multiport valves to eliminate dirt, silt, chlorine, and odor.",
    },
    {
      title: "High-Pressure Multistage SS Pump",
      desc: "Industrial-grade vertical multistage booster pump delivering constant 150-200 PSI to drive water across high-rejection membranes.",
    },
    {
      title: "Commercial 4040 / 8040 Polyamide Membranes",
      desc: "High rejection rate (>98.5%) eliminating heavy metals, fluorides, nitrates, and high salinity even from 3500+ PPM groundwater.",
    },
    {
      title: "Rotameters & Dual Pressure Meters",
      desc: "Live flow rate monitoring for pure permeate and reject water streams, with pressure monitoring before and after membranes.",
    },
    {
      title: "Automated Electrical Control Panel",
      desc: "Microcontroller/PLC panel with low-pressure and high-pressure auto cut-off switches to prevent dry pump burnouts.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white p-8 sm:p-14 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-900/80 border border-cyan-700 text-cyan-300 text-xs font-bold">
                <Factory className="w-3.5 h-3.5" />
                <span>Turnkey Water Treatment Systems</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Commercial & Industrial RO Plants
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Star Line RO Care designs, fabricates, installs, and maintains heavy-duty Commercial RO Plants from <strong className="text-white">50 LPH to 5000+ LPH</strong> across Ghaziabad, East Delhi, and NCR. Complete turnkey solutions from raw water testing to final pipeline distribution.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => openModal("500 LPH Plant")}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Request Site Inspection</span>
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: {COMPANY_DETAILS.phones[0]}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-cyan-800 shadow-2xl bg-slate-950">
                <Image
                  src="/images/products/commercial-ro-plant.jpg"
                  alt="Industrial Commercial RO Plant setup by Star Line RO Care"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-xs">
                  <p className="font-extrabold text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Actual Plant Installed By Star Line RO Care
                  </p>
                  <p className="text-slate-300 text-[11px] mt-0.5">Heavy-duty SS Skid + Multi-port valve FRP vessels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Available Commercial Capacities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tailored configurations based on daily water consumption and source water TDS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMERCIAL_CAPACITIES.map((cap) => (
            <div
              key={cap.capacity}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-900">{cap.capacity}</span>
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                    {cap.users}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Ideal For</span>
                    <strong className="text-slate-800">{cap.bestFor}</strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Skid & Structure</span>
                    <strong className="text-slate-800">{cap.footprint}</strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Pump Type</span>
                    <strong className="text-slate-800">{cap.pump}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Est. Budget</span>
                  <span className="text-sm font-black text-slate-900">{cap.priceEstimate}</span>
                </div>

                <button
                  onClick={() => openModal(cap.capacity)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Where Are Our Plants Installed?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Reliable pure water solutions tailored for critical commercial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">{app.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Components Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            High-Grade Engineering & Construction
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Every component in our commercial systems is chosen for zero downtime and long service life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantComponents.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 font-black flex items-center justify-center text-xs">
                0{idx + 1}
              </div>
              <h3 className="text-base font-black text-slate-900">{comp.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Site Inspection CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black">
            Book A Free Commercial Water Site Inspection
          </h2>
          <p className="text-cyan-100 text-sm max-w-xl mx-auto">
            Our Senior Water Engineer will visit your school, office, or factory, test the raw water quality, calculate daily consumption, and provide a detailed blueprint & quotation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => openModal("Site Inspection Request")}
              className="px-8 py-3.5 rounded-xl bg-slate-950 text-white font-extrabold text-sm shadow-md hover:bg-slate-900"
            >
              Book Site Visit Now
            </button>
            <a
              href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                "Hello Star Line RO Care! I want to consult regarding installing a Commercial RO Plant in Ghaziabad."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-sm shadow-md hover:bg-emerald-400 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedPlant}
      />
    </div>
  );
}
