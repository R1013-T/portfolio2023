import Image from 'next/image'

import ItemLayout from '../item-layout'

export default function GitHub() {
  return (
    <ItemLayout link="https://github.com/R1013-T">
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/logo/github.svg"
          alt="GitHubのロゴ"
          width={150}
          height={150}
        />
      </div>
    </ItemLayout>
  )
}
