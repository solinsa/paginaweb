import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicaciones",
  description:
    "Explora nuestra biblioteca de notas de aplicación desarrolladas para optimizar la productividad y exactitud en el laboratorio moderno.",
  keywords: [
    "aplicaciones analíticas",
    "notas de aplicación",
    "HPLC",
    "GC",
    "cromatografía",
    "espectrometría",
    "alimentos",
    "farmacéutica",
    "petroquímica",
    "medio ambiente",
  ],
};

export default function AplicacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
