"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Layers, 
  Factory, 
  Info, 
  PhoneCall,
  MessageCircle
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products & Purifiers", href: "/products" },
    { name: "RO Services", href: "/services" },
    { name: "AMC Plans", href: "/amc" },
    { name: "Commercial RO", href: "/commercial" },
    { name: "About Us", href: "/about" },
    { name: "Contact & Booking", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Shop No. 62, City Center Market, Ramprastha, Ghaziabad
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Open All 7 Days: 8:00 AM - 9:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              2-Hour Doorstep Service in Ghaziabad & East Delhi
            </span>
            <a 
              href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
              className="text-white hover:text-cyan-300 font-bold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              {COMPANY_DETAILS.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden border border-cyan-100 shadow-sm bg-sky-50 flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Star Line RO Care Logo"
                  width={52}
                  height={52}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                  STAR LINE <span className="text-cyan-600">RO CARE</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Pure Water Solutions • Service & Repair
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-cyan-600 bg-cyan-50 font-bold"
                        : "text-slate-700 hover:text-cyan-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-700 hover:text-cyan-600 rounded-lg hover:bg-slate-50 transition-colors"
                title="Call Star Line RO Care"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left hidden md:block">
                  <span className="block text-[10px] text-slate-400 font-medium">Quick Helpline</span>
                  <span className="text-xs font-bold text-slate-800">{COMPANY_DETAILS.phones[0]}</span>
                </div>
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-md shadow-cyan-600/20 hover:from-cyan-700 hover:to-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Wrench className="w-4 h-4" />
                <span>Book RO Service</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                className="p-2 rounded-lg bg-cyan-50 text-cyan-600"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-cyan-600 bg-cyan-50 font-bold"
                        : "text-slate-700 hover:text-cyan-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="p-3 bg-sky-50 rounded-xl text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  Shop No. 62, City Center Market, Ramprastha, GZB
                </p>
                <p className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  Doorstep Service within 2 Hours
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-sm"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  Call Shop
                </a>
                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=Hello%20Star%20Line%20RO%20Care%2C%20I%20need%20RO%20Service%20or%20Purifier%20Inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
