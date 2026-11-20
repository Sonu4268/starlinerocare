import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Wrench, 
  Droplet, 
  Award,
  PhoneCall,
  MessageCircle,
  Mail
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">2-Hour Doorstep</h4>
              <p className="text-xs text-slate-400">Rapid response in Ghaziabad</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Genuine Spares</h4>
              <p className="text-xs text-slate-400">Original sealed parts</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Certified Technicians</h4>
              <p className="text-xs text-slate-400">15+ Years Experience</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-950/80 border border-amber-800 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">30-Day Warranty</h4>
              <p className="text-xs text-slate-400">On all repairs & service</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Col 1: Brand Info & Poster Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan-800/80 bg-slate-900">
                <Image
                  src="/images/logo.jpg"
                  alt="Star Line RO Care Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  STAR LINE <span className="text-cyan-400">RO CARE</span>
                </span>
                <span className="text-xs font-medium text-cyan-300">
                  PURE WATER SOLUTIONS • SERVICE & REPAIR
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your neighborhood water purification specialist in Ramprastha, Ghaziabad. We specialize in domestic RO repair, filter replacement, AMC contracts, new water purifier sales, and heavy-duty industrial commercial RO plant setups.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <p className="text-slate-300 font-semibold uppercase tracking-wider text-[11px] text-cyan-400">
                Authorized Service For All Major Brands:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_DETAILS.brandsServiced.map((brand) => (
                  <span
                    key={brand}
                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-400 transition-colors">RO Purifiers Catalog</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Repair & Service</Link>
              </li>
              <li>
                <Link href="/amc" className="hover:text-cyan-400 transition-colors">Annual AMC Plans</Link>
              </li>
              <li>
                <Link href="/commercial" className="hover:text-cyan-400 transition-colors">Commercial RO Plants</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About Our Shop</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact & Service Booking</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400">
              Featured Purifiers
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>STAR X Series Smart RO (Copper)</li>
              <li>Nile Aqua Mars 9L Detachable</li>
              <li>Alfa UltraSmart Apple Series</li>
              <li>Ventura Stronger Heavy-Duty</li>
              <li>Nexus Camry Copper Alkaline</li>
              <li>Florista Honeycomb LED RO</li>
              <li>Commercial RO Plant 250 - 2000 LPH</li>
              <li>100% Genuine Spare Parts</li>
            </ul>
          </div>

          {/* Col 4: Shop Address & Contact Details from Poster */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400">
              Store & Workshop
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Shop No. 62, City Center Market</p>
                  <p className="text-slate-400">Ramprastha, Ghaziabad, UP - 201011</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Also at: No. 45 1st Floor, C-Block, City Center Market</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400">Direct Contact Numbers:</p>
                  <a href={`tel:${COMPANY_DETAILS.rawPhones[0]}`} className="font-bold text-white hover:text-cyan-300 block">
                    {COMPANY_DETAILS.phones[0]}
                  </a>
                  <a href={`tel:${COMPANY_DETAILS.rawPhones[1]}`} className="font-bold text-white hover:text-cyan-300 block">
                    {COMPANY_DETAILS.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <p className="font-medium text-white">{COMPANY_DETAILS.workingHours}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=Hello%20Star%20Line%20RO%20Care%2C%20I%20need%20RO%20Service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Tag Strip */}
        <div className="py-6 border-t border-slate-900 text-xs text-slate-500">
          <p className="mb-2 font-semibold text-slate-400">Doorstep Service Locations:</p>
          <div className="flex flex-wrap gap-2">
            {COMPANY_DETAILS.serviceAreas.map((area) => (
              <span key={area} className="bg-slate-900 px-2.5 py-1 rounded-full text-slate-400">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Ramprastha, Ghaziabad.
          </p>
          <p className="flex items-center gap-1">
            Built for Vercel Deployment • Star Line Pure Water Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
