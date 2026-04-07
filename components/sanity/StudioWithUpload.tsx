"use client";

import { useCallback, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// StudioWithUpload – Sanity Studio enhanced with Vercel Blob upload button
//
// This is a standalone upload widget that can be embedded alongside the Sanity
// Studio. It uploads images to Vercel Blob and copies the resulting URL so
// the user can paste it into any Sanity URL field.
// ---------------------------------------------------------------------------

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/svg+xml"]);
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

interface UploadResult {
  url: string;
  pathname: string;
}

export default function StudioWithUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [folder, setFolder] = useState("general");

  const handleUpload = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      setError(null);
      setUploading(true);

      try {
        const uploaded: UploadResult[] = [];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          if (!ALLOWED_TYPES.has(file.type)) {
            throw new Error(`Tipo inválido: ${file.name}`);
          }
          if (file.size > MAX_SIZE) {
            throw new Error(`Archivo muy grande: ${file.name}`);
          }

          const formData = new FormData();
          formData.append("file", file);
          formData.append("folder", folder);

          const res = await fetch("/api/upload", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_UPLOAD_AUTH_TOKEN ?? ""}`,
            },
            body: formData,
          });

          if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error ?? "Upload failed");
          }

          const data: UploadResult = await res.json();
          uploaded.push(data);
        }

        setResults((prev) => [...uploaded, ...prev]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    },
    [folder],
  );

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="border rounded-lg p-4 space-y-4 bg-white shadow-sm">
      <h3 className="text-lg font-semibold">Subir imágenes (Vercel Blob)</h3>
      <p className="text-sm text-gray-500">
        Sube imágenes y pega la URL en cualquier campo de Sanity.
      </p>

      {/* Folder selector */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">Carpeta:</label>
        <select
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="general">General</option>
          <option value="products">Productos</option>
          <option value="parts">Refacciones</option>
          <option value="blog">Blog</option>
        </select>
      </div>

      {/* Upload button */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/svg+xml"
          multiple
          onChange={(e) => handleUpload(e.target.files)}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? "Subiendo..." : "Seleccionar imágenes"}
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">URLs subidas:</h4>
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <input
                readOnly
                value={r.url}
                className="flex-1 border rounded px-2 py-1 text-xs bg-gray-50"
              />
              <button
                onClick={() => copyToClipboard(r.url)}
                className="text-xs text-blue-600 hover:underline whitespace-nowrap"
              >
                Copiar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
