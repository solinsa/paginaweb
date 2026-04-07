import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/lib/blob/client";

// ---------------------------------------------------------------------------
// POST /api/upload/batch – upload up to 20 images at once
// ---------------------------------------------------------------------------

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_BATCH = 20;

export async function POST(request: NextRequest) {
  // --- Auth check ---
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  if (!token || token !== process.env.UPLOAD_AUTH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // --- Parse multipart form data ---
  const formData = await request.formData();
  const folder = (formData.get("folder") as string) || "general";
  const files = formData.getAll("files") as File[];

  if (!files || files.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }

  if (files.length > MAX_BATCH) {
    return NextResponse.json(
      { error: `Too many files. Max: ${MAX_BATCH}` },
      { status: 400 },
    );
  }

  const validFolders = ["products", "parts", "blog", "general"];
  const safeFolder = validFolders.includes(folder) ? folder : "general";

  // --- Validate each file ---
  for (const file of files) {
    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type: ${file.type} (${file.name}). Allowed: jpg, png, webp, svg` },
        { status: 400 },
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File too large: ${file.name}. Max: 10 MB` },
        { status: 400 },
      );
    }
  }

  // --- Upload all in parallel ---
  try {
    const results = await Promise.all(
      files.map(async (file) => {
        const uploaded = await uploadImage(
          file,
          safeFolder as "products" | "parts" | "blog" | "general",
        );
        return {
          url: uploaded.url,
          pathname: uploaded.pathname,
          originalName: file.name,
        };
      }),
    );
    return NextResponse.json(results, { status: 201 });
  } catch (error) {
    console.error("[upload/batch] Error uploading batch:", error);
    return NextResponse.json({ error: "Batch upload failed" }, { status: 500 });
  }
}
