import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BackButton({ href }: { href: string }) {
  return (
    <Link href={href} className="flex mb-2 gap-1 items-center px-3">
      <ArrowLeftIcon className="w-5 h-5" />
      <p>Back</p>
    </Link>
  )
}
