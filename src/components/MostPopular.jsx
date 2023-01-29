import { Link } from "react-router-dom"
import { baseUrlImg } from "../utils/utils"

function MostPopular({ backdrop_path, title, overview, release_date, id }) {
  return (
    <div>
      <div className="h-screen relative">
        <img
          className="absolute left-0 w-full h-full  object-cover"
          src={`${baseUrlImg}${backdrop_path}`}
          alt={title + " backdrop"}
        />
        <div className="bg-black absolute w-full h-full z-10 opacity-60" />
      </div>
      <div className="absolute lg:w-1/2 mx-2 lg:left-40 bottom-10 sm:bottom-5 lg:bottom-10 z-10">
        <Link
          to={`/movie/${id}`}
          className="font-bold text-2xl text-center sm:text-left lg:text-5xl tracking-wide"
        >
          {title} <span>({release_date?.split("-")[0]})</span>
        </Link>
        <p className="text-lg lg:text-2xl mt-10">{overview}</p>
      </div>
    </div>
  )
}

export default MostPopular
