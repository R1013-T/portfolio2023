import Profile from '@/app/components/main/items/about/profile'
import type { GridItem } from '@/app/lib/definitions'

export const PCAboutItems: GridItem[] = [
  {
    col: 2,
    row: 1,
    children: <Profile />,
    animation: 'showTopBottom',
  },
  {
    col: 1,
    row: 1,
    children: <p>GitHub</p>,
    animation: 'showBottomTop',
  },
  {
    col: 1,
    row: 2,
    children: <p>画像</p>,
    animation: 'showRightLeft',
  },
  {
    col: 1,
    row: 2,
    children: <p>スロット</p>,
    animation: 'showLeftRight',
  },
  {
    col: 2,
    row: 1,
    children: <p>スキル</p>,
    animation: 'showBottomTop',
  },
  {
    col: 1,
    row: 1,
    children: <p>X</p>,
    animation: 'showBottomTop',
  },
  {
    col: 1,
    row: 1,
    children: <p>東京</p>,
    animation: 'showLeftRight',
  },
  {
    col: 1,
    row: 1,
    children: <p>メール</p>,
    animation: 'showRightLeft',
  },
]
