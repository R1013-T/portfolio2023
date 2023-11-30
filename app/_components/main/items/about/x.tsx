import Image from 'next/image'
import React from 'react'

export default function X() {
  return (
    <a href="https://twitter.com/rtjob2023" target="_brank">
      <div className="h-full w-full flex items-center justify-center bg-[#02040A] opacity-90 hover:opacity-100 transition-opacity rounded-md">
        <Image
          src="/images/logo/x.svg"
          alt="GitHubのロゴ"
          width={100}
          height={100}
        />
      </div>
    </a>
  )
}
