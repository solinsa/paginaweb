'use client'

import Link from 'next/link'
import {FormEvent,useMemo,useState} from 'react'

const WA = 'https://wa.me/528123554766'

type FilterKey = 'families' | 'techniques' | 'types'
type Product = {
  name: string
  brand: string
  description: string
  family: string
  techniques: string[]
  type: string
  href: string
}

const products: Product[] = [
  {name:'ChroZen HPLC',brand:'Young In Chromass',description:'Sistema HPLC modular para análisis cuantitativo de rutina.',family:'Cromatografía',techniques:['HPLC'],type:'Equipo',href:'/soluciones/chrozen-hplc'},
  {name:'ChroZen UHPLC',brand:'Young In Chromass',description:'Sistema de alta presión para separaciones rápidas y eficientes.',family:'Cromatografía',techniques:['UHPLC'],type:'Equipo',href:'/soluciones/chrozen-uhplc'},
  {name:'ChroZen HPLC preparativo',brand:'Young In Chromass',description:'Purificación a escala preparativa con colector de fracciones.',family:'Cromatografía',techniques:['HPLC'],type:'Equipo',href:'/soluciones/chrozen-hplc-preparativo'},
  {name:'Detector de índice de refracción RID',brand:'Young In Chromass',description:'Detección para azúcares y compuestos sin absorción UV.',family:'Cromatografía',techniques:['HPLC','UHPLC'],type:'Detector',href:'/soluciones/detector-rid'},
  {name:'Detector ELSD para LC',brand:'Sedere',description:'Detector universal para compuestos no volátiles sin cromóforo.',family:'Cromatografía',techniques:['HPLC','UHPLC'],type:'Detector',href:'/soluciones/detector-elsd'},
  {name:'ChroZen GC',brand:'Young In Chromass',description:'Cromatógrafo de gases configurable por aplicación y detector.',family:'Cromatografía',techniques:['GC'],type:'Equipo',href:'/soluciones/chrozen-gc'},
  {name:'Sistema GC-MS',brand:'QTEK',description:'Cromatografía de gases con espectrometría de masas.',family:'Cromatografía',techniques:['GC-MS'],type:'Equipo',href:'/soluciones/gc-ms'},
  {name:'Detector VUV',brand:'VUV Analytics',description:'Detección espectral VUV para análisis cualitativo y cuantitativo.',family:'Espectroscopía',techniques:['GC'],type:'Detector',href:'/soluciones/detector-vuv'},
  {name:'Detector TEA',brand:'Ellutia',description:'Detección selectiva para compuestos de nitrógeno.',family:'Cromatografía',techniques:['GC'],type:'Detector',href:'/soluciones/detector-tea'},
  {name:'Automuestreador para GC y LC',brand:'HTA',description:'Automatización de inyección para secuencias analíticas.',family:'Cromatografía',techniques:['GC','HPLC'],type:'Accesorio',href:'/soluciones/automuestreador-hta'},
  {name:'Sistema de purga y trampa',brand:'EST Analytical',description:'Preparación automatizada de muestras para compuestos volátiles.',family:'Preparación de muestras',techniques:['GC-MS'],type:'Equipo',href:'/soluciones/purga-trampa'},
  {name:'Sistema de pirólisis',brand:'CDS Analytical',description:'Preparación térmica de muestras para análisis por GC y GC-MS.',family:'Preparación de muestras',techniques:['GC','GC-MS'],type:'Equipo',href:'/soluciones/pirolisis'},
  {name:'Cromatógrafo iónico',brand:'Shine',description:'Análisis de aniones y cationes con opciones de supresión.',family:'Cromatografía',techniques:['IC'],type:'Equipo',href:'/soluciones/ic'},
  {name:'Espectrofotómetro UV-Vis',brand:'Persee',description:'Espectroscopía UV-Visible para análisis de rutina.',family:'Espectroscopía',techniques:['UV-Vis'],type:'Equipo',href:'/soluciones/espectrofotometro-uv-vis'},
  {name:'Espectrómetro de absorción atómica',brand:'Persee',description:'Análisis elemental por absorción atómica.',family:'Espectroscopía',techniques:['AAS'],type:'Equipo',href:'/soluciones/espectrometro-aas'},
  {name:'Sistema de agua ultrapura',brand:'Young In Chromass',description:'Producción de agua para aplicaciones analíticas de laboratorio.',family:'Sistemas de agua',techniques:['Agua Tipo I'],type:'Equipo',href:'/soluciones/agua-ultrapura'},
  {name:'Columnas analíticas HPLC',brand:'Trajan',description:'Columnas y guardas para separaciones cromatográficas.',family:'Consumibles',techniques:['HPLC','UHPLC'],type:'Consumible',href:'/soluciones/columnas-hplc'},
  {name:'Consumibles para GC',brand:'Trajan',description:'Columnas, viales, septas, liners y consumibles de inyección.',family:'Consumibles',techniques:['GC','GC-MS'],type:'Consumible',href:'/soluciones/consumibles'},
  {name:'Bibliotecas espectrales MS',brand:'Wiley',description:'Bibliotecas de referencia para identificación espectral.',family:'Software y bibliotecas',techniques:['GC-MS'],type:'Software',href:'/soluciones/bibliotecas-espectrales'},
]

