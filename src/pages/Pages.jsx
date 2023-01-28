import { Navigate, Route, Routes } from "react-router-dom"
import Details from "./Details"
import Home from "./Home"
import Searched from "./Searched"

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/movies/:details" element={<Details />} />
        <Route path="/movies/searched/:search" element={<Searched />} />
      </Routes>
    </div>
  )
}

export default Pages
