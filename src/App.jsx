
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"

import PaginaInicial from "./pages/PaginaInicial"
import Portfolio from "./pages/Portifolio"
import Transicao from "./components/keyframes/Transicao"

function Rotas() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Transicao>
              <PaginaInicial />
            </Transicao>
          }
        />

        <Route
          path="/portifolio"
          element={
            <Transicao>
              <Portfolio />
            </Transicao>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}
