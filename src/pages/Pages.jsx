import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Details from "./Details"
import Genre from "./Genre"
import Home from "./Home"
import Searched from "./Searched"
import TopRated from "./TopRated"
import Upcoming from "./Upcoming"

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/popular" replace />} />
        <Route path="/popular" element={<Home />} />
        <Route path="/movie/:details" element={<Details />} />
        <Route path="/movie/searched/:search" element={<Searched />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/popular/:genre" element={<Genre />} />
      </Routes>
    </div>
  )
}

export default Pages
