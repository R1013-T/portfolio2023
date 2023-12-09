export default function AboutDetailLayout({
  children,
  id,
  name,
}: {
  children: React.ReactNode
  id: string
  name?: string
}) {
  return (
    <section id={id} className="p-2">
      {name && (
        <div className="flex items-center mb-2">
          <h2 className="text-2xl font-bold whitespace-nowrap pr-3">{name}</h2>
          <div className="border-b-2 border-white-2 w-full"></div>
        </div>
      )}
      <div className="p-1">{children}</div>
    </section>
  )
}
