import type {Metadata} from 'next';import {ProductDetail} from '@/components/PrototypePages';
export const metadata:Metadata={
  title:'Consumibles y refacciones de cromatografía | Columnas HPLC y GC | SOLINSA',
  description:'Columnas HPLC y capilares GC (Trajan), viales, septas, liners y bibliotecas espectrales MS (Wiley) en México. Equivalencias de columna y entrega desde Monterrey.',
  alternates:{canonical:'/soluciones/consumibles'},
  openGraph:{title:'Consumibles y refacciones de cromatografía | SOLINSA',description:'Columnas, viales, septas, liners y bibliotecas MS con entrega en México.',url:'/soluciones/consumibles',type:'website'},
};
export default function Page(){return <ProductDetail slug="consumibles"/>}
