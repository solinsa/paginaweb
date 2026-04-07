import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Graceful degradation: if no projectId configured, return a no-op client
const isConfigured = !!projectId && projectId !== "1";

export const client = isConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
    })
  : createClient({
      projectId: "placeholder",
      dataset: "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    });

export const sanityConfigured = isConfigured;

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
