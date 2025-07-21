
import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'


export default async function ServiceDetailPage({ params }) {

  const { slug } = await params



  return <ServiceDetailsPage slug={slug} />
}