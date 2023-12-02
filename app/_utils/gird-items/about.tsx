import GitHub from '@/app/_components/main/items/about/github'
import HomeTown from '@/app/_components/main/items/about/home-town'
import MeImage from '@/app/_components/main/items/about/me-image'
import Profile from '@/app/_components/main/items/about/profile'
import Skill from '@/app/_components/main/items/about/skill'
import X from '@/app/_components/main/items/about/x'
import type { GridItem } from '@/app/_lib/definitions'

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
    children: <GitHub />,
    animation: 'showBottomTop',
  },
  {
    col: 1,
    row: 2,
    children: <MeImage />,
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
    children: <Skill />,
    animation: 'showBottomTop',
  },
  {
    col: 1,
    row: 1,
    children: <X />,
    animation: 'showBottomTop',
  },
  {
    col: 1,
    row: 1,
    children: <HomeTown />,
    animation: 'showLeftRight',
  },
  {
    col: 1,
    row: 1,
    children: <p>メール</p>,
    animation: 'showRightLeft',
  },
]
