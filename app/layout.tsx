import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { TopNavBar } from "@/components/layout";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/seo/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Solinsa",
    default:
      "Solinsa — Mantenimiento y Venta de Equipos de Cromatografía y Espectroscopía",
  },
  description:
    "Solinsa: tu aliado en cromatografía y espectroscopía. Mantenimiento preventivo y correctivo multimarca (Agilent, Waters, Shimadzu, Thermo), calibración, repuestos, consultoría analítica. Más de 14 años de experiencia en México.",
  keywords: [
    "mantenimiento HPLC",
    "mantenimiento GC",
    "cromatografía",
    "espectrometría de masas",
    "espectroscopía",
    "calibración equipos laboratorio",
    "repuestos cromatografía",
    "Agilent",
    "Waters",
    "Shimadzu",
    "Thermo Fisher",
    "PerkinElmer",
    "laboratorio Monterrey",
    "México",
    "mantenimiento preventivo",
    "mantenimiento correctivo",
    "HPLC",
    "GC",
    "GC-MS",
    "LC-MS",
  ],
  openGraph: {
    title: "Solinsa — Tu Aliado en Cromatografía y Espectroscopía",
    description:
      "Mantenimiento multimarca, calibración, repuestos y consultoría para equipos de cromatografía y espectroscopía. Más de 14 años de experiencia.",
    url: "https://www.solinsa.com.mx",
    siteName: "Solinsa",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontVariables} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-full flex flex-col">
        <TopNavBar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
