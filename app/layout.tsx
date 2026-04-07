import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { TopNavBar } from "@/components/layout";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Solinsa",
    default: "Solinsa — Ingenieria y Soluciones Tecnologicas",
  },
  description:
    "Solinsa — Ingenieria y soluciones tecnologicas para analisis quimico, cromatografia y espectrometria. Mas de 25 anos de experiencia.",
  keywords: [
    "HPLC",
    "GC",
    "cromatografia",
    "espectrometria",
    "analisis quimico",
    "laboratorio",
    "Monterrey",
    "Mexico",
  ],
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
      </head>
      <body className="min-h-full flex flex-col">
        <TopNavBar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
