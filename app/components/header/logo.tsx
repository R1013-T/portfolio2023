import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0.5 lg:gap-2">
      <Image
        src="/images/icon.png"
        className="rounded-full scale-75 lg:scale-100"
        height={40}
        width={40}
        alt="プロフィール画像"
      />
      <p className="tracking-wider font-bold text-base lg:text-xl">RYU</p>
    </Link>
  )
}
