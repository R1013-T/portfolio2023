import Link from 'next/link'

export default function ItemLayout({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Link href={link} className="h-full w-full bg-red-300 rounded-md block">
      {children}
    </Link>
  )
}
