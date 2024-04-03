import GitHub from '@/app/_components/main/items/about/github'
import WorksGridItem from '@/app/_components/main/items/works/grid-item'
import type { GridItem } from '@/app/_lib/definitions'

export const DesktopWorksItems: GridItem[] = [
  {
    col: 2,
    row: 1,
    children: <WorksGridItem id="p190dz3slht" />,
    animation: 'showTopBottom',
  },
  {
    col: 1,
    row: 1,
    children: <WorksGridItem id="izd1rri3my9" />,
    animation: 'showTopBottom',
  },
  {
    col: 1,
    row: 2,
    children: <WorksGridItem id="puszn28etxi" />,
    animation: 'showRightLeft',
  },
  {
    col: 1,
    row: 2,
    children: <WorksGridItem id="s9i98f4xmb" />,
    animation: 'showLeftRight',
  },
  {
    col: 2,
    row: 1,
    children: <WorksGridItem id="w4tjcaken-8" />,
    animation: 'showTopBottom',
  },
  {
    col: 1,
    row: 1,
    children: <p></p>,
    disabled: true,
  },
  {
    col: 1,
    row: 1,
    children: <p></p>,
    disabled: true,
  },
]

export const MobileWorksItems: GridItem[] = [
  {
    col: 2,
    row: 1,
    children: <WorksGridItem id="p190dz3slht" />,
    animation: 'showTopBottom',
  },
  {
    col: 1,
    row: 1,
    children: <WorksGridItem id="izd1rri3my9" />,
    animation: 'showTopBottom',
  },
  {
    col: 1,
    row: 1,
    children: <WorksGridItem id="puszn28etxi" />,
    animation: 'showRightLeft',
  },
  {
    col: 2,
    row: 1,
    children: <WorksGridItem id="w4tjcaken-8" />,
    animation: 'showTopBottom',
  },
  {
    col: 2,
    row: 1,
    children: <WorksGridItem id="s9i98f4xmb" />,
    animation: 'showLeftRight',
  },
  {
    col: 1,
    row: 1,
    children: <p></p>,
    disabled: true,
  },
]
