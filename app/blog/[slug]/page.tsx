import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {blogPosts, blogPostsBySlug} from '@/lib/blog'

type PageProps={params:Promise<{slug:string}>}
const sectionId=(heading:string)=>heading.toLowerCase().replace(/[^a-z0-9áéíóúñ]+/gi,'-').replace(/^-|-$/g,'')

export function generateStaticParams(){return blogPosts.map(post=>({slug:post.slug}))}

export async function generateMetadata({params}:PageProps):Promise<Metadata>{
  const {slug}=await params
  const post=blogPostsBySlug[slug]
  return {title:post?`${post.title} | SOLINSA`:'Publicación | SOLINSA',description:post?.summary}
}

export default async function Page({params}:PageProps){
  const {slug}=await params
  const post=blogPostsBySlug[slug]
  if(!post) notFound()

  return <><header className="page-hero"><div className="container"><span className="breadcrumbs"><Link href="/">Inicio</Link> · <Link href="/blog">Conocimiento</Link> · {post.category}</span><span className="eyebrow">{post.category}</span><h1>{post.title}</h1><p className="lead">{post.summary}</p><span className="caps">Por el equipo técnico de Solinsa · {post.date} · {post.readTime}</span></div></header><section className="section"><div className="container grid-2" style={{gridTemplateColumns:'minmax(0,760px) minmax(240px,1fr)',alignItems:'start'}}><article className="article">{post.sections.map(section=><div key={section.heading}><h2 id={sectionId(section.heading)}>{section.heading}</h2><p>{section.text}</p>{section.image&&<div className="placeholder"><img src={section.image} alt={section.imageAlt||section.heading}/></div>}</div>)}</article><aside className="stack" style={{position:'sticky',top:120}}><div className="toc"><b>En este artículo</b>{post.sections.map(section=><a href={`#${sectionId(section.heading)}`} key={section.heading}>{section.heading}</a>)}</div><article className="card accent"><span className="caps">Servicio relacionado</span><h4>Mantenimiento y soporte técnico</h4><p>Para equipos detenidos, resultados fuera de criterio o planes de continuidad.</p><Link className="text-link" href="/servicio">Conocer los servicios →</Link></article></aside></div></section><section className="section tint"><div className="container stack-lg"><h2>También en Mantenimiento</h2><div className="grid-3">{blogPosts.filter(related=>related.slug!==post.slug).slice(0,3).map(related=><Link href={`/blog/${related.slug}`} className="card" key={related.slug}><span className="badge">{related.category}</span><h4>{related.title}</h4><span className="text-link">Leer artículo →</span></Link>)}</div></div></section></>
}
