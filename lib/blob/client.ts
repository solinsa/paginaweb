import { put, del, list } from "@vercel/blob";

// ---------------------------------------------------------------------------
// Vercel Blob client helpers
// ---------------------------------------------------------------------------

const VALID_FOLDERS = ["products", "parts", "blog", "general"] as const;
type BlobFolder = (typeof VALID_FOLDERS)[number];

/**
 * Upload an image to Vercel Blob storage.
 *
 * @param file  - File / Blob to upload
 * @param folder - One of: products, parts, blog, general
 * @param options - Optional extra Vercel Blob put options
 */
export async function uploadImage(
  file: File | Blob,
  folder: BlobFolder = "general",
  options?: { contentType?: string; cacheControlMaxAge?: number },
) {
  const folderPrefix = VALID_FOLDERS.includes(folder) ? folder : "general";

  const filename =
    file instanceof File ? file.name : `upload-${Date.now()}`;
  const pathname = `${folderPrefix}/${Date.now()}-${filename}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: options?.contentType,
    cacheControlMaxAge: options?.cacheControlMaxAge ?? 60 * 60 * 24 * 365, // 1 year
  });

  return {
    url: blob.url,
    pathname: blob.pathname,
    downloadUrl: blob.downloadUrl,
  };
}

/**
 * Delete a blob by its URL.
 */
export async function deleteImage(url: string) {
  await del(url);
}

/**
 * List blobs under a given prefix (folder).
 */
export async function listImages(prefix?: BlobFolder) {
  return list({ prefix: prefix ? `${prefix}/` : undefined, limit: 1000 });
}

/**
 * Build the full public URL for a blob pathname.
 * Uses the BLOB base URL derived from the environment.
 */
export function getBlobUrl(pathname: string): string {
  // In Vercel, blob URLs look like https://<store>.public.blob.vercel-storage.com/<pathname>
  // We extract the base from the env or fall back to a placeholder.
  const base = process.env.VERCEL_BLOB_PUBLIC_URL?.replace(/\/$/, "") ?? "";
  if (base) return `${base}/${pathname}`;
  // Fallback: if we can't determine base, return the raw pathname (caller should store full URL)
  return pathname;
}
