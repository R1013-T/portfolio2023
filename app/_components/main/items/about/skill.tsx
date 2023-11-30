import Image from 'next/image'
import React from 'react'

import DoubleBorder from '../../common/double-border'
import ItemLayout from '../item-layout'

export default function Skill() {
  return (
    <ItemLayout link="/about#skill">
      <div className="h-full w-full flex justify-center content-center flex-wrap">
        <div className="flex justify-center items-center w-full gap-2">
          <Image
            src="/images/tech/nextjs.png"
            alt="Next.jsのロゴ"
            width={80}
            height={80}
          />
          <Image
            src="/images/tech/go.png"
            alt="Golangのロゴ"
            width={130}
            height={130}
            className="mr-1.5"
          />
          <Image
            src="/images/tech/python.png"
            alt="Pythonのロゴ"
            width={70}
            height={70}
            className="mt-3"
          />
        </div>
        <div className="text-black-2 w-full p-3">
          <p className="text-center">
            Next.jsが大好きです!
            <br />
            フロントエンド・バックエンド両方勉強しています。
            <br />
            AIやWeb3.0についても興味があります!
          </p>
        </div>
      </div>
    </ItemLayout>
  )
}
