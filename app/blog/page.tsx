import type { Metadata } from 'next'

import Item from '../_components/main/items/blog/blog-item'
import { fetchBlogs } from '../_lib/data'
import type { BlogItem } from '../_lib/definitions'

export const metadata: Metadata = {
  title: 'ブログ',
}

export default async function Page() {
  const blogs: BlogItem[] = await fetchBlogs()

  return (
    <article className="h-screen p-4 pt-3 pb-52 mx-auto max-w-6xl overflow-y-auto overflow-x-hidden">
      <div className="h-12 lg:h-0"></div>
      <h2 className="text-xl mb-1 tracking-wider font-bold">RYUのブログへようこそ👋</h2>
      <h3 className="text-sm mb-4 text-white-2">
        日々の日記やメモがてら、気ままに書いていきます。また、LT会で使用した資料もこちらにまとめています。
      </h3>
      {blogs.length === 0 ? (
        <div className="h-full flex justify-center items-center">
          <p className="text-lg mb-4">まだなにも書いてません 😓</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-4">
          {blogs.map((item, i) => (
            <div key={i}>
              <Item item={item} />
            </div>
          ))}
        </div>
      )}
      <div className="h-auto w-full max-w-3xl mx-auto grid lg:hidden grid-cols-2 gap-4 pb-52"></div>
    </article>
  )
}
