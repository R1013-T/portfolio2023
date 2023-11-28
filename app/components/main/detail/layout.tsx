export default function DetailLayout({
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
