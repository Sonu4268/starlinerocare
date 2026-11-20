import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://starline.vercel.app"),
  title: "STAR LINE RO CARE - RO Service, Repair, AMC & Purifier Sales | Ramprastha Ghaziabad",
  description: "Star Line RO Care provides doorstep water purifier repair, filter replacement, AMC maintenance contracts, new RO system sales, and commercial RO plants in Ramprastha, Surya Nagar, Brij Vihar, and Ghaziabad.",
  keywords: [
    "Star Line RO Care",
    "RO service Ramprastha",
    "RO repair Ghaziabad",
    "water purifier repair",
    "Kent RO service",
    "Aquaguard service center",
    "RO AMC contract Ghaziabad",
    "Commercial RO plant Ghaziabad",
    "Star Line water purifier",
    "RO filter change Ramprastha",
  ],
  authors: [{ name: "Star Line RO Care" }],
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "STAR LINE RO CARE - Pure Water Solutions • Service & Repair",
    description: "Doorstep RO service within 2 hours, 100% genuine spares, AMC maintenance, and water purifier sales in Ramprastha, Ghaziabad.",
    url: "https://starline.vercel.app",
    siteName: "Star Line RO Care",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Star Line RO Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
