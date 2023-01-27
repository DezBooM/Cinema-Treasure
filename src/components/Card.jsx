import { baseUrlImg } from "../api links/apiLinks"

function Card({
  backdrop_path,
  title,
  release_date,
  overview,
  poster_path,
  genres,
  runtime,
  vote_average,
  production_companies,
}) {
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
      <div className="absolute flex scale-y-110 sm:scale-100 lg:scale-110 lg:w-5/6 h-5/6 mx-auto lg:left-0 lg:right-0 p-4 bottom-0 z-10 rounded-md bg-black bg-opacity-70">
        <img
          className="w-0 lg:w-2/4 object-cover rounded-md sm:mr-5"
          src={`${baseUrlImg}${poster_path}`}
        />
        <div className="flex flex-col justify-around sm:h-auto">
          <div>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
              <h1 className="font-bold mt-5 sm:mt-0 text-lg text-center sm:text-2xl lg:text-4xl tracking-wide">
                {title}
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-end gap-1 sm:gap-2">
                {genres?.map((genre) => (
                  <p
                    className="text-center flex items-center text-xs hover:bg-neutral-700 cursor-pointer lg:text-base px-2 sm:px-3 sm:py-1 font-bold bg-neutral-900 rounded-full"
                    key={genre.id}
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center sm:mt-2 lg:mt-5">
              <div className="flex flex-col">
                <p>Released: {release_date}</p>
                <p>Runtime: {runtime}m</p>
              </div>
              <p className="text-base sm:text-2xl lg:text-4xl">
                Rating: {vote_average?.toFixed(1)}/10
              </p>
            </div>
          </div>
          <div>
            <p className="text-md sm:text-lg lg:text-2xl mt-10">{overview}</p>
            <div className="flex gap-5 flex-1 items-center justify-center px-2 py-1 bg-white rounded-lg lg:mt-10 bg-opacity-50">
              {production_companies?.map((logo) => (
                <img
                  className= {logo.logo_path ? "w-8 sm:w-32 h-auto" : "bg-neutral-900 text-xs px-2 py-1 rounded-lg"}
                  key={logo.id}
                  src={`${baseUrlImg}${logo.logo_path}`}
                  alt={logo.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
