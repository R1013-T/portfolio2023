import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="fixed bottom-5 lg:top-3 lg:bottom-auto right-1/2 translate-x-1/2 text-white flex gap-2">
      <Link href="/" className="flex gap-1 p-1">
        <UserIcon className="h-8 w-8 lg:h-6 lg:w-6" />
        <p className="hidden lg:block">私について</p>
      </Link>
      <Link href="/works" className="flex gap-1 p-1">
        <ArchiveBoxIcon className="h-8 w-8 lg:h-6 lg:w-6" />
        <p className="hidden lg:block">作ったものたち</p>
      </Link>
      <Link href="/blog" className="flex gap-1 p-1">
        <DocumentTextIcon className="h-8 w-8 lg:h-6 lg:w-6" />
        <p className="hidden lg:block">ブログ</p>
      </Link>
    </div>
  )
}
