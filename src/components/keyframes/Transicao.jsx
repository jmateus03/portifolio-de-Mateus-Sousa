import { motion } from "motion/react"

const COLUNAS = 5
const ease = [0.76, 0, 0.24, 1]

const painel = {
  inicio: { scaleY: 1, originY: 0 },
  entrada: i => ({
    scaleY: 0,
    originY: 0,
    transition: {
      duration: 0.8,
      ease,
      delay: 0.25 + i * 0.07,
      originY: { duration: 0 }
    }
  }),
  saida: i => ({
    scaleY: 1,
    originY: 1,
    transition: {
      duration: 0.7,
      ease,
      delay: i * 0.07,
      originY: { duration: 0 }
    }
  })
}

const marca = {
  inicio: { opacity: 1, y: 0, scale: 1 },
  entrada: {
    opacity: 0,
    y: -24,
    scale: 1.08,
    transition: { duration: 0.45, ease: "easeInOut", delay: 0.1 }
  },
  saida: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 }
  }
}

const conteudo = {
  inicio: { opacity: 0, y: 60, scale: 0.98 },
  entrada: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }
  },
  saida: {
    opacity: 0,
    y: -40,
    scale: 0.98,
    transition: { duration: 0.45, ease: "easeIn" }
  }
}

export default function Transicao({ children }) {
  return (
    <motion.div initial="inicio" animate="entrada" exit="saida">
      <div className="pointer-events-none fixed inset-0 z-[100] flex overflow-hidden">
        {Array.from({ length: COLUNAS }).map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={painel}
            className="-mr-px h-full flex-1 bg-gradient-to-b from-[#161616] to-[#0a0a0a]"
          />
        ))}
      </div>

      <motion.div
        variants={marca}
        className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center"
      >
        <span className="bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-7xl font-bold tracking-tight text-transparent md:text-8xl">
          MS
        </span>
      </motion.div>

      <motion.div variants={conteudo}>{children}</motion.div>
    </motion.div>
  )
}