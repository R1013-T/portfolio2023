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
  const square = col === 1 && row === 1
  const vertical = col === 1 && row === 2
  const horizontal = col === 2 && row === 1

  return (
    <div
      className={`col-span-${col} row-span-${row} bg-white-1/60 rounded-xl min-h-1 lg:min-h-0 overflow-hidden opacity-0 cursor-pointer transition-colors hover:bg-white-1/70
      ${animation} ${disabled && 'pointer-events-none'}
      ${square && 'h-52 lg:h-auto'}`}
    >
      {children}
    </div>
  )
}
