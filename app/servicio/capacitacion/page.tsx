import type {Metadata} from 'next';import {ServiceDetail} from '@/components/PrototypePages';
export const metadata:Metadata={title:'Capacitación | SOLINSA',description:'Capacitación en operación, mantenimiento de usuario y transferencia de métodos para tu personal.'};
export default function Page(){return <ServiceDetail title="Capacitación para que tu equipo opere con autonomía." mode="capacitacion"/>}
