import React, { useState } from 'react'
import clsx from 'clsx'

const linkNav = ['home', 'skills', 'contact']
const Navbar = () => {
  const [active, setActive] = useState<string | null>(null)
  const changeTab = (tab: string) => {
    setActive(tab)
  }
  return (
    <header className="fixed left-[50%] top-0 box-border flex h-14 w-[1300px] max-w-full translate-x-[-50%] transform items-center justify-between px-0 py-5 backdrop-blur">
      <div className="logo">
        {/* <img src="/vite.svg" alt="logo" /> Portfolio */}
      </div>
      <nav className="flex items-center gap-8">
        {linkNav.map((value) => (
          <span
            key={value}
            className={clsx('cursor-pointer', {
              'text-cyan-700 shadow-white drop-shadow-xl': active === value,
            })}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
      {/* <div className="w-8 hidden" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div> */}
    </header>
  )
}

export default Navbar
