import GitHub from '@/app/_components/main/items/about/github'
import HomeTown from '@/app/_components/main/items/about/home-town'
import Mail from '@/app/_components/main/items/about/mail'
import MeImage from '@/app/_components/main/items/about/me-image'
import Profile from '@/app/_components/main/items/about/profile'
import Sizu from '@/app/_components/main/items/about/sizu'
import Skill from '@/app/_components/main/items/about/skill'
import Slot from '@/app/_components/main/items/about/slot'
import X from '@/app/_components/main/items/about/x'
import type { GridItem } from '@/app/_lib/definitions'

export const DesktopAboutItems: GridItem[] = [
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
    children: <Slot />,
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
    children: <Sizu />,
    animation: 'showLeftRight',
  },
  {
    col: 1,
    row: 1,
    children: <Mail />,
    animation: 'showRightLeft',
  },
]

export const MobileAboutItems: GridItem[] = [
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
    row: 1,
    children: <X />,
    animation: 'showBottomTop',
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
    children: <Sizu />,
    animation: 'showLeftRight',
  },
  {
    col: 1,
    row: 1,
    children: <Mail />,
    animation: 'showRightLeft',
  },
  {
    col: 2,
    row: 1,
    children: <Slot />,
    animation: 'showLeftRight',
  },
]
