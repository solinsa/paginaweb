"use client";

import { Suspense } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p>Cargando Studio...</p></div>}>
      <NextStudio config={config} />
    </Suspense>
  );
}
