import type {Metadata} from 'next'; import {IndustryDetail} from '@/components/IndustryDetail';
export const metadata:Metadata={title:'Laboratorios de alimentos y bebidas | SOLINSA',description:'Instrumentación analítica para control de calidad en alimentos y bebidas.'}; export default function Page(){return <IndustryDetail industry="alimentos y bebidas"/>}
