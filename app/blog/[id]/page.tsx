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

  return (
    <article className="h-full overflow-y-auto p-2 mt-12 lg:mt-0 max-w-3xl mx-auto">
      <BackButton href="/blog" />
      <main className="px-3 pb-20 lg:pb-">
        <div className="flex justify-between mt-3 mb-1 text-white-1">
          <h2 className=" text-3xl font-bold mb-4">{blog.title}</h2>
          <p>{blog.createdAt.split('T')[0]}</p>
        </div>
        <div className="font-semibold blog-content text-white-2">
          {parse(blog.content)}
        </div>
      </main>
    </article>
  )
}
