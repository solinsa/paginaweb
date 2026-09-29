import type {Metadata} from 'next';import {ServiceDetail} from '@/components/PrototypePages';
export const metadata:Metadata={title:'Contratos de servicio | SOLINSA',description:'Plan anual de servicio para el parque de equipos de tu laboratorio: calendario, alcances y prioridades.'};
export default function Page(){return <ServiceDetail title="Un plan anual de servicio para todo tu parque de equipos." mode="contratos"/>}
