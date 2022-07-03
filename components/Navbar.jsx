import { useState, useEffect } from 'react'
import MemoLogo from './assets/Logo'
import MemoMenuBar from './assets/icons/MenuBar'
import ThemeMode from './ThemeMode'
const Navbar = () => {
  const [bg, setBg] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setBg(true) : setBg(false)
    })
  })

  return (
    <nav
      className={`${
        bg && ' bg-bg-light shadow-md dark:shadow-sm dark:shadow-brand-light'
      } top-0 sticky py-5 z-10 transition duration-500`}>
      <div className="flex justify-between max-w-[1200px] mx-auto items-center px-6">
        {/* logo */}
        <div>
          <MemoLogo className="h-[40px]" />
        </div>
        <div className="flex items-center justify-center space-x-6 ">
          <div>
            {/* menu bar */}
            <MemoMenuBar className="w-8" />
          </div>
          <div className="flex items-start justify-center">
            <ThemeMode />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
