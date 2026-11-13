import Navbar from "./../components/Navbar"

const items = [
  {
    label: "Sobre mim",
    description: "Conheça minha trajetória como desenvolvedor.",
    bgColor: "#1A1A1A",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Conhecer",
        href: "/sobremim"
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

export default function SobreMim(){
    return(
        <div className="text-white relative z-3 w-full min-h-screen overflow-hidden bg-[#090909]">
            <Navbar
                items={items}
                cta={botaoLogo}
                maxWidth={1400}
            />
            <div className="flex flex-row">
                <div>
                    <h1>Mateus Sousa</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed tenetur inventore in quis excepturi, veniam aliquam
                        molestiae consequuntur odit. Atque ex tempora ab dignissimos
                        odio ea tempore eos, illum distinctio!
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}