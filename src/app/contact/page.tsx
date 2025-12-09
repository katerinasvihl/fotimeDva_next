import { getContactPageData } from '@/data/loaders'

import { blockRenderer } from '@/lib/block-renderer'
import { Block } from '@/types'

export default async function Home() {
  const strapiData = await getContactPageData()
  const { blocks } = strapiData?.data || []
  console.dir(strapiData, { depth: null })

  return (
    <main>
      {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
    </main>
  )
}
