import type {Metadata} from 'next'; import {ProductCatalog} from '@/components/ProductCatalog'; import type {CatalogParams} from '@/components/ProductCatalog';
export const metadata:Metadata={title:'Catálogo de productos | SOLINSA',description:'Equipos, detectores, accesorios, consumibles y refacciones para cromatografía y laboratorios en México.'};
export default async function Page({searchParams}:{searchParams:Promise<CatalogParams>}){const params=await searchParams;return <ProductCatalog key={JSON.stringify(params)} params={params}/>}
