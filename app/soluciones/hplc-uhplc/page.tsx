import type {Metadata} from 'next';import {ProductDetail} from '@/components/PrototypePages';
export const metadata:Metadata={
  title:'ChroZen HPLC y UHPLC | Young In Chromass | SOLINSA',
  description:'Sistemas HPLC y UHPLC ChroZen en México: bombas isocráticas, binarias o cuaternarias, detectores UV, DAD, RID, FL y ELSD. Configuración por aplicación, instalación y transferencia de métodos.',
  alternates:{canonical:'/soluciones/hplc-uhplc'},
  openGraph:{title:'ChroZen HPLC y UHPLC | SOLINSA',description:'Plataforma modular HPLC/UHPLC para alimentos, bebidas, ambiental y control de calidad, configurada por Solinsa.',url:'/soluciones/hplc-uhplc',type:'website'},
};
export default function Page(){return <ProductDetail slug="hplc-uhplc"/>}
