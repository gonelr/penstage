import MemoLogo from './assets/Logo'
import MemoMenuBar from './assets/icons/MenuBar'
import ThemeMode from './ThemeMode'
const Navbar = () => {
  return (
    <nav className=" py-3">
      <div className="flex justify-between max-w-[1200px] mx-auto items-center px-6">
        {/* logo */}
        <div>
          <MemoLogo className="h-[37px]" />
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
