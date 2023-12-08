import React from 'react'

import Logo from './logo'
import Mail from './mail'

export default function Header() {
  return (
    <div className="h-hull fixed z-20 top-0 left-0 w-full flex justify-between items-center p-1.5 lg:p-3">
      <Logo />
      <Mail />
    </div>
  )
}
