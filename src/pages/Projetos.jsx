import { useRef, useState, useEffect } from "react"
import FlipCard from "../components/FlipCard"
import Navbar from "./../components/Navbar"

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

function Arte({ cor, children }) {
  return (
    <svg
      viewBox="0 0 360 208"
      className="pointer-events-none h-52 w-full rounded-2xl"
      fill="none"
      stroke={cor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <pattern id="pontos" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" opacity="0.08" stroke="none" />
        </pattern>
      </defs>
      <rect width="360" height="208" fill="#0e0e0e" stroke="none" />
      <rect width="360" height="208" fill="url(#pontos)" stroke="none" />
      {children}
    </svg>
  )
}

const dedos = [
  [[138, 134], [134, 108], [128, 92], [122, 86]],
  [[158, 130], [160, 98], [161, 72], [162, 50]],
  [[178, 134], [184, 106], [187, 84], [189, 64]],
  [[196, 142], [206, 122], [212, 106], [216, 92]]
]

const polegar = [[122, 166], [104, 142], [106, 114], [112, 92]]

const pontos = (lista) => lista.map((p) => p.join(",")).join(" ")

function ArteHandMouse({ cor }) {
  return (
    <Arte cor={cor}>
      <rect x="20" y="18" width="36" height="24" rx="5" strokeWidth="2.5" />
      <circle cx="38" cy="30" r="6" strokeWidth="2.5" />
      <circle cx="38" cy="30" r="2" fill={cor} stroke="none" />
      <path d="M32 42 L28 50 H48 L44 42" strokeWidth="2.5" />

      <polygon
        points="156,184 122,166 138,134 158,130 178,134 196,142"
        fill={cor}
        fillOpacity="0.08"
        strokeOpacity="0.5"
        strokeWidth="2"
      />

      <polyline points={pontos([[156, 184], ...polegar])} strokeWidth="2.5" />
      {dedos.map((dedo, i) => (
        <polyline key={i} points={pontos(dedo)} strokeWidth="2.5" />
      ))}

      {[polegar, ...dedos].flatMap((dedo, i) =>
        dedo.map(([x, y], j) => (
          <circle
            key={`${i}-${j}`}
            cx={x}
            cy={y}
            r={j === dedo.length - 1 ? 5 : 3.5}
            fill={j === dedo.length - 1 ? cor : "#0e0e0e"}
            strokeWidth="2"
          />
        ))
      )}
      <circle cx="156" cy="184" r="4" fill={cor} stroke="none" />

      <circle cx="117" cy="89" r="14" strokeDasharray="3 4" strokeWidth="2" />

      <path d="M132 80 Q200 20 252 42" strokeDasharray="4 7" strokeWidth="2" />

      <circle cx="262" cy="40" r="14" opacity="0.5" strokeWidth="2" />
      <circle cx="262" cy="40" r="26" opacity="0.22" strokeWidth="2" />

      <path
        d="M262 40 L262 84 L273 74 L281 92 L289 88 L281 70 L296 70 Z"
        fill={cor}
        stroke="#0e0e0e"
        strokeWidth="2"
      />
    </Arte>
  )
}

function ArtePortfolio({ cor }) {
  return (
    <Arte cor={cor}>
      <rect x="50" y="26" width="260" height="156" rx="10" fill={cor} fillOpacity="0.06" />
      <line x1="50" y1="54" x2="310" y2="54" strokeWidth="2" />
      <circle cx="68" cy="40" r="3.5" fill={cor} stroke="none" />
      <circle cx="82" cy="40" r="3.5" fill={cor} stroke="none" opacity="0.6" />
      <circle cx="96" cy="40" r="3.5" fill={cor} stroke="none" opacity="0.3" />

      <circle cx="96" cy="94" r="16" />
      <line x1="126" y1="86" x2="196" y2="86" />
      <line x1="126" y1="102" x2="170" y2="102" strokeWidth="2" opacity="0.6" />

      <rect x="72" y="130" width="52" height="38" rx="6" strokeWidth="2" />
      <rect x="134" y="130" width="52" height="38" rx="6" strokeWidth="2" />
      <rect x="196" y="130" width="52" height="38" rx="6" strokeWidth="2" opacity="0.5" />

      <path
        d="M270 110 m0 0 a4 4 0 0 1 8 0 a8 8 0 0 1 -16 0 a12 12 0 0 1 24 0 a16 16 0 0 1 -32 0"
        strokeWidth="2"
        opacity="0.8"
      />
    </Arte>
  )
}

function ArteClima({ cor }) {
  return (
    <Arte cor={cor}>
      <circle cx="132" cy="70" r="20" fill={cor} fillOpacity="0.2" />
      <path
        d="M132 36 V44 M132 96 V104 M98 70 H106 M158 70 H166 M108 46 L114 52 M150 88 L156 94 M156 46 L150 52 M114 88 L108 94"
        strokeWidth="2.5"
      />

      <path
        d="M96 140 Q76 140 78 120 Q80 102 100 104 Q104 82 132 82 Q160 82 164 106 Q184 104 186 124 Q186 140 168 140 Z"
        fill="#0e0e0e"
      />

      <path d="M108 154 L102 168 M132 154 L126 168 M156 154 L150 168" strokeWidth="2.5" />

      <path d="M194 112 H214" strokeDasharray="4 5" strokeWidth="2" />
      <rect x="220" y="58" width="98" height="96" rx="8" fill={cor} fillOpacity="0.08" strokeWidth="2" />
      <g fill={cor} stroke="none" fontFamily="monospace" fontSize="11">
        <text x="230" y="80">{"{"}</text>
        <text x="240" y="98">"temp": 28,</text>
        <text x="240" y="114">"chuva": 80,</text>
        <text x="240" y="130">"vento": 12</text>
        <text x="230" y="146">{"}"}</text>
      </g>
    </Arte>
  )
}

function Pessoa({ x, y, r = 14 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#0e0e0e" strokeWidth="2.5" />
      <circle cx={x} cy={y - r * 0.2} r={r * 0.28} strokeWidth="2" />
      <path
        d={`M${x - r * 0.5} ${y + r * 0.6} Q${x} ${y + r * 0.05} ${x + r * 0.5} ${y + r * 0.6}`}
        strokeWidth="2"
      />
    </g>
  )
}

const nos = [
  [74, 58],
  [74, 150],
  [286, 58],
  [286, 150],
  [180, 28],
  [180, 182]
]

function ArteDrmConnect({ cor }) {
  return (
    <Arte cor={cor}>
      {nos.map(([x, y]) => (
        <line key={`l-${x}-${y}`} x1="180" y1="104" x2={x} y2={y} strokeWidth="2" opacity="0.4" />
      ))}

      {nos.map(([x, y]) => (
        <Pessoa key={`p-${x}-${y}`} x={x} y={y} />
      ))}

      <circle cx="180" cy="104" r="30" fill={cor} fillOpacity="0.12" />
      <Pessoa x={180} y={104} r={26} />

      <path
        d="M232 70 C218 58 224 46 232 54 C240 46 246 58 232 70 Z"
        fill={cor}
        stroke="none"
      />

      <path
        d="M114 100 H146 Q152 100 152 106 V120 Q152 126 146 126 H128 L120 134 V126 H114 Q108 126 108 120 V106 Q108 100 114 100 Z"
        strokeWidth="2"
        fill="#0e0e0e"
      />
    </Arte>
  )
}

function ArteEmBreve({ cor }) {
  return (
    <Arte cor={cor}>
      <rect
        x="110"
        y="40"
        width="140"
        height="128"
        rx="18"
        strokeDasharray="6 9"
        strokeWidth="2.5"
        fill={cor}
        fillOpacity="0.05"
      />
      <line x1="180" y1="82" x2="180" y2="126" strokeWidth="4" />
      <line x1="158" y1="104" x2="202" y2="104" strokeWidth="4" />

      <g fill={cor} stroke="none">
        <path d="M78 52 L80 58 L86 60 L80 62 L78 68 L76 62 L70 60 L76 58 Z" />
        <path d="M292 140 L294 146 L300 148 L294 150 L292 156 L290 150 L284 148 L290 146 Z" />
        <path d="M296 44 L297.5 48 L302 49.5 L297.5 51 L296 55 L294.5 51 L290 49.5 L294.5 48 Z" opacity="0.6" />
        <circle cx="64" cy="150" r="2.5" opacity="0.5" />
      </g>
    </Arte>
  )
}

const projetos = [
  {
    titulo: "Portfólio",
    tipo: "Web",
    cor: "#A78BFA",
    arte: ArtePortfolio,
    resumo: "O site que você está vendo agora.",
    detalhe: "Meu portfólio pessoal, com páginas sobre mim, projetos e contato. Tem animações de texto, uma espiral interativa com as tecnologias que uso e cartões de projeto que viram.",
    stack: ["React", "Tailwind CSS"],
    link: "https://github.com/jmateus03/portifolioJM",
    textoLink: "Ver no GitHub"
  },
  {
    titulo: "API de Clima",
    tipo: "Web",
    cor: "#38BDF8",
    arte: ArteClima,
    resumo: "Veja o tempo de qualquer cidade.",
    detalhe: "Um site que consome a API do Open-Meteo para mostrar o clima de uma cidade, como temperatura, chance de chuva e vento, em uma interface simples feita com HTML, CSS e JavaScript.",
    stack: ["HTML", "CSS", "JavaScript", "Open-Meteo"],
    link: "https://github.com/jmateus03/api-de-clima",
    textoLink: "Ver no GitHub"
  },
  {
    titulo: "DRMConnect",
    tipo: "Web",
    cor: "#4ADE80",
    arte: ArteDrmConnect,
    resumo: "A rede social da minha escola.",
    detalhe: "Uma rede social criada para os alunos da escola se conectarem, compartilharem e conversarem em um só lugar. Feita com React no front-end e Supabase no back-end.",
    stack: ["React", "Supabase"],
    link: "https://github.com/jmateus03/drmconnect",
    textoLink: "Ver no GitHub"
  },
  {
    titulo: "HandMouse Controller",
    tipo: "Code",
    cor: "#5CC8D7",
    arte: ArteHandMouse,
    resumo: "Controle seu computador com as mãos.",
    detalhe: "A webcam captura a sua mão e o programa identifica a posição dos dedos em tempo real. O cursor acompanha o movimento e gestos, como juntar os dedos, viram cliques. Não precisa de nenhum hardware extra além da câmera.",
    stack: ["Python"],
    link: "https://github.com/jmateus03/handMouse-controller",
    textoLink: "Ver no GitHub"
  },
  {
    titulo: "Mais projetos em breve",
    tipo: "Em breve",
    cor: "#A1A1AA",
    arte: ArteEmBreve,
    resumo: "Sempre tem algo novo sendo construído.",
    detalhe: "Estou sempre estudando e criando coisas novas, do código ao circuito. Novos projetos vão aparecer aqui, volte em breve!"
  }
]

const LARGURA_CARD = 420
const ALTURA_CARD = 560
const GAP = 32
const PASSO = LARGURA_CARD + GAP

function Frente({ projeto }) {
  const { titulo, tipo, cor, imagem, arte: Ilustracao, resumo } = projeto
  return (
    <div className="flex h-full w-full select-none flex-col justify-between p-8 text-left">
      <span
        className="w-fit rounded-full border px-3 py-1 text-xs font-medium"
        style={{ borderColor: cor, color: cor }}
      >
        {tipo}
      </span>

      {Ilustracao ? (
        <Ilustracao cor={cor} />
      ) : (
        imagem && (
          <img
            src={imagem}
            alt={titulo}
            draggable={false}
            className="pointer-events-none h-52 w-full rounded-2xl object-cover"
          />
        )
      )}

      <div>
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white">
          {titulo}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-400">{resumo}</p>
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

function Seta({ direcao, onClick, visivel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      aria-label={direcao === "esquerda" ? "Projeto anterior" : "Próximo projeto"}
      className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
        visivel ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
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
  const [podeEsquerda, setPodeEsquerda] = useState(false)
  const [podeDireita, setPodeDireita] = useState(true)

  function atualizarSetas() {
    const el = trilho.current
    if (!el) return
    setPodeEsquerda(el.scrollLeft > 4)
    setPodeDireita(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    atualizarSetas()
    window.addEventListener("resize", atualizarSetas)
    return () => window.removeEventListener("resize", atualizarSetas)
  }, [])

  function mover(sentido) {
    trilho.current?.scrollBy({
      left: sentido * PASSO,
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
            Clique em um cartão para ver os detalhes.
          </p>
        </header>

        <div className="mt-12">
          <div
            ref={trilho}
            onScroll={atualizarSetas}
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

          <div className="mt-2 flex items-center justify-center gap-4">
            <Seta direcao="esquerda" onClick={() => mover(-1)} visivel={podeEsquerda} />
            <Seta direcao="direita" onClick={() => mover(1)} visivel={podeDireita} />
          </div>
        </div>
      </section>
    </main>
  )
}