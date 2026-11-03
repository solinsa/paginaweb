import {revalidatePath} from 'next/cache'
import {type NextRequest, NextResponse} from 'next/server'
import {parseBody} from 'next-sanity/webhook'

type WebhookPayload = {_type?: string; slug?: string}

// Called by a Sanity webhook on publish so new or edited posts show up right away
// instead of waiting for the 1-hour ISR window (which also caches 404s).
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({message: 'SANITY_REVALIDATE_SECRET no está configurado'}, {status: 500})
  }

  const {isValidSignature, body} = await parseBody<WebhookPayload>(req, secret)
  if (!isValidSignature) {
    return NextResponse.json({message: 'Firma inválida'}, {status: 401})
  }

  // Covers /blog, every /blog/[slug] (including cached 404s) and the category pages.
  revalidatePath('/blog', 'layout')
  revalidatePath('/sitemap.xml')

  return NextResponse.json({revalidated: true, type: body?._type ?? null, slug: body?.slug ?? null})
}
