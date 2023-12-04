import type { Metadata } from 'next'

import GridItem from '../_components/main/grid-item'
import { DesktopWorksItems, MobileWorksItems } from '../_utils/gird-items/works'

export const metadata: Metadata = {
  title: '作ったものたち',
}

export default function Page() {
  return (
    <article className="h-screen lg:h-full p-4 pt-3 mx-auto max-w-6xl overflow-y-scroll lg:overflow-y-hidden">
      <div className="h-full w-full hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        {DesktopWorksItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
      <div className="h-auto w-full max-w-3xl mx-auto grid lg:hidden grid-cols-2 gap-4 pb-52">
        {MobileWorksItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
    </article>
  )
}
