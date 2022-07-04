import { useState, useEffect } from 'react'
import Link from 'next/link'
import MemoLogo from './assets/Logo'
import MemoMenuBar from './assets/icons/MenuBar'
import ThemeMode from './ThemeMode'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const [bg, setBg] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setBg(true) : setBg(false)
    })
  })

  const menus = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },

    {
      name: 'portfolio',
      href: '/portfolio',
    },

    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <nav
      className={`${
        bg &&
        ' bg-background-light dark:bg-background-dark  shadow-md dark:shadow-sm dark:shadow-[#E900FF]'
      } top-0 sticky py-4 z-30 transition duration-500`}>
      <div className="flex justify-between max-w-[1200px] mx-auto items-center px-6">
        {/* logo */}
        <div>
          <Link href="/">
            <a className="dark:fill-slate-100">
              <MemoLogo className="h-[40px] active:fill-accent " />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-6 ">
          <div className="cursor-pointer active:fill-accent">
            {/* menu bar */}
            <MemoMenuBar className="w-8" onClick={handleClick} />
            {/* menu */}
            <ul
              className={`${
                isOpen ? 'right-0' : '-right-1/3'
              } bezier fixed bg-background-light dark:bg-background-dark   h-screen z-10 top-16 sm:w-1/6 w-1/3  flex flex-col justify-center items-center border-l-[1px] border-slate-200 dark:border-accent mt-2`}>
              {menus.map((menu) => {
                return (
                  <li
                    key={menu.name}
                    className=" py-5 text-base lg:text-xl active:text-accent  italic">
                    <Link href={menu.href}>
                      <a className="active:text-accent">{menu.name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex items-start justify-center active:fill-accent">
            <ThemeMode />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
