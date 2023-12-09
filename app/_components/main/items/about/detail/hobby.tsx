import Image from 'next/image'

import AboutDetailLayout from './detail-layout'

export default function Hobby() {
  return (
    <AboutDetailLayout id="hobby" name="趣味">
      <p className="mb-2">
        チョコレートが大好きです！作るのも、食べるのも！
        <br />
        高校生の頃は３年間お菓子屋さんでアルバイトしていました。
      </p>
      <div className="flex flex-wrap gap-4">
        <Image
          src="/images/hobby/hobby01.png"
          alt="チョコレートの画像"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Image
          src="/images/hobby/hobby02.png"
          alt="チョコレートの画像"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Image
          src="/images/hobby/hobby03.png"
          alt="チョコレートの画像"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Image
          src="/images/hobby/hobby04.png"
          alt="チョコレートの画像"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <Image
          src="/images/hobby/hobby05.png"
          alt="チョコレートの画像"
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
    </AboutDetailLayout>
  )
}
