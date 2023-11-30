import type { Metadata } from 'next'

import GridItem from '../_components/main/grid-item'
import { PCWorksItems } from '../_utils/gird-items/works'

export const metadata: Metadata = {
  title: '作ったものたち',
}

export default function Page() {
  return (
    <article className="h-full p-4 pt-3 mx-auto max-w-6xl overflow-hidden">
      <div className="h-full w-full hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        {PCWorksItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
    </article>
  )
}
