import parse from 'html-react-parser'

import BackButton from '@/app/_components/main/common/back-button'
import type { BlogItem } from '@/app/_lib/definitions'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id

  const res = await fetch(`${process.env.NEXT_PUBLIC_APi_ENDPOINT}blog/${id}`, {
    cache: 'force-cache',
    headers: {
      'X-MICROCMS-API-KEY': process.env.API_KEY || '',
    },
  })
  const blog: BlogItem = await res.json()

  console.log(blog)

  return (
    <article className="h-full overflow-y-auto p-2 mt-2 lg:mt-0">
      <BackButton href="/blog" />
      <main className="px-3 pb-20 lg:pb-3 text-black-2">
        <div className="flex justify-between mt-3 mb-1">
          <h2 className="text-black-1 text-2xl font-bold">{blog.title}</h2>
          <p>{blog.createdAt.split('T')[0]}</p>
        </div>
        <div className="font-semibold">{parse(blog.content)}</div>
      </main>
    </article>
  )
}
