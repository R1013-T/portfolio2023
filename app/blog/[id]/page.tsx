import { InformationCircleIcon } from '@heroicons/react/24/solid'
import parse from 'html-react-parser'
import Image from 'next/image'

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
          <div>
            <h2 className=" text-3xl font-bold mb-2">{blog.title}</h2>
            <p>{blog.createdAt.split('T')[0]}</p>
          </div>
          {blog.qiita && (
            <a href={blog.qiita} target="_blank">
              <Image
                src="/images/logo/qiita.png"
                width={35}
                height={35}
                alt="Qiitaのロゴ"
              />
            </a>
          )}
        </div>
        {blog.qiita && (
          <div className="bg-[#57C40F]/60 rounded-md py-4 px-3 text-base my-5 flex items-center gap-2">
            <InformationCircleIcon className="w-7 h-7 text-white-1" />
            <a href={blog.qiita} target='_blank' className='hover:border-b' >Qiitaにも同じ記事を投稿しています！</a>
          </div>
        )}
        <div className="font-semibold blog-content text-white-2 mt-2">
          {parse(blog.content)}
        </div>
      </main>
    </article>
  )
}
