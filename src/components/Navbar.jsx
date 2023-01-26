import { Link } from "react-router-dom"

function Navbar({ dark, handleTheme }) {
  return (
    <div className="flex sticky top-0 items-center justify-between px-1 sm:px-5 bg-emerald-500 h-12 sm:h-16 dark:bg-neutral-800">
      <Link to="/">
        <h1 className="font-aboreto text-base sm:text-3xl tracking-tighter px-3 py-1 rounded-lg bg-emerald-900 dark:bg-neutral-900">
          CINEMA TREASURE
        </h1>
      </Link>
      <input
        className="lg:-translate-x-20 bg-emerald-900 dark:bg-neutral-900 placeholder:text-emerald-100 placeholder:opacity-50 outline-none border-none rounded-full py-1 w-1/2 sm:w-1/3 px-5"
        type="text"
        placeholder="Search"
      />
      <button
        type="button"
        className="p-2 rounded-full bg-emerald-900 dark:bg-neutral-900 text-center"
        onClick={handleTheme}
      >
        {!dark ? "☀️" : "🌑"}
      </button>
    </div>
  )
}

export default Navbar
