import Image from 'next/image'
import React from 'react'

export default function Sizu() {
  return (
    <a href="https://sizu.me/ryu_1013" target="_brank">
      <div className="h-full w-full flex items-center justify-center bg-[#F1F6F9] opacity-90 hover:opacity-100 transition-opacity rounded-md">
        <Image
          src="/images/logo/sizu.svg"
          alt="Sizuのロゴ"
          width={100}
          height={100}
        />
      </div>
    </a>
  )
}
