import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/lib/blob/client";

// ---------------------------------------------------------------------------
// POST /api/upload – single image upload to Vercel Blob
// ---------------------------------------------------------------------------

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(request: NextRequest) {
  // --- Auth check ---
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  if (!token || token !== process.env.UPLOAD_AUTH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // --- Parse multipart form data ---
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "general";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // --- Validate type ---
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: `Invalid file type: ${file.type}. Allowed: jpg, png, webp, svg` },
      { status: 400 },
    );
  }

  // --- Validate size ---
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: `File too large. Max size: 10 MB` },
      { status: 400 },
    );
  }

  // --- Validate folder ---
  const validFolders = ["products", "parts", "blog", "general"];
  const safeFolder = validFolders.includes(folder) ? folder : "general";

  try {
    const result = await uploadImage(file, safeFolder as "products" | "parts" | "blog" | "general");
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("[upload] Error uploading to Vercel Blob:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 },
    );
  }
}
