import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"
import { genres } from "../utils/utils"

function Genre() {
  const [genreMovie, setGenreMovie] = useState([])
  const [pageGenre, setPageGenre] = useState(1)
  const params = useParams()

  const getTopRated = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }${
        pageGenre === 1 ? `` : `&page=${pageGenre}`
      }&sort_by=popularity.desc&with_genres=${params.genre}`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    genreMovie.length
      ? setGenreMovie(genreMovie.concat(data.results))
      : setGenreMovie(data.results)
  }
const genreName = genres.filter((genre) => genre.id === Number(params.genre))

  useEffect(() => {
    getTopRated().catch((e) => console.log(e))
  }, [pageGenre])

  return (
    genreMovie.length > 0 && (
      <div className="bg-emerald-100 dark:bg-neutral-900">
        <MostPopular {...genreMovie[0]} />
        <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
          Popular {genreName[0].name} movies
        </h1>
        <div className="text-neutral-900 dark:text-yellow-400 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mx-10 gap-10 mt-10">
          {genreMovie?.map((movie) => (
            <Single key={movie.id} {...movie} />
          ))}
        </div>
        <div className="flex justify-center py-5">
          <button
            className="px-4 py-1 font-bold sm:text-3xl rounded-full bg-emerald-900 dark:bg-neutral-800"
            onClick={() => setPageGenre(pageGenre + 1)}
          >
            LOAD MORE...
          </button>
        </div>
      </div>
    )
  )
}

export default Genre
