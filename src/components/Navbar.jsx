import { Link } from "react-router-dom"
import Category from "./Category"
import Search from "./Search"

function Navbar({ dark, handleTheme }) {
  return (
    <div>
      <div className="flex items-center justify-between px-1 sm:px-5 lg:px-10 bg-emerald-500 h-12 lg:h-16 dark:bg-neutral-800">
        <Link to="/" className="outline-none">
          <h1 className="font-aboreto text-sm sm:text-3xl tracking-tighter w-24 h-10 sm:w-full sm:h-full px-2 sm:px3 sm:py-1 lg:mt-9 rounded-lg bg-emerald-900 dark:bg-neutral-900">
            CINEMA TREASURE
          </h1>
        </Link>
        <Search />
        <button
          type="button"
          className="p-2 lg:mt-9 rounded-full outline-none bg-emerald-900 dark:bg-neutral-900 text-center"
          onClick={handleTheme}
        >
          {!dark ? "☀️" : "🌑"}
        </button>
      </div>
      <div className="bg-emerald-500 dark:bg-neutral-800 flex justify-center">
        <Category />
      </div>
    </div>
  )
}

export default Navbar
