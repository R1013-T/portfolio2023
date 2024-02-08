import Image from 'next/image'

import AboutDetailLayout from './detail-layout'

export default function Skill() {
  return (
    <AboutDetailLayout id="skill" name="好きな技術">
      <h3 className="text-lg font-semibold">フロントエンド</h3>
      <p className="text-sm mb-1">
        Next.jsが大好きです！最近はTailwindCSS＋shadcn/uiを使用することが多いです。
      </p>
      <div className="flex gap-4 w-full flex-wrap py-2 mb-5">
        <Image
          src="/images/tech/ts.png"
          alt="TypeScriptのロゴ"
          width={90}
          height={70}
        />
        <Image
          src="/images/tech/react.svg"
          alt="Reactのロゴ"
          width={80}
          height={80}
        />
        <Image
          src="/images/tech/nextjs.png"
          alt="Next.jsのロゴ"
          width={90}
          height={80}
        />
        <Image
          src="/images/tech/tailwindcss.svg"
          alt="TailwindCSSのロゴ"
          width={80}
          height={80}
        />
        <Image
          src="/images/tech/apollo.svg"
          alt="TailwindCSSのロゴ"
          width={80}
          height={80}
        />
        <Image
          src="/images/tech/nextauth.png"
          alt="Auth.jsのロゴ"
          width={80}
          height={80}
        />
      </div>
      <h3 className="text-lg font-semibold">バックエンド</h3>
      <p className="text-sm mb-1">
        GolangとPythonに注目しています。BaaSも必要に応じて使用しています。
      </p>
      <div className="flex gap-4 w-full flex-wrap py-2 mb-5">
        <Image
          src="/images/tech/go.png"
          alt="Golangのロゴ"
          width={110}
          height={110}
        />
        <Image
          src="/images/tech/python.png"
          alt="Pythonのロゴ"
          width={70}
          height={70}
          className="mt-2"
        />
        <Image
          src="/images/tech/rails.svg"
          alt="Pythonのロゴ"
          width={100}
          height={100}
        />
        <Image
          src="/images/tech/firebase.png"
          alt="FireBaseのロゴ"
          width={90}
          height={90}
        />
        <Image
          src="/images/tech/supabase.png"
          alt="SupaBaseのロゴ"
          width={60}
          height={60}
          className="my-2"
        />
      </div>
      <h3 className="text-lg font-semibold">その他</h3>
      <p className="text-sm mb-1">
        クラウドやAI、Web3.0についても興味があります。tRPCに注目しています。
      </p>
      <div className="flex gap-4 w-full flex-wrap py-2 mb-5">
        <Image
          src="/images/tech/azure.svg"
          alt="Azureのロゴ"
          width={80}
          height={80}
        />
        <Image
          src="/images/tech/aws.svg"
          alt="AWSのロゴ"
          width={80}
          height={80}
        />
        <Image
          src="/images/tech/vercel.png"
          alt="Vercelのロゴ"
          width={90}
          height={80}
        />
        <Image
          src="/images/tech/openai.png"
          alt="OpenAIのロゴ"
          width={80}
          height={80}
        />
        <Image
          src="/images/tech/trpc.svg"
          alt="tRPCのロゴ"
          width={80}
          height={80}
        />
      </div>
    </AboutDetailLayout>
  )
}
