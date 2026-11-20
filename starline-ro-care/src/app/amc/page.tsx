"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Phone, 
  Clock, 
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Award
} from "lucide-react";
import { AMC_PLANS, COMPANY_DETAILS } from "@/data/roData";
import BookServiceModal from "@/components/ui/BookServiceModal";

export default function AMCPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Standard Comprehensive AMC");

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(`AMC Plan: ${planName}`);
    setModalOpen(true);
  };

  const comparisonFeatures = [
    { feature: "Annual Routine Maintenance Visits", basic: "3 Visits", standard: "3 Visits", gold: "4 Visits" },
    { feature: "Emergency Breakdown Callouts", basic: "Unlimited (Free)", standard: "Unlimited (Free)", gold: "Unlimited (Free)" },
    { feature: "Labor & Service Charges", basic: "100% Free", standard: "100% Free", gold: "100% Free" },
    { feature: "Inline Sediment & Carbon Filter Kit", basic: "Extra (Discounted)", standard: "1 Set Included Free", gold: "1 Set Included Free" },
    { feature: "Spun Candle Replacements", basic: "Discounted", standard: "Every 4 Months Included", gold: "Every 3 Months Included" },
    { feature: "Brand New RO Membrane (75/80/100 GPD)", basic: "Extra (Discounted)", standard: "15% Discount", gold: "1 Brand New Included Free" },
    { feature: "Copper / Alkaline Mineral Cartridge", basic: "Extra", standard: "10% Discount", gold: "1 Free Upgrade Included" },
    { feature: "Booster Pump & SMPS Electrical Spares", basic: "Chargeable", standard: "Labor Free", gold: "Parts & Labor Covered" },
    { feature: "Priority Technician Dispatch", basic: "4 - 6 Hours", standard: "Within 2 Hours", gold: "VIP Within 1 - 2 Hours" },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Save Up To 40% On Yearly Maintenance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Annual Maintenance Contracts (AMC)
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Never worry about sudden water purifier breakdowns or dirty drinking water again. Choose an annual AMC contract from Star Line RO Care for pure peace of mind.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call AMC Helpline: {COMPANY_DETAILS.phones[0]}</span>
          </a>
          <a
            href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
              "Hello Star Line RO Care! I want to inquire about taking an AMC contract for my RO in Ghaziabad."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp AMC Inquiry</span>
          </a>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
                  ★ Recommended By 80% Customers
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className={`text-xs mt-1.5 leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.tagline}
                </p>

                <div className="my-6 py-4 border-y border-slate-200/20">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-xs ml-2 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                    /{plan.period}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <p className="font-extrabold uppercase tracking-wider text-[11px] text-cyan-500">
                    What&apos;s Included:
                  </p>
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

                  {plan.notIncludes.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/20 space-y-1.5">
                      {plan.notIncludes.map((notInc, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-400 text-xs">
                          <span className="text-slate-500 font-bold shrink-0">•</span>
                          <span>{notInc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/20">
                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-black text-sm shadow-md transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Book {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-8">
            Detailed Plan Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-900 font-black">
                  <th className="py-3 px-3">Service & Inclusions</th>
                  <th className="py-3 px-3 text-center">Basic (₹1,499)</th>
                  <th className="py-3 px-3 text-center bg-cyan-50/80 text-cyan-900 rounded-t-xl">
                    Standard (₹2,999)
                  </th>
                  <th className="py-3 px-3 text-center">Gold (₹4,499)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3.5 px-3 font-semibold text-slate-800">{row.feature}</td>
                    <td className="py-3.5 px-3 text-center text-slate-600">{row.basic}</td>
                    <td className="py-3.5 px-3 text-center font-bold text-cyan-800 bg-cyan-50/50">
                      {row.standard}
                    </td>
                    <td className="py-3.5 px-3 text-center font-bold text-slate-900">{row.gold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Take AMC Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-3xl p-8 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            Why Is An Annual Maintenance Contract (AMC) Essential?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">Prevents Water-Borne Illness</h4>
              <p className="text-slate-600">
                Over time, uncleaned sediment filters and depleted carbon filters become breeding grounds for bacteria. Routine servicing ensures 100% biological safety.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">Protects Expensive Membrane & Motor</h4>
              <p className="text-slate-600">
                Timely replacement of ₹100 pre-filters prevents ₹2,000 RO membranes and high-pressure pumps from premature burnouts.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-slate-900">Zero Unplanned Repair Bills</h4>
              <p className="text-slate-600">
                Piecemeal technician visits cost ₹300-₹500 each time. Under an AMC, every visit is free, giving your family complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedPlan}
      />
    </div>
  );
}
