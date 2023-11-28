import DetailLayout from '@/app/components/main/detail/layout'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DetailLayout>{children}</DetailLayout>
}
