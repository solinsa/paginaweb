import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/components/sections/TopNavBar";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

export const metadata: Metadata = {
  title: "SOLINSA | Soluciones en Instrumentación S.A. de C.V.",
  description:
    "Solinsa: Equipos de cromatografía, servicio técnico y soporte de métodos para laboratorios en México. GC, GCMS, HPLC/UHPLC, cromatografía iónica, detectores especiales y preparación de muestras.",
  keywords: [
    "cromatografía",
    "HPLC",
    "GC",
    "GCMS",
    "UHPLC",
    "cromatografía iónica",
    "equipo de laboratorio",
    "servicio técnico",
    "IQ/OQ/PQ",
    "mantenimiento preventivo",
    "México",
    "laboratorio",
    "Solinsa",
    "Young In Chromass",
    "VUV Analytics",
  ],
  openGraph: {
    title: "SOLINSA | Soluciones en Instrumentación",
    description:
      "Integramos GC, GCMS, HPLC/UHPLC, cromatografía iónica, detectores especiales y preparación de muestras con instalación, capacitación, IQ/OQ/PQ, consumibles y soporte local.",
    url: "https://www.solinsa.mx",
    siteName: "Solinsa",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-primary-blue selection:bg-energetic-yellow selection:text-primary-blue">
        <TopNavBar />
        <main>{children}</main>
        <FooterSection />
        <WhatsAppButton />
      </body>
    </html>
  );
}
