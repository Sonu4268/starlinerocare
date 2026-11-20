"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Droplets, 
  MessageCircle,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Tag
} from "lucide-react";
import { SERVICES_DATA, COMPANY_DETAILS } from "@/data/roData";
import BookServiceModal from "@/components/ui/BookServiceModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General RO Repair & Service");

  const openBooking = (srvName: string) => {
    setSelectedService(srvName);
    setModalOpen(true);
  };

  const rateCard = [
    { service: "Doorstep Visit & Full System Diagnostic", price: "₹199", note: "Adjusted against total bill if repair accepted" },
    { service: "Routine Servicing & Internal Tank Sanitization", price: "₹349", note: "Includes free digital TDS testing & pipe flushing" },
    { service: "Complete Inline Filter Kit (Sediment + Pre/Post Carbon)", price: "₹999 - ₹1,399", note: "100% Genuine sealed filters" },
    { service: "High-Rejection RO Membrane (Filmtec / Vontron)", price: "₹1,299 - ₹1,799", note: "Restores sweet water taste & low TDS" },
    { service: "Active Copper & Alkaline Cartridge Upgrade", price: "₹699 - ₹999", note: "Infuses copper, zinc & pH balancing minerals" },
    { service: "100 GPD Heavy-Duty Booster Pump Replacement", price: "₹1,499 - ₹2,199", note: "For low pressure & high-rise apartments" },
    { service: "SMPS 24V / 36V Power Adapter Replacement", price: "₹599 - ₹899", note: "Surge-proof heavy duty adapter" },
    { service: "Solenoid Valve (SV) / Float Switch Fix", price: "₹399 - ₹599", note: "Stops water leakage & continuous overflow" },
    { service: "Complete RO Uninstallation & Relocation", price: "₹399 - ₹599", note: "Safe wall unmounting & re-installation with plumbing" },
  ];

  const steps = [
    {
      step: "01",
      title: "Call or Book Online",
      desc: "Call 9891896901 or send a WhatsApp message with your address and RO brand.",
    },
    {
      step: "02",
      title: "Technician at Doorstep in 2 Hrs",
      desc: "Our verified technician arrives with complete diagnostic tools and genuine spares.",
    },
    {
      step: "03",
      title: "Free TDS Test & Clear Estimate",
      desc: "We test your input and output TDS levels and provide a fixed, upfront price quote.",
    },
    {
      step: "04",
      title: "Fast Repair with Genuine Parts",
      desc: "Repairs performed right in front of you using original sealed OEM components.",
    },
    {
      step: "05",
      title: "30-Day Satisfaction Warranty",
      desc: "Pay easily via UPI or cash after testing pure water taste. Backed by 30-day warranty.",
    },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
          <Wrench className="w-3.5 h-3.5" />
          <span>Same-Day Doorstep Service</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Water Purifier Repair & Maintenance
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          From fixing sudden leaks to replacing choked membranes, we provide fast, honest, and certified RO repair across Ramprastha, Surya Nagar, Brij Vihar, Kaushambi, and Ghaziabad.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => openBooking("Emergency RO Repair")}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            <span>Book 2-Hour Service</span>
          </button>
          <a
            href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call Shop: {COMPANY_DETAILS.phones[0]}</span>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                    {srv.price}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900">{srv.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 mt-4">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Est. Time: {srv.duration}</span>
                <button
                  onClick={() => openBooking(srv.title)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transparent Rate Card Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Transparent & Fair Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Service Rate Card (Zero Hidden Charges)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Know the cost upfront before our technician begins the work.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs text-slate-400 font-extrabold uppercase tracking-wider">
                  <th className="py-3 px-4">Service Description</th>
                  <th className="py-3 px-4">Estimated Price</th>
                  <th className="py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {rateCard.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{item.service}</td>
                    <td className="py-3.5 px-4 font-black text-cyan-700 whitespace-nowrap">{item.price}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-500">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-50 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span>💡 Exact price depends on purifier brand model and specific membrane rating required.</span>
            <button
              onClick={() => openBooking("Custom Quote Request")}
              className="text-cyan-700 font-bold hover:underline shrink-0"
            >
              Get Custom Quote →
            </button>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              How Our 2-Hour Doorstep Service Works
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Hassle-free, clean, and reliable service from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/60 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-cyan-400 mb-3 block">
                    {st.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{st.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openBooking("Quick Service Dispatch")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold text-base shadow-xl inline-flex items-center gap-2 transform hover:scale-105 transition-all"
            >
              <Wrench className="w-5 h-5" />
              <span>Book Doorstep Technician Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
