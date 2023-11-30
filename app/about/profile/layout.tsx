import DetailLayout from '@/app/_components/main/detail/layout'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DetailLayout>{children}</DetailLayout>
}
