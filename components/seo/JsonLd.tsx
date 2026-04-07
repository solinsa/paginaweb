interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Server component that renders a JSON-LD <script> tag.
 *
 * Usage:
 * ```tsx
 * <JsonLd data={organizationSchema()} />
 * ```
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