const filterGroups: {key: FilterKey; label: string; options: string[]}[] = [
  {key:'families',label:'Familia',options:['Cromatografía','Espectroscopía','Preparación de muestras','Sistemas de agua','Consumibles','Software y bibliotecas']},
  {key:'techniques',label:'Técnica',options:['HPLC','UHPLC','GC','GC-MS','IC','UV-Vis','AAS','Agua Tipo I']},
  {key:'types',label:'Tipo de producto',options:['Equipo','Detector','Consumible','Accesorio','Software']},
]

const initialFilters: Record<FilterKey, string[]> = {families:[],techniques:[],types:[]}
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()

export type CatalogParams = Record<string,string|string[]|undefined>

const getValues = (params: CatalogParams,key: string) => {
  const value = params[key]
  return value ? (Array.isArray(value) ? value : [value]) : []
}

const getValue = (params: CatalogParams,key: string) => getValues(params,key)[0] ?? ''

function matchesGroup(product: Product, key: FilterKey, values: string[]) {
  if (!values.length) return true
  if (key === 'families') return values.includes(product.family)
  if (key === 'types') return values.includes(product.type)
  return values.some(value => product.techniques.includes(value))
}

export function ProductCatalog({params={}}:{params?:CatalogParams}) {
  const initialQuery = getValue(params,'q').trim()
  const initialSort = ['relevance','name','brand'].includes(getValue(params,'sort')) ? getValue(params,'sort') : 'relevance'
  const initialSelections = filterGroups.reduce((result,group) => {
    const allowed = new Set(group.options)
    result[group.key] = getValues(params,group.key).filter(value => allowed.has(value))
    return result
  },{...initialFilters} as Record<FilterKey,string[]>)
  const [draftQuery,setDraftQuery] = useState(initialQuery)
  const [query,setQuery] = useState(initialQuery)
  const [sort,setSort] = useState(initialSort)
  const [filters,setFilters] = useState(initialSelections)

  const visibleProducts = useMemo(() => {
    const term = normalize(query)
    const filtered = products.filter(product => {
      const searchable = normalize([product.name,product.brand,product.description,product.family,product.type,...product.techniques].join(' '))
      return (!term || searchable.includes(term)) &&
        matchesGroup(product,'families',filters.families) &&
        matchesGroup(product,'techniques',filters.techniques) &&
        matchesGroup(product,'types',filters.types)
    })
    if (sort === 'name') return [...filtered].sort((a,b) => a.name.localeCompare(b.name,'es'))
    if (sort === 'brand') return [...filtered].sort((a,b) => a.brand.localeCompare(b.brand,'es'))
    return filtered
  },[filters,query,sort])

  const activeFilters = filterGroups.flatMap(group => filters[group.key].map(value => ({key:group.key,value})))
  const countFor = (key: FilterKey,value: string) => products.filter(product => matchesGroup(product,key,[value])).length
  const toggleFilter = (key:FilterKey,value:string) => setFilters(current => ({...current,[key]:current[key].includes(value)?current[key].filter(item=>item!==value):[...current[key],value]}))
  const clearAll = () => {setDraftQuery('');setQuery('');setSort('relevance');setFilters(initialFilters)}
  const submitSearch = (event:FormEvent) => {event.preventDefault();setQuery(draftQuery.trim())}

  return <>
    <header className="page-hero"><div className="container"><span className="breadcrumbs"><Link href="/">Inicio</Link> · Productos</span><h1>Catálogo de productos</h1><p className="lead">Equipos, detectores, accesorios, consumibles y refacciones. Encuéntralos por técnica o tipo de producto, sin conocer la marca.</p></div></header>
    <section className="section-sm"><div className="container stack-lg">
      <form className="search" role="search" onSubmit={submitSearch}><input aria-label="Buscar productos" placeholder="Buscar por producto, marca o técnica" value={draftQuery} onChange={event=>{setDraftQuery(event.target.value);setQuery(event.target.value.trim())}}/><button type="submit">Buscar</button></form>
      <div className="catalog-families" aria-label="Filtrar por familia">{filterGroups[0].options.map(value => {const active=filters.families.includes(value);return <button type="button" className={`filter-chip ${active?'active':''}`} aria-pressed={active} onClick={()=>toggleFilter('families',value)} key={value}>{value}</button>})}</div>
      <div className="filter-layout">
        <aside className="filter-panel" aria-label="Filtros de productos">
          <div className="row between"><h4>Filtros</h4>{(activeFilters.length>0||query)&&<button type="button" className="filter-clear" onClick={clearAll}>Limpiar</button>}</div>
          {filterGroups.map(group => <fieldset className="filter-group" key={group.key}><legend className="caps">{group.label}</legend>{group.options.map(value => {const checked=filters[group.key].includes(value);return <label className={`check ${checked?'active':''}`} key={value}><input className="catalog-checkbox" type="checkbox" checked={checked} onChange={()=>toggleFilter(group.key,value)}/><span>{value}</span><small>{countFor(group.key,value)}</small></label>})}</fieldset>)}
        </aside>
        <div className="stack-lg">
          {activeFilters.length>0&&<div className="active-filters"><span className="muted small">Selección activa</span>{activeFilters.map(({key,value}) => <button type="button" onClick={()=>toggleFilter(key,value)} key={`${key}-${value}`}>{value}<span aria-hidden="true">×</span><span className="sr-only">Quitar filtro {value}</span></button>)}</div>}
          <div className="catalog-results-header"><b aria-live="polite">{visibleProducts.length} {visibleProducts.length===1?'resultado':'resultados'}{query&&<> para “{query}”</>}</b><label className="catalog-sort"><span>Ordenar:</span><select value={sort} onChange={event=>setSort(event.target.value)} aria-label="Ordenar productos"><option value="relevance">Relevancia</option><option value="name">Nombre</option><option value="brand">Marca</option></select></label></div>
          {visibleProducts.length ? <div className="grid-2">{visibleProducts.map(product => <Link href={product.href} className="card product-card" key={product.name}><div className="placeholder"><strong>Vista de producto</strong><span>{product.name}</span></div><span className="caps">{product.brand}</span><h4>{product.name}</h4><p>{product.description}</p><div className="product-tags"><span className="badge">{product.type}</span>{product.techniques.map(technique => <span className="badge blue" key={technique}>{technique}</span>)}</div><span className="text-link">Ver ficha →</span></Link>)}</div> : <div className="catalog-empty"><h3>No encontramos productos con esos filtros.</h3><p>Prueba quitando un filtro o usando otro término de búsqueda.</p><button type="button" className="btn btn-outline" onClick={clearAll}>Ver todos los productos</button></div>}
          <a className="btn btn-wa" href={`${WA}?text=${encodeURIComponent('Hola, necesito ayuda para encontrar un producto para mi laboratorio.')}`}>Ayúdame a encontrarlo por WhatsApp</a>
        </div>
      </div>
    </div></section>
  </>
}
