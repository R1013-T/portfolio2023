export default function GridItem({
  col,
  row,
  animation,
  children,
  disabled,
}: {
  col: number
  row: number
  children: React.ReactNode
  animation?: string
  disabled?: boolean
}) {
  return (
    <div
      className={`col-span-${col} row-span-${row} bg-white-1/60 rounded-xl overflow-hidden opacity-0 cursor-pointer transition-colors hover:bg-white-1/70  ${animation} ${
        disabled && 'pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}
