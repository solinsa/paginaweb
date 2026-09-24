import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {ApplicationDetail} from '@/components/ApplicationDetail'
import {applications,getApplication} from '@/lib/applications'

export function generateStaticParams(){return Object.keys(applications).map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params
  const data=getApplication(slug)
  return data ? {title:`${data.title} | SOLINSA`,description:data.lead} : {}
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params
  const data=getApplication(slug)
  if(!data) notFound()
  return <ApplicationDetail data={data}/>
}
