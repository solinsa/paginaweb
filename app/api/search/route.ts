import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";

// ---------------------------------------------------------------------------
// GET /api/search — returns a flat search index for client-side Fuse.js
// ---------------------------------------------------------------------------

const SEARCH_QUERY = `
{
  "products": *[_type == "product" && !(_id in path("drafts.**"))] {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    shortDescription,
    brand,
    badge
  },
  "parts": *[_type == "part" && !(_id in path("drafts.**"))] {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    partNumber
  },
  "applications": *[_type == "application" && !(_id in path("drafts.**"))] {
    _id,
    title,
    "slug": slug.current,
    "industry": industry->title,
    methodOverview,
    badge
  },
  "blogPosts": *[_type == "blogPost" && !(_id in path("drafts.**"))] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    author
  }
}
`;

export const revalidate = 300; // Cache for 5 minutes

export async function GET() {
  try {
    const data = (await client.fetch(SEARCH_QUERY)) || {};

    const items = [
      ...((data as { products?: Record<string, unknown>[] }).products || []).map((p: Record<string, unknown>) => ({
        objectID: p._id as string,
        title: p.title as string,
        slug: p.slug as string,
        category: (p.category as string) ?? "",
        type: "product" as const,
        description: (p.shortDescription as string) ?? "",
        badge: p.badge as string | undefined,
        brand: p.brand as string | undefined,
      })),
      ...(data.parts || []).map((p: Record<string, unknown>) => ({
        objectID: p._id as string,
        title: p.title as string,
        slug: p.slug as string,
        category: (p.category as string) ?? "",
        type: "part" as const,
        description: (p.description as string) ?? "",
      })),
      ...(data.applications || []).map((a: Record<string, unknown>) => ({
        objectID: a._id as string,
        title: a.title as string,
        slug: a.slug as string,
        category: (a.industry as string) ?? "",
        type: "application" as const,
        description: (a.methodOverview as string) ?? "",
        badge: a.badge as string | undefined,
      })),
      ...(data.blogPosts || []).map((b: Record<string, unknown>) => ({
        objectID: b._id as string,
        title: b.title as string,
        slug: b.slug as string,
        category: (b.category as string) ?? "",
        type: "blog" as const,
        description: (b.excerpt as string) ?? "",
      })),
    ];

    return NextResponse.json(items);
  } catch (error) {
    console.error("Search index error:", error);
    return NextResponse.json([], { status: 200 });
  }
}
