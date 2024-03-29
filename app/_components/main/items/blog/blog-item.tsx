import parse from 'html-react-parser'
import Link from 'next/link'

import type { BlogItem } from '@/app/_lib/definitions'

export default function Item({ item }: { item: BlogItem }) {
  return (
    <Link
      href={`/blog/${item.id}`}
      className="bg-white-1/60 block rounded-xl p-3 h-72 text-black-2 transition-colors hover:bg-white-1/70"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="">
          <h4 className="text-xl font-bold text-black-1 pb-1">{item.title}</h4>
          <p className="text-xs mb-2">{item.createdAt.split('T')[0]}</p>
          <div className="line-clamp-5 max-h-32">{parse(item.content)}</div>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {item.categories.map((category, i) => (
            <p
              key={i}
              className="bg-white-4 rounded px-2 py-1 text-sm font-semibold"
            >
              {category}
            </p>
          ))}
        </div>
      </div>
    </Link>
  )
}
