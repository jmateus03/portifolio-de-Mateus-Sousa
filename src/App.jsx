
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "motion/react"
import Transicao from "./components/keyframes/Transicao"

import SobreMim from "./pages/SobreMim"
import PaginaInicial from "./pages/PaginaInicial"
import Projetos from "./pages/Projetos"

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
          path="/sobremim"
          element={
            <Transicao>
              <SobreMim/>
            </Transicao>
          }
        />
        <Route
          path="/projetos"
          element={
            <Transicao>
              <Projetos />
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
