import Image from 'next/image'

import ItemLayout from '../item-layout'

export default function HomeTown() {
  return (
    <ItemLayout link="/about#town">
      <Image
        src="/images/tokyo.png"
        alt="東京の地図の画像"
        layout="fill"
        objectFit="contain"
        className="scale-150"
      />
    </ItemLayout>
  )
}
