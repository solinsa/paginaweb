import type {Metadata} from 'next'; import {IndustryDetail} from '@/components/IndustryDetail';
export const metadata:Metadata={title:'Laboratorios de bebidas alcohólicas | SOLINSA',description:'HPLC y GC para furfural, azúcares, alcoholes superiores, perfiles de destilado y aplicaciones de cerveza.'};
export default function Page(){return <IndustryDetail industry="bebidas alcohólicas"/>}
