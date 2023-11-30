export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4">
      <p>back</p>
      {children}
    </div>
  )
}
