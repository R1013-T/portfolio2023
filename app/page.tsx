import GridItem from './components/main/grid-item'
import { PCAboutItems } from './utils/gird-items/about'

export default function Home() {
  return (
    <article className="h-full p-4 pt-3 mx-auto max-w-6xl overflow-hidden">
      <div className="h-full w-full hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        {PCAboutItems.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
    </article>
  )
}
