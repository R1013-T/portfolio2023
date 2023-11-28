import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center gap-0.5 lg:gap-2">
      <Image
        src="/images/icon.png"
        className="rounded-full scale-75 lg:scale-100"
        height={40}
        width={40}
        alt="プロフィール画像"
      />
      <p className="tracking-wider font-bold text-base lg:text-xl">RYU</p>
    </div>
  )
}
