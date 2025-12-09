import { getGalleryData } from '@/data/loaders'

import { blockRenderer } from '@/lib/block-renderer'
import { Block } from '@/types'

export default async function Home() {
  const strapiData = await getGalleryData()
  // console.log('getGalleryData', getGalleryData())
  // console.dir(strapiData, { depth: null })
  const { blocks } = strapiData?.data || []

  return (
    <main>
      {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
    </main>
  )
}
