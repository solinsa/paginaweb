import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {getBlogPostBySlug, getBlogPosts} from '@/lib/blog'

type PageProps={params:Promise<{slug:string}>}
function emphasize(text:string, phrases:string[]=[]):React.ReactNode {
  const phrase=phrases.find(value=>text.includes(value))
  if(!phrase) return text
  const index=text.indexOf(phrase)
  const remaining=phrases.filter(value=>value!==phrase)
  return <>{emphasize(text.slice(0,index),remaining)}<strong>{phrase}</strong>{emphasize(text.slice(index+phrase.length),phrases)}</>
}

const sectionId=(heading:string)=>heading.toLowerCase().replace(/[^a-z0-9áéíóúñ]+/gi,'-').replace(/^-|-$/g,'')

export const revalidate = 3600

export async function generateStaticParams(){const posts=await getBlogPosts(); return posts.map(post=>({slug:post.slug}))}

export async function generateMetadata({params}:PageProps):Promise<Metadata>{
  const {slug}=await params
  const post=await getBlogPostBySlug(slug)
  return {title:post?`${post.title} | SOLINSA`:'Publicación | SOLINSA',description:post?.summary}
}

export default async function Page({params}:PageProps){
  const {slug}=await params
  const post=await getBlogPostBySlug(slug)
  if(!post) notFound()
  const related=(await getBlogPosts()).filter(related=>related.slug!==post.slug).slice(0,3)

  return <><header className="page-hero"><div className="container"><span className="breadcrumbs"><Link href="/">Inicio</Link> · <Link href="/blog">Conocimiento</Link> · {post.category}</span><span className="eyebrow">{post.category}</span><h1>{post.title}</h1><p className="lead">{post.summary}</p><span className="caps">Por el equipo técnico de Solinsa · {post.date} · {post.readTime}</span></div></header><section className="section"><div className="container grid-2" style={{gridTemplateColumns:'minmax(0,760px) minmax(240px,1fr)',alignItems:'start'}}><article className="article">{post.sections.map(section=><div key={section.heading}><h2 id={sectionId(section.heading)}>{section.heading}</h2>{section.text.split('\n\n').map(paragraph=><p key={paragraph.slice(0,40)}>{emphasize(paragraph,section.boldText)}</p>)}{section.table&&<div style={{overflowX:'auto',margin:'1.5rem 0'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.875rem'}}><thead>{section.table.rows.slice(0,1).map((row,rowIndex)=><tr key={rowIndex}>{row.map((cell,cellIndex)=><th key={cellIndex} scope="col" style={{textAlign:'left',padding:'0.5rem 0.75rem',borderBottom:'2px solid var(--border,#e5e7eb)',background:'var(--tint,#f8fafc)'}}>{cell}</th>)}</tr>)}</thead><tbody>{section.table.rows.slice(1).map((row,rowIndex)=><tr key={rowIndex}>{row.map((cell,cellIndex)=><td key={cellIndex} style={{padding:'0.5rem 0.75rem',borderBottom:'1px solid var(--border,#e5e7eb)',verticalAlign:'top'}}>{cell}</td>)}</tr>)}</tbody></table></div>}</div>)}</article><aside className="stack" style={{position:'sticky',top:120}}><div className="toc"><b>En este artículo</b>{post.sections.map(section=><a href={`#${sectionId(section.heading)}`} key={section.heading}>{section.heading}</a>)}</div><article className="card accent"><span className="caps">Servicio relacionado</span><h4>Mantenimiento y soporte técnico</h4><p>Para equipos detenidos, resultados fuera de criterio o planes de continuidad.</p><Link className="text-link" href="/servicio">Conocer los servicios →</Link></article></aside></div></section><section className="section tint"><div className="container stack-lg"><h2>También te puede interesar</h2><div className="grid-3">{related.map(related=><Link href={`/blog/${related.slug}`} className="card" key={related.slug}><span className="badge">{related.category}</span><h4>{related.title}</h4><span className="text-link">Leer artículo →</span></Link>)}</div></div></section></>
}
