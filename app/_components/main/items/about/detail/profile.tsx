import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

import AboutDetailLayout from './detail-layout'

export default function Profile() {
  return (
    <AboutDetailLayout id="profile">
      <div className="flex justify-center flex-wrap">
        <Image
          src="/images/icon.png"
          className="rounded-full"
          height={150}
          width={150}
          alt="プロフィール画像"
        />
        <div className="w-full text-center mt-3 mb-1">
          <h2 className="text-2xl font-bold tracking-wider mb-2 text-white-1">
            RYU
          </h2>
          <div className=" font-semibold text-white-2 tracking-wide mb-2">
            <p className="mb-1">
              モノづくりが好きな学生エンジニアです。主にWeb関係の技術について勉強しています。
            </p>
            <p>
              また、技術だけでなく、コミュニケーション能力等、人間的な能力も高めて行きたいと考えています。
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/rtjob2023"
            target="_brank"
            className="opacity-90 hover:opacity-100 transition-colors"
          >
            <Image
              src="/images/logo/x.svg"
              alt="Xのロゴ"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/R1013-T"
            target="_brank"
            className="opacity-90 hover:opacity-100 transition-colors"
          >
            <Image
              src="/images/logo/github.svg"
              alt="GitHubのロゴ"
              width={40}
              height={40}
            />
          </a>
          <a
            href="mailto:takahashi.ryunosuke.job@gmail.com"
            className="opacity-90 hover:opacity-100 transition-colors"
          >
            <EnvelopeIcon className="h-12 w-12" />
          </a>
        </div>
      </div>
    </AboutDetailLayout>
  )
}
