import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ブログ',
}

export default function Page() {
  return (
    <article className="border border-green-400 h-full p-4 mx-auto max-w-6xl overflow-hidden">
      <div className="h-auto w-full border border-blue-500 hidden lg:grid grid-cols-4 gap-4">
        <div className="border border-white bg-white/40 rounded-md opacity-0 showBottomTop h-52"></div>
        <div className="border border-white bg-white/40 rounded-md opacity-0 showBottomTop h-52"></div>
        <div className="border border-white bg-white/40 rounded-md opacity-0 showBottomTop h-52"></div>
        <div className="border border-white bg-white/40 rounded-md opacity-0 showBottomTop h-52"></div>
        <div className="border border-white bg-white/40 rounded-md opacity-0 showBottomTop h-52"></div>
      </div>
    </article>
  )
}
