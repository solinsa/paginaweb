import type {Metadata} from 'next'; import {IndustryDetail} from '@/components/IndustryDetail';
export const metadata:Metadata={title:'Industria y energía | SOLINSA',description:'Instrumentación analítica para gases, hidrocarburos, solventes, agua de proceso y materiales.'};
export default function Page(){return <IndustryDetail industry="la industria y energía"/>}
