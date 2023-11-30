import Image from 'next/image'

import DoubleBorder from '../../common/double-border'
import ItemLayout from '../item-layout'

export default function GitHub() {
  return (
    <a href="https://github.com/R1013-T" target="_brank">
      <div className="h-full w-full flex items-center justify-center bg-[#02040A] opacity-90 hover:opacity-100 transition-opacity rounded-md">
        <Image
          src="/images/logo/github.svg"
          alt="GitHubのロゴ"
          width={150}
          height={150}
        />
      </div>
    </a>
  )
}
