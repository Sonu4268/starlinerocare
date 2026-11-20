"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Wrench, X } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roData";

export default function FloatingActions() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
    "Hello Star Line RO Care! I need RO repair / service / new purifier inquiry. Please assist me."
  )}`;

  return (
    <>
      {/* Floating Notification Tooltip on Desktop */}
      {showNotification && (
        <div className="fixed bottom-24 right-6 z-40 max-w-xs bg-white text-slate-800 p-4 rounded-2xl shadow-2xl border border-cyan-100 hidden sm:flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 mt-0.5">
            <Wrench className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs">
            <p className="font-bold text-slate-900">Need RO Repair or Filter Change?</p>
            <p className="text-slate-500 mt-0.5">Technician can reach your home in 2 hours across Ghaziabad & East Delhi.</p>
            <div className="mt-2 flex gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline-block font-bold text-sm">WhatsApp Us</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg shadow-cyan-600/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="hidden sm:inline-block font-bold text-sm">Call Now</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="text-left">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Fast Service</p>
          <p className="text-xs font-black text-slate-900">2-Hr Doorstep</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call</span>
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl text-xs font-bold shadow-sm"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Book Service</span>
          </Link>
        </div>
      </div>
    </>
  );
}
