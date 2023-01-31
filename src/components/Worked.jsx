import noImage from "../assets/no_image.jpg"
import { baseUrlImg } from "../utils/utils"

function Cast({ crew, cast }) {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
        Crew
      </h1>
      <div className="text-neutral-900 dark:text-yellow-400 text-base leading-tighter sm:text-xl font-bold grid grid-cols-2 sm:grid-cols-6 mx-10 gap-10 mt-10">
        {crew
          ?.filter((person) => person.job === "Director")
          .map((person) => (
            <div key={person.id}>
              <img
                className="rounded-md"
                src={
                  person.profile_path
                    ? `${baseUrlImg}${person.profile_path}`
                    : noImage
                }
              />
              <h2>{person.job}:</h2>
              <h2>{person.name}</h2>
            </div>
          ))}
        {crew
          ?.filter((person) => person.department === "Writing")
          .map((person) => (
            <div key={person.id}>
              <img
                className="rounded-md"
                src={
                  person.profile_path
                    ? `${baseUrlImg}${person.profile_path}`
                    : noImage
                }
              />
              <h2>{person.job}:</h2>
              <h2>{person.name}</h2>
            </div>
          ))}
      </div>
      <h1 className="font-bold text-4xl text-center mt-10 text-neutral-900 dark:text-yellow-400">
        Cast
      </h1>
      <div className="text-neutral-900 dark:text-yellow-400 text-base leading-tighter sm:text-xl font-bold grid grid-cols-2 sm:grid-cols-6 mx-10 gap-10 mt-10">
        {cast?.map((person) => (
          <div key={person.id}>
            <img
              className="rounded-md"
              src={
                person.profile_path
                  ? `${baseUrlImg}${person.profile_path}`
                  : noImage
              }
              alt={`Photo of ${person.name}`}
            />
            <h2>{person.character}:</h2>
            <h2>{person.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cast
