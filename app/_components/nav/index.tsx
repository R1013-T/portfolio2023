import React from 'react'

import NavItems from './nav-items'

export default function Nav() {
  return (
    <nav className="fixed z-50 bottom-5 lg:top-2 lg:bottom-auto right-1/2 translate-x-1/2 p-0.5 border border-white-1 lg:bg-transparent rounded-full text-white flex gap-2 bg-white-3/80 backdrop-blur">
      <NavItems />
    </nav>
  )
}
