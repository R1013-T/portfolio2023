import React from 'react'

import Logo from './logo'
import Mail from './mail'

export default function Header() {
  return (
    <div className="h-hull flex justify-between items-center p-3">
      <Logo />
      <Mail />
    </div>
  )
}
