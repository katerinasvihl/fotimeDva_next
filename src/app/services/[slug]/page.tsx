import { getServicePageData } from '@/data/loaders'
import { blockRenderer } from '@/lib/block-renderer'
import { Block } from '@/types'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const strapiData = await getServicePageData(slug)

  if (!strapiData?.data?.[0]) {
    return <div>Služba nenalezena.</div>
  }

  const { blocks } = strapiData.data[0]

  return (
    <main>
      {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
    </main>
  )
}
