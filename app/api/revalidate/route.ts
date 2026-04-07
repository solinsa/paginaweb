import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

interface SanityWebhookPayload {
  _id: string;
  _type: string;
  slug?: { current?: string };
}

// Map Sanity document types to their URL path prefixes
const typeToPathPrefix: Record<string, string> = {
  product: "/productos",
  part: "/consumibles",
  application: "/aplicaciones",
  blogPost: "/recursos",
  industry: "/industrias",
  category: "/equipos",
};

export async function POST(request: NextRequest) {
  // --- Verify webhook secret ---
  const body = await request.text();
  const secret = request.headers.get("x-sanity-webhook-secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // --- Parse payload ---
  let payload: SanityWebhookPayload;
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const { _type, slug } = payload;

  if (!_type) {
    return NextResponse.json(
      { message: "Missing _type in payload" },
      { status: 400 }
    );
  }

  const pathsToRevalidate: string[] = [];

  // Always revalidate the home page (featured content, stats, etc.)
  pathsToRevalidate.push("/");

  // Revalidate listing pages for the content type
  switch (_type) {
    case "product":
      pathsToRevalidate.push("/productos");
      pathsToRevalidate.push("/equipos");
      break;
    case "part":
      pathsToRevalidate.push("/consumibles");
      break;
    case "application":
      pathsToRevalidate.push("/aplicaciones");
      break;
    case "blogPost":
      pathsToRevalidate.push("/recursos");
      break;
    case "industry":
      pathsToRevalidate.push("/industrias");
      break;
    case "category":
      pathsToRevalidate.push("/equipos");
      break;
  }

  // Revalidate the specific detail page if slug is available
  const prefix = typeToPathPrefix[_type];
  if (prefix && slug?.current) {
    pathsToRevalidate.push(`${prefix}/${slug.current}`);
  }

  // Execute revalidation
  try {
    for (const path of pathsToRevalidate) {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
