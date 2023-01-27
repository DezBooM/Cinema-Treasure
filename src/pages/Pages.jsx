import { Navigate, Route, Routes } from "react-router-dom"
import Details from "./Details"
import Home from "./Home"

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/movies/:details" element={<Details />} />
      </Routes>
    </div>
  )
}

export default Pages
