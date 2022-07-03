import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import MemoLight from './assets/icons/Light'
import MemoDark from './assets/icons/Dark'

const ThemeMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <button
      onClick={handleClick}
      className="hover:rotate-180 transition-fill duration-500 active:-rotate-90 ">
      {theme === 'light' ? (
        <MemoLight className="w-10 " />
      ) : (
        <MemoDark className="w-10" />
      )}
    </button>
  )
}
export default ThemeMode
