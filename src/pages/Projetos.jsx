import { useRef } from "react"
import FlipCard from "../components/FlipCard"
import Navbar from "./../components/Navbar"

import HandMouse from "./../assets/projetosFotos/handMouseController.png"

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

const projetos = [
  {
    titulo: "HandMouse Controller",
    tipo: "Code",
    cor: "#5CC8D7",
    imagem: HandMouse,
    resumo: "Controle seu computador com as mãos.",
    detalhe:  "A webcam captura a sua mão e o programa identifica a posição dos dedos em tempo real. O cursor acompanha o movimento e gestos, como juntar os dedos, viram cliques. Não precisa de nenhum hardware extra além da câmera.",
    stack: ["Python"],
    link: "https://github.com/jmateus03/handMouse-controller",
    textoLink: "Ver no GitHub"
  }
]

const LARGURA_CARD = 420
const ALTURA_CARD = 560
const GAP = 32

function Frente({ projeto }) {
  const { titulo, tipo, cor, imagem } = projeto
  return (
    <div className="flex h-full w-full select-none flex-col justify-between p-8 text-left">
      <span
        className="w-fit rounded-full border px-3 py-1 text-xs font-medium"
        style={{ borderColor: cor, color: cor }}
      >
        {tipo}
      </span>

      {imagem && (
        <img
          src={imagem}
          alt={titulo}
          draggable={false}
          className="pointer-events-none h-52 w-full rounded-2xl object-cover"
        />
      )}

      <div>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white">
          {titulo}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-400">{projeto.resumo}</p>
      </div>
    </div>
  )
}

function Verso({ projeto }) {
  const { titulo, cor, detalhe, stack = [], link, textoLink } = projeto
  return (
    <div className="flex h-full w-full select-none flex-col justify-between p-8 text-left">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ color: cor }}>
          {titulo}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">{detalhe}</p>
      </div>

      <div>
        {stack.length > 0 && (
          <div className="mb-5">
            <p className="mb-2 text-xs text-zinc-500">Feito com</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            style={{ backgroundColor: cor }}
          >
            {textoLink || "Ver projeto"}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 L17 7 M9 7 H17 V15" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

function Seta({ direcao, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direcao === "esquerda" ? "Projeto anterior" : "Próximo projeto"}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direcao === "esquerda" ? <path d="M15 5 L8 12 L15 19" /> : <path d="M9 5 L16 12 L9 19" />}
      </svg>
    </button>
  )
}

export default function Projetos() {
  const trilho = useRef(null)

  function mover(sentido) {
    trilho.current?.scrollBy({
      left: sentido * (LARGURA_CARD + GAP),
      behavior: "smooth"
    })
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#090909] text-white">
      <div className="pointer-events-none absolute inset-0">
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

      <section className="relative z-10 w-full pb-24 pt-8 md:pt-10">
        <header className="mx-auto max-w-xl px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Meus projetos
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-400">
            Do código ao circuito. Clique em um cartão para ver os detalhes.
          </p>
        </header>

        {/* Carrossel */}
        <div className="mt-12">
          <div
            ref={trilho}
            className="flex snap-x snap-mandatory overflow-x-auto py-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{
              gap: GAP,
              paddingInline: `max(1.5rem, calc(50% - ${LARGURA_CARD / 2}px))`
            }}
          >
            {projetos.map((projeto) => (
              <div key={projeto.titulo} className="shrink-0 snap-center">
                <FlipCard
                  front={<Frente projeto={projeto} />}
                  back={<Verso projeto={projeto} />}
                  draggable={false}
                  width={LARGURA_CARD}
                  height={ALTURA_CARD}
                  radius={28}
                  background="#151515"
                  color="#f5f5f5"
                  glareOpacity={0.16}
                  tiltMax={8}
                  shadowOpacity={0.6}
                  ariaLabel={`Virar cartão: ${projeto.titulo}`}
                />
              </div>
            ))}
          </div>

          {projetos.length > 1 && (
            <div className="mt-2 flex items-center justify-center gap-4">
              <Seta direcao="esquerda" onClick={() => mover(-1)} />
              <Seta direcao="direita" onClick={() => mover(1)} />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}