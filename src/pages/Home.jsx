import { useEffect, useState } from "react"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"

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
        <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
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
