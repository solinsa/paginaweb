import type {Metadata} from 'next';import {ProductDetail} from '@/components/PrototypePages';
export const metadata:Metadata={
  title:'Cromatografía iónica (IC) | Aniones y cationes | SOLINSA',
  description:'Sistemas de cromatografía iónica en México para aniones y cationes con supresión de conductividad: agua potable, residual, alimentos y procesos. Instalación y servicio preventivo Solinsa.',
  alternates:{canonical:'/soluciones/ic'},
  openGraph:{title:'Cromatografía iónica (IC) | SOLINSA',description:'Análisis de aniones y cationes con supresión, respaldado por servicio técnico local.',url:'/soluciones/ic',type:'website'},
};
export default function Page(){return <ProductDetail slug="ic"/>}
