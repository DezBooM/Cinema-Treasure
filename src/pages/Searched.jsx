import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MostPopular from "../components/MostPopular"
import Single from "../components/Single"

function Searched() {
  const [searched, setSearched] = useState([])
  const params = useParams()

  const getSearched = async (name) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    setSearched(data.results)
  }

  useEffect(() => {
    getSearched(params.search).catch((e) => console.log(e))
  }, [params.search])

  return (
    <div className="bg-emerald-100 dark:bg-neutral-900">
      <MostPopular {...searched[0]} />
      <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
        Search for {params.search}
      </h1>
      <div className="text-neutral-900 dark:text-yellow-400 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mx-10 gap-10 mt-10">
        {searched?.map((movie) => (
          <Single key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default Searched
