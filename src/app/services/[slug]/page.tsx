import { getServicePageData } from '@/data/loaders'
import { blockRenderer } from '@/lib/block-renderer'
import { Block } from '@/types'

export default async function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params

  const strapiData = await getServicePageData(slug)

  if (!strapiData?.data?.[0]) {
    return <div>Service not found</div>
  }

  const { blocks } = strapiData.data[0]
  console.dir(strapiData, { depth: null })

  return (
    <main>
      {blocks?.map((block: Block, index: number) =>
        blockRenderer(block, index),
      )}
    </main>
  )
}
