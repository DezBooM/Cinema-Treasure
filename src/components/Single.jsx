import { baseUrlImg } from "../api links/apiLinks"

function Single({ poster_path, title }) {
  return (
    <div>
      <img src={`${baseUrlImg}${poster_path}`} alt={title} />
      <h1 className="text-center text-base leading-tight sm:text-xl font-bold">
        {title}
      </h1>
    </div>
  )
}

export default Single
