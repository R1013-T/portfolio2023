import { fetchWorks } from '@/app/_lib/data'

export default async function WorksGridItem({ id }: { id: string }) {
  const item = await fetchWorks(id)

  if (!item) return null

  return (
    <div>
      <p>{item.name}</p>
    </div>
  )
}
