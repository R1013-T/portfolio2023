import Image from 'next/image'
import React from 'react'

import DoubleBorder from '../../common/double-border'
import ItemLayout from '../item-layout'

export default function Profile() {
  return (
    <ItemLayout link="/about">
      <div className="h-full flex justify-center items-center gap-6">
        <div>
          <DoubleBorder>
            <Image
              src="/images/icon.png"
              className="rounded-full scale-75 lg:scale-100"
              alt="プロフィール画像"
              width={150}
              height={150}
            />
          </DoubleBorder>
        </div>
        <div>
          <h2 className="font-bold text-black-1 text-xl lg:text-2xl mb-2 tracking-wider">
            RYU
          </h2>
          <h3 className="text-black-2 text-sm lg:text-base">
            ものづくりが好きな学生エンジニアです。
            <br />
            東京都に生息しています。
          </h3>
        </div>
      </div>
    </ItemLayout>
  )
}
