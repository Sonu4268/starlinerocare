"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, MapPin, Wrench, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roData";

interface BookServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultProduct?: string;
}

export default function BookServiceModal({
  isOpen,
  onClose,
  defaultService = "General RO Repair & Service",
  defaultProduct = "",
}: BookServiceModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Kent");
  const [selectedService, setSelectedService] = useState(defaultService);
  const [issueDescription, setIssueDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const message = `*NEW RO SERVICE / INQUIRY BOOKING*%0A%0A` +
      `*Customer Name:* ${encodeURIComponent(fullName)}%0A` +
      `*Phone Number:* ${encodeURIComponent(phone)}%0A` +
      `*Address / Area:* ${encodeURIComponent(locality || "Ramprastha / Nearby")}%0A` +
      `*RO Brand:* ${encodeURIComponent(selectedBrand)}%0A` +
      `*Service Required:* ${encodeURIComponent(defaultProduct ? `Inquiry for ${defaultProduct}` : selectedService)}%0A` +
      (issueDescription ? `*Problem / Notes:* ${encodeURIComponent(issueDescription)}%0A` : "") +
      `%0A_Sent via Star Line RO Care Website_`;

    const waLink = `https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${message}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waLink, "_blank");
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Request Sent Successfully!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you {fullName}! Your request has been directed to our WhatsApp helpline. Our technician will contact you within 15 minutes.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                Call Directly: {COMPANY_DETAILS.phones[0]}
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-2">
                <Wrench className="w-3.5 h-3.5" />
                <span>Quick 2-Hour Doorstep Service</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {defaultProduct ? `Inquire: ${defaultProduct}` : "Book RO Service / Repair"}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill the form below or WhatsApp us directly. Our certified technician will visit your location.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9891896901"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    RO Brand
                  </label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm bg-white"
                  >
                    {COMPANY_DETAILS.brandsServiced.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                    <option value="Star Line RO">Star Line RO</option>
                    <option value="Assembled / Other">Other / Assembled RO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Address / Locality in Ghaziabad *
                </label>
                <input
                  type="text"
                  required
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="e.g. Flat 204, Ramprastha / Surya Nagar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Needed
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm bg-white"
                >
                  <option value="General RO Repair & Service">General RO Repair & Service (₹199)</option>
                  <option value="Filter & Membrane Replacement">Complete Filter / Membrane Change</option>
                  <option value="Water Leakage Problem">Water Leakage / Pipe Burst</option>
                  <option value="Low Water Output / Flow">Low Water Output / Foul Smell</option>
                  <option value="Machine Not Starting / Pump Dead">Machine Dead / Pump Not Starting</option>
                  <option value="New RO Installation / Relocation">New RO Installation / Shifting</option>
                  <option value="Buy New RO Purifier">Buy New RO Purifier</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual AMC Plan Inquiry</option>
                  <option value="Commercial RO Plant Inquiry">Commercial RO Plant (50 - 2000 LPH)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Describe Issue / Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="e.g. Purifier beeping continuously, taste is bitter..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Dispatch to WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400">
                🔒 Your details are secure. Zero spam. Doorstep payment after service satisfaction.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
