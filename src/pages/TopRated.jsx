import { useEffect, useState } from "react"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"

function TopRated() {
  const [topRated, setTopRated] = useState([])
  const [pageTopRated, setPageTopRated] = useState(1)

  const getTopRated = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }${pageTopRated === 1 ? `` : `&page=${pageTopRated}`}`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    topRated.length
      ? setTopRated(topRated.concat(data.results))
      : setTopRated(data.results)
  }

  useEffect(() => {
    getTopRated().catch((e) => console.log(e))
  }, [pageTopRated])

  return (
    topRated.length > 0 && (
      <div className="bg-emerald-100 dark:bg-neutral-900">
        <MostPopular {...topRated[0]} />
        <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
          Top-Rated Movies
        </h1>
        <div className="text-neutral-900 dark:text-yellow-400 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mx-10 gap-10 mt-10">
          {topRated?.map((movie) => (
            <Single key={movie.id} {...movie} />
          ))}
        </div>
        <div className="flex justify-center py-5">
          <button
            className="px-4 py-1 font-bold sm:text-3xl rounded-full bg-emerald-900 dark:bg-neutral-800"
            onClick={() => setPageTopRated(pageTopRated + 1)}
          >
            LOAD MORE...
          </button>
        </div>
      </div>
    )
  )
}

export default TopRated
