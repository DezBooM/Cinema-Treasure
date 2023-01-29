import { Link } from "react-router-dom"
import { baseUrlImg } from "../utils/utils"

function Single({ poster_path, title, release_date, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <img
        className="rounded-md"
        src={`${baseUrlImg}${poster_path}`}
        alt={title}
      />
      <h1 className="text-center text-base leading-tighter sm:text-xl font-bold">
        {title} <span>({release_date?.split("-")[0]})</span>
      </h1>
    </Link>
  )
}

export default Single
