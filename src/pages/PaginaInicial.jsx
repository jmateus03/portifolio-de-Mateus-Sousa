
import PatternWaves from "../components/backgrounds/PatternWaves"
import Nome from "../components/Nome"
import { useNavigate } from "react-router-dom"

export default function PaginaInicial() {
  const navigate = useNavigate()

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#090909]">

      <div className="absolute inset-0 z-0">
        <PatternWaves
          color="#FFF"
          background="#090909"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-white">

        <div className="w-full h-[250px] z-1">
          <Nome
            text="MATEUS SOUSA"
            fontFamily="geist mono"
            fontSize={270}
            color="#FFF"
            accentColor="#FFF"
          />
        </div>

        <p className="mt-4 rounded-3xl  border-2 border-white/50 bg-[#141414]/60 px-7 py-3 text-[#A3A3A3] backdrop-blur-2xl">
          Programador Full-Stack em ascensão
        </p>

        <button
          onClick={() => navigate("/portifolio")}
          className="
                      mt-8
                      cursor-pointer
                      rounded-xl 
                      bg-[#737373]
                      border-2
                      border-white/50
                      px-8
                      py-3
                      font-semibold
                      text-white
                      transition hover:scale-110
                      hover:bg-[#A3A3A3]
                      ">
          Entrar
        </button>

      </div>
    </section>
  )
}
