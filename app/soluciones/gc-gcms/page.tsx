import type {Metadata} from 'next';import {ProductDetail} from '@/components/PrototypePages';
export const metadata:Metadata={
  title:'GC y GC-MS | Cromatógrafos de gases y espectrometría de masas | SOLINSA',
  description:'Cromatógrafo de gases GC y sistemas GC-MS en México: FID, TCD, ECD, VUV, TEA, purga y trampa, pirólisis y bibliotecas MS. Configuración por aplicación con instalación y servicio local Solinsa.',
  alternates:{canonical:'/soluciones/gc-gcms'},
  openGraph:{title:'GC y GC-MS | SOLINSA',description:'Cromatografía de gases y GC-MS configurados por aplicación, con respaldo técnico local en México.',url:'/soluciones/gc-gcms',type:'website'},
};
export default function Page(){return <ProductDetail slug="gc-gcms"/>}
