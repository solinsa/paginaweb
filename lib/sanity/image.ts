import type { ImageProps as NextImageProps } from "next/image";
import { urlFor } from "./client";
import type { SanityImageSource } from "@sanity/image-url";

/**
 * Build a Sanity image URL with optional width/height/fit.
 */
export function getSanityImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
) {
  if (!source) return "";

  let img = urlFor(source);

  if (width) img = img.width(width);
  if (height) img = img.height(height);

  return img.auto("format").fit("max").url() || "";
}

/**
 * Returns props compatible with next/image <Image> component.
 */
export function getSanityImageProps(
  source: SanityImageSource,
  width: number,
  height: number
): Pick<NextImageProps, "src" | "width" | "height" | "alt"> & {
  blurDataURL?: string;
} {
  const url = getSanityImageUrl(source, width, height);

  return {
    src: url,
    width,
    height,
    alt: "",
  };
}

/**
 * Returns a low-res placeholder URL for blurDataURL.
 */
export function getSanityBlurDataURL(source: SanityImageSource): string {
  if (!source) return "";
  return urlFor(source).width(20).height(20).blur(10).url() || "";
}
