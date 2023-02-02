import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"
import { genres } from "../utils/utils"

function Home() {
  const [movies, setMovies] = useState([])
  const [pagePopular, setPagePopular] = useState(1)

  const getPopular = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }${pagePopular === 1 ? `` : `&page=${pagePopular}`}`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    movies.length
      ? setMovies(movies.concat(data.results))
      : setMovies(data.results)
  }

  useEffect(() => {
    getPopular().catch((e) => console.log(e))
  }, [pagePopular])

  return (
    movies.length > 0 && (
      <div className="bg-emerald-100 dark:bg-neutral-900">
        <MostPopular {...movies[0]} />
        <div className="flex overflow-x-scroll lg:w-auto lg:overflow-auto lg:flex-wrap lg:justify-center mx-2 lg:mx-32 mt-2">
          {genres.map((genre) => (
            <Link
              className="bg-emerald-900 dark:bg-yellow-500 hover:bg-emerald-800 dark:hover:bg-yellow-700 mx-2 my-1 flex items-center px-3 lg:py-2 rounded-md lg:rounded-full text-emerald-100 dark:text-neutral-900 text-sm sm:text-xl"
              key={genre.id}
              to={`/popular/${genre.id}/${genre.name.toLowerCase()}`}
            >
              {genre.name}
            </Link>
          ))}
        </div>
        <h1 className="font-bold text-4xl text-center mt-5 text-neutral-900 dark:text-yellow-400">
          Popular Movies
        </h1>
        <div className="text-neutral-900 dark:text-yellow-400 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mx-10 gap-10 mt-10">
          {movies?.map((movie) => (
            <Single key={movie.id} {...movie} />
          ))}
        </div>
        <div className="flex justify-center py-5">
          <button
            className="px-4 py-1 font-bold sm:text-3xl rounded-full bg-emerald-900 dark:bg-neutral-800"
            onClick={() => setPagePopular(pagePopular + 1)}
          >
            LOAD MORE...
          </button>
        </div>
      </div>
    )
  )
}

export default Home
