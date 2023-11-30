import React from 'react'

import NavItems from './nav-items'

export default function Nav() {
  return (
    <div className="fixed bottom-5 lg:top-2 lg:bottom-auto right-1/2 translate-x-1/2 p-0.5 border border-white-1 rounded-full text-white flex gap-2">
      <NavItems />
    </div>
  )
}
