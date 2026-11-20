"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Droplets, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Wrench, 
  ArrowRight,
  Filter,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";
import { PRODUCTS_DATA, COMPANY_DETAILS, Product } from "@/data/roData";
import BookServiceModal from "@/components/ui/BookServiceModal";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProductName, setModalProductName] = useState("");

  const categories = [
    "All",
    "Alkaline & Copper",
    "Domestic RO",
    "Commercial RO",
    "Spare Parts",
  ];

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const handleInquiry = (productName: string) => {
    setModalProductName(productName);
    setModalOpen(true);
  };

  return (
    <div className="py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Original Star Line Quality & Verified Spares</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Water Purifiers & Commercial Plants
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Explore our complete collection of Copper Infusion, Alkaline, Smart LED, and Detachable Tank purifiers. Free doorstep installation and 1-year warranty included on new systems!
        </p>

        {/* Free TDS Testing Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 border border-cyan-200 inline-flex flex-col sm:flex-row items-center gap-3 text-xs sm:text-sm text-cyan-900 font-semibold">
          <Droplets className="w-5 h-5 text-cyan-600 shrink-0" />
          <span>
            Unsure which purifier suits your water? <strong>We offer 100% FREE Water TDS Testing at your home in Ghaziabad!</strong>
          </span>
          <button
            onClick={() => handleInquiry("Free Doorstep Water TDS Testing")}
            className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shrink-0 shadow-sm transition-colors"
          >
            Book Free TDS Test
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-72 w-full bg-slate-50 flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {product.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                    In Stock
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider block">
                    {product.technology}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">Tank Capacity</span>
                      <strong className="text-slate-800">{product.tankCapacity}</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">Max TDS Handled</span>
                      <strong className="text-slate-800">{product.maxTds}</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-2">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Key Highlights:</p>
                    {product.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-cyan-50/70 border border-cyan-100 text-cyan-900 text-xs mt-3">
                    <strong>Recommended For:</strong> {product.bestFor}
                  </div>
                </div>
              </div>

              {/* Pricing & CTAs */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-2">{product.mrp}</span>
                    <span className="text-2xl font-black text-slate-900">{product.price}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Includes Free Installation
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                      `Hello Star Line RO Care! I want to order / inquire about: ${product.name} (${product.price}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Order</span>
                  </a>

                  <button
                    onClick={() => handleInquiry(product.name)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Get Best Price</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide: Choosing Right RO */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black">How To Choose The Right Water Purifier</h3>
              <p className="text-xs text-slate-400">Expert advice from Star Line RO Care Technicians</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <h4 className="font-bold text-cyan-300 text-base">TDS &lt; 300 PPM (Municipal Tap Water)</h4>
              <p>
                Municipal treated supply water usually needs UF + UV or mild RO + Mineralizer to filter dirt and chlorine while retaining natural calcium and magnesium.
              </p>
              <p className="text-emerald-400 font-semibold">Recommended: Nile Aqua Mars / Aqua Clean</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <h4 className="font-bold text-cyan-300 text-base">TDS 500 - 1500 PPM (Groundwater / Tanker)</h4>
              <p>
                Requires multi-stage Reverse Osmosis (RO) with Active Copper and Alkaline balancing to remove dissolved salts and heavy metals, leaving clean sweet water.
              </p>
              <p className="text-emerald-400 font-semibold">Recommended: STAR X Series / Alfa UltraSmart</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <h4 className="font-bold text-cyan-300 text-base">TDS &gt; 1500 PPM (Hard Borewell)</h4>
              <p>
                Needs heavy-duty 100 GPD booster pump and commercial-grade polyamide membrane capable of withstanding scale and mineral concentration.
              </p>
              <p className="text-emerald-400 font-semibold">Recommended: Ventura Stronger Series</p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <p className="text-xs text-slate-400 mb-3">
              Want us to check your water TDS right now? Call our shop line:
            </p>
            <a
              href={`tel:${COMPANY_DETAILS.rawPhones[0]}`}
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_DETAILS.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Buy New RO Purifier"
        defaultProduct={modalProductName}
      />
    </div>
  );
}
