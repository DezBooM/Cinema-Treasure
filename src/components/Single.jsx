import { Link } from "react-router-dom"
import { baseUrlImg } from "../utils/utils"
import noImage from "../assets/no_image.jpg"

function Single({ poster_path, title, release_date, id }) {
  return (
    <Link
      to={`/movie/${id}/${title
        ?.replaceAll(" ", "-")
        .replaceAll(":", "")
        .toLowerCase()}`}
    >
      <img
        className="rounded-md"
        src={poster_path ? `${baseUrlImg}${poster_path}` : noImage}
        alt={title}
      />
      <h1 className="text-center text-base leading-tighter sm:text-xl font-bold">
        {title} <span>({release_date?.split("-")[0]})</span>
      </h1>
    </Link>
  )
}

export default Single
