import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/components/sections/TopNavBar";
import FooterSection from "@/components/sections/FooterSection";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solinsa.mx"),
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
    <html lang="es-MX">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context':'https://schema.org','@type':'Organization',name:'SOLINSA',
          legalName:'Soluciones en Instrumentación, S.A. de C.V.',url:'https://www.solinsa.mx',
          telephone:'+52 81 2355 4766',email:'ventas@solinsa.mx',address:{'@type':'PostalAddress',addressLocality:'Monterrey',addressRegion:'Nuevo León',addressCountry:'MX'}
        })}} />
      </head>
      <body>
        <TopNavBar />
        <main>{children}</main>
        <FooterSection />
        <WhatsAppButton />
      </body>
    </html>
  );
}
