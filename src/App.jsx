
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom"

import { AnimatePresence } from "motion/react"

import Transicao from "./components/keyframes/Transicao"

import PaginaInicial from "./pages/PaginaInicial"
import SobreMim from "./pages/SobreMim"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

function Rotas() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
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
              <SobreMim />
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

        <Route
          path="*"
          element={
            <Transicao>
              <div className="min-h-screen bg-[#090909] text-white flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold">404</h1>
                  <p className="mt-4">Página não encontrada.</p>
                  <a href="/" className="underline mt-4 inline-block">
                    Voltar ao início
                  </a>
                </div>
              </div>
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
