import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import SplashScreen from "./components/SplashScreen"
import Home from "./pages/home"
import Perfumes from "./pages/Perfumes"
import Beleza from "./pages/Beleza"
import Livros from "./pages/Livros"
import Tech from "./pages/Tech"
import Premium from "./pages/Premium"
import Academia from "./pages/Academia"
import Flores from "./pages/Flores"
import Moda from "./pages/Moda"
import Cabelo from "./pages/Cabelo"

function AppWithSplash() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/beleza" element={<Beleza />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/flores" element={<Flores />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/cabelo" element={<Cabelo />} />
      </Routes>
    </>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppWithSplash />
    </BrowserRouter>
  </StrictMode>
)