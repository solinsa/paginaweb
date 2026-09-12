import type {Metadata} from 'next'; import {Resources} from '@/components/PrototypePages';
export const metadata:Metadata={title:'Recursos gratuitos para laboratorio | SOLINSA',description:'Checklists, bitácoras, guías de método, videos y presentaciones técnicas para laboratorios.'}; export default function Page(){return <Resources/>}
