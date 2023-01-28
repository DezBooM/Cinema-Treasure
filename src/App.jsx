import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Pages from "./pages/Pages"

function App() {
  const [dark, setDark] = useState(() => JSON.parse(localStorage.getItem("theme")) || false)

  const handleTheme = () => setDark(!dark)

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen text-emerald-100 dark:bg-neutral-900 dark:text-yellow-400 font-crimson">
        <Navbar dark={dark} handleTheme={handleTheme} />
        <Pages />
        <Footer />
      </div>
    </div>
  )
}

export default App
