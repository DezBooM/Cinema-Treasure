import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card"
import Trailer from "../components/Trailer"
import Worked from "../components/Worked"

function Details() {
  const [details, setDetails] = useState({})
  const [worked, setWorked] = useState([])
  const [videos, setVideos] = useState([])
  const params = useParams()

  const getDetails = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    setDetails(data)
  }

  const getWorked = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    setWorked(data)
  }

  const getVideos = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    if (!res.ok) throw new Error(`Error occurred in ${res.status}`)
    const data = await res.json()
    setVideos(data?.results?.filter((item) => item.type === "Trailer"))
  }

  useEffect(() => {
    getDetails(params.details).catch((e) => console.log(e))
    getWorked(params.details).catch((e) => console.log(e))
    getVideos(params.details).catch((e) => console.log(e))
  }, [params.details])

  return (
    <div className="bg-emerald-100 dark:bg-neutral-900">
      <Card {...details} />
      <Trailer video={videos[0]} />
      <Worked {...worked} />
    </div>
  )
}

export default Details
