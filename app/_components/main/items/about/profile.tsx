import Image from 'next/image'
import React from 'react'

import DoubleBorder from '../../common/double-border'
import ItemLayout from '../item-layout'

export default function Profile() {
  return (
    <ItemLayout link="/about#profile">
      <div className="h-full flex justify-center items-center gap-6">
        <div>
          <DoubleBorder>
            <Image
              src="/images/icon.png"
              className="rounded-full"
              alt="プロフィール画像"
              width={150}
              height={150}
            />
          </DoubleBorder>
        </div>
        <div>
          <p className="font-bold text-black-1 text-2xl mb-2 tracking-widest">
            髙橋 龍之介
          </p>
          <p className="text-black-2">
            ものづくりが好きな学生エンジニアです。
            <br />
            東京都に生息しています。
          </p>
        </div>
      </div>
    </ItemLayout>
  )
}
