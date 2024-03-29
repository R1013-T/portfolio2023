import GridItem from './_components/main/grid-item'
import { DesktopAboutItems, MobileAboutItems } from './_utils/gird-items/about'

export default function Home() {
  return (
    <article className="h-screen lg:h-full p-4 pt-3 mx-auto max-w-6xl overflow-y-scroll overflow-x-hidden lg:overflow-y-hidden">
      <div className="h-full w-full hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        {DesktopAboutItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
      <div className="h-auto w-full max-w-3xl mx-auto grid lg:hidden grid-cols-2 gap-4 pb-52">
        <div className="h-10 lg:h-0 col-span-2"></div>
        <h2 className="text-xl mb-1 tracking-wider col-span-2 font-bold lg:hidden">
          私について
        </h2>
        {MobileAboutItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
    </article>
  )
}
