export type GridItem = {
  id?: string
  col: number
  row: number
  children: React.ReactNode
  animation?: string
  disabled?: boolean
}

export type WorkItem = {
  id: string
  name: string
  description: string
  status: string[]
  url?: string
  github?: string
  image: {
    url: string
    height: number
    width: number
  }
  techs: {
    url: string
    height: number
    width: number
  }[]
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type BlogItem = {
  id: string
  title: string
  content: string
  categories: string[]
  qiita?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
