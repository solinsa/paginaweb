import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriasMap } from "@/lib/industrias-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industria: string }>;
}): Promise<Metadata> {
  const { industria } = await params;
  const data = industriasMap[industria];

  if (!data) {
    return {
      title: "Industria no encontrada",
    };
  }

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
  };
}

export default async function IndustriaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ industria: string }>;
}) {
  const { industria } = await params;

  // Verificar que la industria existe
  if (!industriasMap[industria]) {
    notFound();
  }

  return <>{children}</>;
}
