'use client'

import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  { name: '私について', href: '/', icon: UserIcon },
  {
    name: '作ったもの',
    href: '/works',
    icon: ArchiveBoxIcon,
  },
  { name: 'ブログ', href: '/blog', icon: DocumentTextIcon },
]

export default function NavItems() {
  const pathname = usePathname()

  return (
    <>
      {links.map(({ name, href, icon: Icon }) => {
        const isActive = pathname === href

        return (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-1 py-3 lg:py-1.5 px-3 rounded-full ${
              isActive ? 'text-black-2 bg-white-1/40' : 'text-white-1'
            }`}
          >
            <Icon className="h-6 w-6" />
            <p className="hidden lg:block p-0.5">{name}</p>
          </Link>
        )
      })}
    </>
  )
}
