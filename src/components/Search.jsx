import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Search() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => setQuery(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(
      `/movie/searched/${query
        ?.replaceAll(" ", "-")
        .replaceAll(":", "")
        .toLowerCase()}`
    )
    setQuery("")
  }

  return (
    <form className="lg:-translate-x-20 w-1/2 lg:w-1/3" onSubmit={handleSubmit}>
      <input
        className=" bg-emerald-900 dark:bg-neutral-900 placeholder:text-emerald-100 placeholder:opacity-50 outline-none border-none rounded-full py-1 w-full px-5"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </form>
  )
}

export default Search
