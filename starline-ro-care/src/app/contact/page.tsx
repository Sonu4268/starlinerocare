"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Wrench, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roData";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roBrand, setRoBrand] = useState("Kent");
  const [serviceType, setServiceType] = useState("RO Repair / Not Working");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const waText = `*NEW RO SERVICE BOOKING (STAR LINE RO CARE)*%0A%0A` +
      `*Name:* ${encodeURIComponent(fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Area/Address:* ${encodeURIComponent(address)}%0A` +
      `*Brand:* ${encodeURIComponent(roBrand)}%0A` +
      `*Service Required:* ${encodeURIComponent(serviceType)}%0A` +
      (message ? `*Notes:* ${encodeURIComponent(message)}%0A` : "") +
      `%0A_Sent via Star Line RO Care Contact Page_`;

    setIsSent(true);
    setTimeout(() => {
      window.open(`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${waText}`, "_blank");
    }, 600);
  };

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
          <Phone className="w-3.5 h-3.5" />
          <span>We Are Here To Help 7 Days A Week</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Contact Us & Book RO Service
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Need urgent water purifier repair, filter replacement, AMC inquiry, or commercial plant installation? Reach out to our Ramprastha workshop or book doorstep service below.
        </p>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Call Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-black text-cyan-400">Direct Shop Helplines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Call our master technicians directly for immediate guidance or emergency leakage response:
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Primary Line</span>
                    <strong className="text-base text-white font-bold">{COMPANY_DETAILS.phones[0]}</strong>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[1]}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Secondary Line</span>
                    <strong className="text-base text-white font-bold">{COMPANY_DETAILS.phones[1]}</strong>
                  </div>
                </a>

                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                    "Hello Star Line RO Care! I need RO service assistance."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-400 block font-medium">Instant WhatsApp</span>
                    <strong className="text-base text-white font-bold">{COMPANY_DETAILS.whatsapp}</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Shop Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base">Store & Workshop Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    <strong>Shop No. 62, City Center Market</strong>, Ramprastha, Ghaziabad, Uttar Pradesh - 201011
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Also operating at: <strong>No. 45, 1st Floor, C-Block, City Center Market, Ramprastha</strong>
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-base">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {COMPANY_DETAILS.workingHours}
                  </p>
                  <p className="text-xs text-emerald-600 font-bold mt-0.5">
                    Open all 7 days including Sunday & Holidays
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="https://maps.google.com/?q=City+Center+Market+Ramprastha+Ghaziabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Water Purifier Leaking Heavily?</strong> Turn off the raw water inlet valve immediately and unplug the power socket. Call us right away for urgent assistance.
              </div>
            </div>
          </div>

          {/* Right: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              {isSent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Booking Dispatched!</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Thank you {fullName}! Your request has been opened in WhatsApp. Our service manager will verify your slot and assign a technician within minutes.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Book Doorstep Service</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Our technician arrives within 2 hours anywhere in Ramprastha & Ghaziabad.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9891896901"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        RO Brand
                      </label>
                      <select
                        value={roBrand}
                        onChange={(e) => setRoBrand(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm bg-white"
                      >
                        {COMPANY_DETAILS.brandsServiced.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                        <option value="Star Line RO">Star Line RO</option>
                        <option value="Assembled / Other">Other / Assembled</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Service Needed
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm bg-white"
                      >
                        <option value="RO Repair / Not Working">General RO Repair / Not Working</option>
                        <option value="Filter & Membrane Replacement">Filter & RO Membrane Replacement</option>
                        <option value="Water Leakage Urgent Fix">Water Leakage Urgent Fix</option>
                        <option value="Low Flow / Bitter Water Taste">Low Flow / Bitter Water Taste</option>
                        <option value="New RO Installation / Relocation">New RO Installation / Relocation</option>
                        <option value="Annual AMC Plan Inquiry">Annual AMC Plan Inquiry</option>
                        <option value="Commercial RO Plant (50 - 5000 LPH)">Commercial RO Plant (50 - 5000 LPH)</option>
                        <option value="Purchase New Water Purifier">Purchase New Water Purifier</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      House Address & Locality in Ghaziabad *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. B-12, Surya Nagar / Ramprastha / Brij Vihar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Specific Problem / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Water is trickling very slowly, machine beeping, need urgent technician today by 4 PM..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      <span>Book Now & Dispatch to WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-400 space-y-1">
                    <p>✓ 100% Guaranteed 2-Hour Doorstep Response</p>
                    <p>✓ Transparent Pricing • Pay After Service Satisfaction</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
