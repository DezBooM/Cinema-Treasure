import tmdb from "../assets/tmdb.svg"

function Footer() {
  return (
    <div className="bg-emerald-500 py-2 flex justify-center dark:bg-neutral-800 bottom-0">
      <a
        href="https://www.themoviedb.org/"
        className="bg-emerald-900 dark:bg-neutral-900 p-2 rounded-lg flex justify-center"
      >
        <span className="font-bold">Powered by:</span>
        <img
          src={tmdb}
          alt="The Movie DataBase Logo"
          className="ml-2 w-44 sm:w-80"
        />
      </a>
    </div>
  )
}

export default Footer
