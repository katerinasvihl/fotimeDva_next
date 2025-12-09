import { getAboutUsData } from '@/data/loaders'

import { blockRenderer } from '@/lib/block-renderer'
import { Block } from '@/types'

export default async function Home() {
  const strapiData = await getAboutUsData()
  const { blocks } = strapiData?.data || []

  return (
    <main>
      {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
    </main>
  )
}
