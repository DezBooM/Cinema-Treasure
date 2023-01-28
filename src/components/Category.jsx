import React from "react"
import { NavLink } from "react-router-dom"

function Category() {
  return (
    <div className="flex border-b-4 border-emerald-100 dark:border-yellow-500">
      <NavLink
        to="/popular"
        className="current:bg-emerald-900 current:dark:bg-neutral-900 px-2 py-1 rounded-t-lg outline-none"
      >
        <h1 className="">POPULAR</h1>
      </NavLink>
      <NavLink
        to="/top-rated"
        className="current:bg-emerald-900 current:dark:bg-neutral-900 px-2 py-1 rounded-t-lg outline-none"
      >
        <h1 className="">TOP-RATED</h1>
      </NavLink>
      <NavLink
        to="/upcoming"
        className="current:bg-emerald-900 current:dark:bg-neutral-900 px-2 py-1 rounded-t-lg outline-none"
      >
        <h1 className="">UPCOMING</h1>
      </NavLink>
    </div>
  )
}

export default Category
