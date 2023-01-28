import { useEffect, useState } from "react"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"

function Upcoming() {
  const [upcoming, setUpcoming] = useState([])
  const [pageUpcoming, setPageUpcoming] = useState(1)

  const getUpcoming = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        import.meta.env.VITE_API_KEY
      }${pageUpcoming === 1 ? `` : `&page=${pageUpcoming}`}`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    upcoming.length
      ? setUpcoming(upcoming.concat(data.results))
      : setUpcoming(data.results)
  }

  useEffect(() => {
    getUpcoming().catch((e) => console.log(e))
  }, [pageUpcoming])

  return (
    upcoming.length > 0 && (
      <div className="bg-emerald-100 dark:bg-neutral-900">
        <MostPopular {...upcoming[0]} />
        <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
          Upcoming Movies
        </h1>
        <div className="text-neutral-900 dark:text-yellow-400 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mx-10 gap-10 mt-10">
          {upcoming?.map((movie) => (
            <Single key={movie.id} {...movie} />
          ))}
        </div>
        <div className="flex justify-center py-5">
          <button
            className="px-4 py-1 font-bold outline-none sm:text-3xl rounded-full bg-emerald-900 dark:bg-neutral-800"
            onClick={() => setPageUpcoming(pageUpcoming + 1)}
          >
            LOAD MORE...
          </button>
        </div>
      </div>
    )
  )
}

export default Upcoming
