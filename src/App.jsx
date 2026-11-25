import { AnimatePresence } from "motion/react"
import { Routes, Route, useLocation } from "react-router-dom"
import Transicao from "./components/keyframes/Transicao"
import PaginaInicial from "./pages/PaginaInicial"
import SobreMim from "./pages/SobreMim"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Transicao key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Transicao>
    </AnimatePresence>
  )
}