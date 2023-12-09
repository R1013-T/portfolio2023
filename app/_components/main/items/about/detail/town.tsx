import Image from 'next/image'

import AboutDetailLayout from './detail-layout'

export default function Town() {
  return (
    <AboutDetailLayout id="town" name="生息地">
      <p className="mb-2">
        現在は東京都に住んでいます。
        <br />
        出身は群馬県で、進学に合わせて上京しました。
      </p>
      <Image
        src="/images/tokyo.png"
        alt="東京の地図の画像"
        width={200}
        height={200}
        className="rounded-xl"
      />
    </AboutDetailLayout>
  )
}
