import type { WorkItem } from './definitions'

export async function fetchWorks(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APi_ENDPOINT}works/${id}`,
      {
        cache: 'force-cache',
        headers: {
          'X-MICROCMS-API-KEY': process.env.API_KEY || '',
        },
      },
    )

    const data: WorkItem = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}
