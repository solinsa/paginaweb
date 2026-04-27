const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

// Treat missing/placeholder IDs as unconfigured so production builds stay clean
const isConfigured = !!projectId && projectId !== "1" && projectId !== "placeholder";

export const sanityConfigured = isConfigured;

function createNoopClient() {
  return {
    fetch: async () => null,
  };
}

function createSanityClient() {
  if (!isConfigured) {
    return createNoopClient();
  }

  const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

  return {
    async fetch(query: string) {
      const url = `${baseUrl}?query=${encodeURIComponent(query)}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Sanity fetch failed (${res.status}): ${text}`);
      }

      const json = await res.json();
      return json.result;
    },
  };
}

export const client: any = createSanityClient();

function createEmptyImageBuilder() {
  const chain: any = {
    width: () => chain,
    height: () => chain,
    blur: () => chain,
    auto: () => chain,
    fit: () => chain,
    url: () => "",
  };
  return chain;
}

export function urlFor(_source: any) {
  return createEmptyImageBuilder();
}
