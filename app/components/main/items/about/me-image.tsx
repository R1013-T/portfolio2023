import Image from 'next/image'

import ItemLayout from '../item-layout'

export default function MeImage() {
  return (
    <ItemLayout link="/about/profile">
      <div className="flex justify-center items-center h-full">
        <div className="">
          <div className="bg-white-4 rounded-full overflow-hidden">
            <Image
              src="/images/me.png"
              alt="私のイメージ画像"
              width={200}
              height={200}
            />
          </div>
          <p className="text-black-2 mt-3 text-center">画像はイメージです</p>
        </div>
      </div>
    </ItemLayout>
  )
}
