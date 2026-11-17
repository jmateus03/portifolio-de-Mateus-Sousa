
import PatternWaves from "../components/backgrounds/PatternWaves"
import Nome from "../components/Nome"
import Navbar from "../components/Navbar"

const items = [
  {
    label: "Sobre mim",
    description: "Conheça minha trajetória como desenvolvedor.",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Conhecer",
        href: "./sobremim"
      }
    ]
  },
  {
    label: "Projetos",
    description: "Confira alguns dos meus trabalhos.",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Ver projetos",
        href: "/projetos"
      }
    ]
  },
  {
    label: "Contato",
    description: "Vamos desenvolver algo juntos?",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Entrar em contato",
        href: "/contato"
      }
    ]
  }
]

const botaoLogo = {
  label: "Fale comigo",
  href: "/contato"
}

export default function PaginaInicial() {
  return (
    <section className="relative z-3 w-full min-h-screen overflow-hidden bg-[#090909]">

      <Navbar
        items={items}
        cta={botaoLogo}
        maxWidth={1400}
      />

      <div className="absolute inset-0 z-0">
        <PatternWaves
          color="#FFF"
          background="#090909"
        />
      </div>

      <div className="absolute inset-0 z-2 flex items-center justify-center">

        <div className="w-full flex justify-center">
          <Nome
            text="MATEUS SOUSA"
            fontFamily="geist mono"
            fontSize={270}
            color="#FFF"
            accentColor="#FFF"
          />
        </div>

      </div>

    </section>
  )
}
