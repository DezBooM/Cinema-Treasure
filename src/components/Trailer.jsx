import ReactPlayer from "react-player"

function Trailer(props) {
  const { video } = props

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <h1 className="font-bold text-4xl text-center my-10 text-neutral-900 dark:text-yellow-400">
        Trailer
      </h1>
        <ReactPlayer
          controls={true}
          url={`https://www.youtube.com/watch?v=${video?.key}`}
        />
    </div>
  )
}

export default Trailer
