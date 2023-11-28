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
      className={`col-span-${col} row-span-${row} bg-white/50 rounded-md opacity-0 cursor-pointer ${animation} ${
        disabled && 'pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}
