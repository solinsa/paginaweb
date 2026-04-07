"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SearchItem {
  objectID: string;
  title: string;
  slug: string;
  category: string;
  type: "product" | "part" | "blog" | "application";
  description: string;
  badge?: string;
  brand?: string;
}

interface GroupedResults {
  label: string;
  type: string;
  route: string;
  hits: SearchItem[];
}

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const GROUPS: Array<{ type: string; label: string; route: string }> = [
  { type: "product", label: "Productos", route: "/soluciones/productos" },
  { type: "part", label: "Partes y Consumibles", route: "/soluciones" },
  { type: "application", label: "Aplicaciones", route: "/aplicaciones" },
  { type: "blog", label: "Blog", route: "/blog" },
];

const fuseOptions: import("fuse.js").IFuseOptions<SearchItem> = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.2 },
    { name: "brand", weight: 0.15 },
    { name: "category", weight: 0.15 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GroupedResults[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchIndex, setSearchIndex] = useState<Fuse<SearchItem> | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Load search index once on first open
  useEffect(() => {
    if (!open || searchIndex) return;

    async function loadIndex() {
      try {
        const res = await fetch("/api/search");
        if (!res.ok) throw new Error("Failed to load search index");
        const data: SearchItem[] = await res.json();
        setSearchIndex(new Fuse(data, fuseOptions));
      } catch {
        setError(true);
      }
    }

    loadIndex();
  }, [open, searchIndex]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setActiveIndex(-1);
      setError(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Search with Fuse.js
  const doSearch = useCallback(
    (q: string) => {
      if (!q.trim() || !searchIndex) {
        setResults([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(false);

      try {
        const fuseResults = searchIndex.search(q, { limit: 20 });
        const items = fuseResults.map((r) => r.item);

        // Group by type
        const grouped: GroupedResults[] = [];
        for (const group of GROUPS) {
          const hits = items.filter((item) => item.type === group.type);
          if (hits.length > 0) {
            grouped.push({ label: group.label, type: group.type, route: group.route, hits });
          }
        }

        setResults(grouped);
      } catch {
        setError(true);
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [searchIndex]
  );

  const handleInput = (value: string) => {
    setQuery(value);
    setActiveIndex(-1);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => doSearch(value), 300);
  };

  // Build flat list for keyboard navigation
  const flatItems: Array<{ hit: SearchItem; groupRoute: string }> = [];
  results.forEach((group) => {
    group.hits.forEach((hit) => {
      flatItems.push({ hit, groupRoute: group.route });
    });
  });

  const totalItems = flatItems.length;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % (totalItems || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + totalItems) % (totalItems || 1));
    } else if (e.key === "Enter" && activeIndex >= 0 && activeIndex < totalItems) {
      e.preventDefault();
      const item = flatItems[activeIndex];
      router.push(`${item.groupRoute}/${item.hit.slug}`);
      onClose();
    }
  };

  const handleClickHit = (hit: SearchItem, groupRoute: string) => {
    router.push(`${groupRoute}/${hit.slug}`);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-on-surface/50 backdrop-blur-sm" onClick={onClose} />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-surface shadow-2xl" onKeyDown={handleKeyDown}>
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-outline-variant px-5 py-4">
          <span className="material-symbols-outlined text-2xl text-on-surface-variant">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Buscar productos, partes, aplicaciones..."
            className="flex-1 bg-transparent text-lg text-on-surface outline-none placeholder:text-on-surface-variant"
          />
          {loading && (
            <span className="material-symbols-outlined animate-spin text-xl text-on-surface-variant">
              progress_activity
            </span>
          )}
          <kbd className="hidden rounded-md bg-surface-container-highest px-2 py-0.5 text-xs text-on-surface-variant sm:inline">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto px-2 py-2">
          {/* Loading index */}
          {!searchIndex && !error && (
            <div className="flex flex-col items-center gap-2 py-12 text-center">
              <span className="material-symbols-outlined animate-spin text-4xl text-on-surface-variant">
                progress_activity
              </span>
              <p className="text-on-surface-variant">Cargando índice de búsqueda...</p>
            </div>
          )}

          {/* Empty state */}
          {query.trim() && !loading && results.length === 0 && !error && searchIndex && (
            <div className="flex flex-col items-center gap-2 py-12 text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">search_off</span>
              <p className="text-on-surface-variant">
                No se encontraron resultados para &ldquo;{query}&rdquo;
              </p>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="flex flex-col items-center gap-2 py-12 text-center">
              <span className="material-symbols-outlined text-4xl text-error">error</span>
              <p className="text-error">Error al buscar. Intenta de nuevo.</p>
            </div>
          )}

          {/* Initial state */}
          {!query.trim() && searchIndex && (
            <div className="flex flex-col items-center gap-2 py-12 text-center">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">search</span>
              <p className="text-on-surface-variant">Escribe para buscar en todo el sitio</p>
            </div>
          )}

          {/* Grouped results */}
          {results.map((group) => (
            <div key={group.type} className="mb-2">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                {group.label}
              </div>
              {group.hits.map((hit) => {
                const flatIdx = flatItems.findIndex(
                  (f) => f.hit.objectID === hit.objectID && f.groupRoute === group.route
                );
                const isActive = activeIndex === flatIdx;

                return (
                  <button
                    key={hit.objectID}
                    onClick={() => handleClickHit(hit, group.route)}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors",
                      isActive ? "bg-primary-container/60" : "hover:bg-surface-container-highest"
                    )}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-on-surface">{hit.title}</span>
                        {hit.brand && (
                          <span className="text-xs text-on-surface-variant">{hit.brand}</span>
                        )}
                      </div>
                      {(hit.category || hit.badge) && (
                        <div className="mt-0.5 flex gap-1.5">
                          {hit.category && (
                            <span className="inline-block rounded-md bg-secondary-container px-1.5 py-0.5 text-[10px] font-medium text-on-secondary-container">
                              {hit.category}
                            </span>
                          )}
                          {hit.badge && (
                            <span className="inline-block rounded-md bg-secondary-fixed px-1.5 py-0.5 text-[10px] font-medium text-secondary">
                              {hit.badge}
                            </span>
                          )}
                        </div>
                      )}
                      {hit.description && (
                        <p className="mt-1 line-clamp-2 text-sm text-on-surface-variant">
                          {hit.description}
                        </p>
                      )}
                    </div>
                    <span className="material-symbols-outlined mt-1 text-lg text-on-surface-variant">
                      arrow_forward
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        {totalItems > 0 && (
          <div className="flex items-center justify-between border-t border-outline-variant px-5 py-2 text-xs text-on-surface-variant">
            <span>
              {totalItems} resultado{totalItems !== 1 ? "s" : ""}
            </span>
            <div className="flex gap-3">
              <span>
                <kbd className="rounded bg-surface-container-highest px-1.5 py-0.5">↑↓</kbd> navegar
              </span>
              <span>
                <kbd className="rounded bg-surface-container-highest px-1.5 py-0.5">↵</kbd> abrir
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
