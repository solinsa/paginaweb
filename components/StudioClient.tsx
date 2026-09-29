"use client";

import { Studio } from "sanity";
import config from "@/sanity.config";

export function StudioClient() {
  return <Studio config={config} />;
}
