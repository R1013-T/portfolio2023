import Image from 'next/image'

import DoubleBorder from '../../common/double-border'
import ItemLayout from '../item-layout'

export default function MeImage() {
  return (
    <ItemLayout link="/about#profile">
      <div className="flex justify-center items-center h-full">
        <div className="">
          <div className="bg-white-4 rounded-full">
            <DoubleBorder>
              <div className="h-full w-full rounded-full overflow-hidden">
                <Image
                  src="/images/me.png"
                  alt="私のイメージ画像"
                  width={200}
                  height={200}
                />
              </div>
            </DoubleBorder>
          </div>
          <p className="absolute bottom-5 lg:bottom-2.5 left-0 w-full text-black-2 text-center">
            <span className="text-xs lg:text-sm mr-0.5">&#8251;</span>
            画像はイメージです。
          </p>
        </div>
      </div>
    </ItemLayout>
  )
}
