export default function DoubleBorder({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full w-full relative">
      <div className="absolute h-full w-full top-0 left-0 bg-white-2/50 -z-10 scale-110 rounded-full"></div>
      <div className="absolute h-full w-full top-0 left-0 bg-white-3/30 -z-10 scale-120 rounded-full"></div>
      {children}
    </div>
  )
}
