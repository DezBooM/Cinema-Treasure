import { useEffect, useState } from "react"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"

function Home() {
  const [movies, setMovies] = useState([])

  const getPopular = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    getPopular().catch((e) => console.log(e))
  }, [])

  return (
    <div className="bg-emerald-100 dark:bg-neutral-900">
      <MostPopular {...movies[0]} />
      <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
        Popular Movies
      </h1>
      <div className="text-neutral-900 dark:text-yellow-400 grid grid-cols-2 sm:grid-cols-5 mx-10 gap-10 mt-10">
        {movies?.map((movie) => (
          <Single key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default Home
