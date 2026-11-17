import Navbar from "./../components/Navbar"
import TextoMexendo from "./../components/keyframes/TextoMexendo"
import Spiral from "./../components/Spiral"

import JavaScript from "./../assets/spiralFotos/JS.webp"
import Html from "./../assets/spiralFotos/HTML.webp"
import Css from "./../assets/spiralFotos/CSS.webp"
import Arduino from "./../assets/spiralFotos/Arduino.webp"
import Esp32 from "./../assets/spiralFotos/Esp32.webp"
import Git from "./../assets/spiralFotos/Git.webp"
import Express from "./../assets/spiralFotos/Express.webp"
import Github from "./../assets/spiralFotos/Github.webp"
import Node from "./../assets/spiralFotos/Node.webp"
import Python from "./../assets/spiralFotos/Python.webp"
import ReactLogo from "./../assets/spiralFotos/React.webp"
import Supabase from "./../assets/spiralFotos/Supabase.webp"
import Tailwind from "./../assets/spiralFotos/Tailwind.webp"
import Vscode from "./../assets/spiralFotos/VScode.webp"

const navItems = [
  {
    label: "Sobre mim",
    description: "Conheça minha trajetória como desenvolvedor.",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [{ label: "Conhecer", href: "/sobremim" }]
  },
  {
    label: "Projetos",
    description: "Confira alguns dos meus trabalhos.",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [{ label: "Ver projetos", href: "/projetos" }]
  },
  {
    label: "Contato",
    description: "Vamos desenvolver algo juntos?",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [{ label: "Entrar em contato", href: "/contato" }]
  }
]

const botaoLogo = {
  label: "Fale comigo",
  href: "/contato"
}

const spiralCards = [
  Html, Css, JavaScript, ReactLogo,
  Tailwind, Python, Node, Express,
  Supabase, Git, Github, Vscode,
  Arduino, Esp32
]

export default function SobreMim() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#090909] text-white">

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="relative z-30">
        <Navbar items={navItems} cta={botaoLogo} maxWidth={1400} />
      </div>

      <section
        className="
          relative z-20 mx-auto w-full max-w-[1500px]
          px-6 pt-10 pb-6 lg:px-12 lg:py-0
          lg:min-h-[calc(100svh-90px)] lg:flex lg:items-center
          lg:pointer-events-none
        "
      >
        <div
          className="
            w-full max-w-[580px] py-8
            lg:max-w-[min(580px,calc(50vw-4rem))]
            lg:pointer-events-auto
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-[2px] bg-white" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400">
              Conheça minha história
            </span>
          </div>

          <TextoMexendo>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
              Sobre mim.
            </h1>
            <p className="text-gray-300 text-sm lg:text-[15px] leading-[1.8] max-w-[520px]">
              Olá! Sou Mateus Sousa, desenvolvedor Full-Stack em ascensão,
              apaixonado por tecnologia e inovação. Tenho interesse em criar
              interfaces modernas, desenvolver aplicações e explorar soluções
              utilizando tecnologias como JavaScript, React, HTML, CSS e Python.
              Também gosto de trabalhar com robótica, automação e sistemas
              embarcados, utilizando Arduino e ESP32. Estou sempre buscando
              novos conhecimentos, aprimorando minhas habilidades e transformando
              ideias em projetos reais.
            </p>
          </TextoMexendo>

          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-white text-xs font-semibold">
              Sempre aprendendo. Sempre evoluindo.
            </p>
            <p className="text-gray-600 text-[10px] mt-2 tracking-[0.2em]">
              DESENVOLVIMENTO • TECNOLOGIA • INOVAÇÃO
            </p>
          </div>
        </div>
      </section>

      <div
        className="
          relative z-10 w-full h-[440px] sm:h-[520px]
          lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2
        "
      >
       
          <Spiral
            items={spiralCards}
            direction="down"
            speed={0.2}
            animationMode={"all"}
            cardRadius={15}
            edgeFade={0.35}
            edgeBlur={5}
            grayscale={0.7}
          />
        </div>
    </main>
  )
}