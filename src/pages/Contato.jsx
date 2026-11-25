import FolderFloat from "./../components/FolderFloat"
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

const redes = [
  { label: "GitHub", value: "https://github.com/jmateus03" },
  { label: "Instagram", value: "https://instagram.com/jm_m4t3us" },
  { label: "WhatsApp", value: "https://wa.me/85991619819" },
  { label: "E-mail", value: "https://mail.google.com/mail/?view=cm&fs=1&to=jokm98op@gmail.com&su=Contato%20pelo%20portf%C3%B3lio&body=Ol%C3%A1%20Mateus%2C%20" }
]

const stack = [
  "JavaScript",
  "React",
  "Tailwind",
  "Node",
  "Express",
  "Python",
  "Supabase",
  "Arduino",
  "ESP32"
]

const infos = [
  { titulo: "Foco", texto: "Desenvolvimento Full-Stack" },
  { titulo: "Também faço", texto: "Robótica e sistemas embarcados" },
  { titulo: "Disponível para", texto: "Projetos e colaborações" }
]

function abrir(url) {
  if (url.startsWith("mailto:")) {
    window.location.href = url
  } else {
    window.open(url, "_blank", "noopener,noreferrer")
  }
}

export default function Contato() {
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

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] w-full max-w-[1200px] items-center gap-16 px-6 pt-32 pb-16 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/60 uppercase">
              Contato
            </span>
            <h1 className="text-4xl leading-tight font-bold md:text-6xl">
              Vamos criar algo{" "}
              <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">
                incrível
              </span>{" "}
              juntos?
            </h1>
            <p className="max-w-[520px] text-base leading-relaxed text-white/60 md:text-lg">
              Sou o Mateus Sousa, desenvolvedor Full-Stack em ascensão. Gosto de
              transformar ideias em sites, sistemas e também em projetos de robótica
              com Arduino e ESP32. Me chame por qualquer uma das redes ao lado.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {infos.map(info => (
              <div
                key={info.titulo}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <p className="text-[11px] tracking-widest text-white/40 uppercase">
                  {info.titulo}
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">{info.texto}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {stack.map(tech => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-end gap-10 pt-64 lg:pt-40">
          <FolderFloat
            items={redes}
            label="Minhas redes"
            sublabel="Passe o mouse e clique"
            trigger="hover"
            physics={false}
            closeOnSelect={false}
            onSelect={abrir}
            width={360}
            height={260}
            radius={22}
            spread={260}
            lift={44}
            folderColor="#27272a"
            frontColor="#3f3f46"
            paperColor="#e4e4e7"
            itemColor="#f5f5f5"
            itemTextColor="#18181b"
            className="[&>div:first-of-type>button]:h-[46px] [&>div:first-of-type>button]:rounded-[23px] [&>div:first-of-type>button]:px-6 [&>div:first-of-type>button]:text-[17px]"
          />
          <p className="text-xs text-white/40">Clique em uma nota para abrir</p>
        </div>
      </section>
    </main>
  )
}