import type {Metadata} from 'next';import {notFound} from 'next/navigation';import {ProductDetail} from '@/components/PrototypePages';import {productFamilies} from '@/lib/products'

export function generateStaticParams(){return Object.keys(productFamilies).map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug} = await params
  const p = productFamilies[slug]
  if(!p) return {}
  return {
    title:`${p.title} | ${p.brand} | SOLINSA`,
    description:p.lead,
    alternates:{canonical:`/soluciones/${p.slug}`},
    openGraph:{title:`${p.title} | SOLINSA`,description:p.lead,url:`/soluciones/${p.slug}`,type:'website'},
  }
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug} = await params
  if(!productFamilies[slug]) notFound()
  return <ProductDetail slug={slug}/>
}
