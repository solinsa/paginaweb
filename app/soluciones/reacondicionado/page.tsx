import type {Metadata} from 'next';import {ProductDetail} from '@/components/PrototypePages';
export const metadata:Metadata={
  title:'Equipo analítico reacondicionado | HPLC y GC verificados | SOLINSA',
  description:'Equipos de cromatografía reacondicionados en México: HPLC, GC y detectores con diagnóstico, pruebas de funcionamiento documentadas, garantía e instalación en sitio.',
  alternates:{canonical:'/soluciones/reacondicionado'},
  openGraph:{title:'Equipo analítico reacondicionado | SOLINSA',description:'HPLC y GC reacondicionados con pruebas documentadas, garantía y servicio local.',url:'/soluciones/reacondicionado',type:'website'},
};
export default function Page(){return <ProductDetail slug="reacondicionado"/>}
