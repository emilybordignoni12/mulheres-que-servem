import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

export function Hero({ checkout }) {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 54])
  const copyY = useTransform(scrollY, [0, 650], [0, reduceMotion ? 0 : -28])
  return (
    <section id="inicio" className="hero section-dark">
      <motion.div className="hero-glow" style={{ y: imageY }} aria-hidden="true" />
      <motion.div className="hero-copy" style={{ y: copyY }} initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <p className="eyebrow">Comunidade Mulheres que Servem</p>
        <h1>Você não foi chamada para <em>florescer sozinha.</em></h1>
        <p className="lead">Uma comunidade de mulheres que desejam servir a Deus juntas, crescer na Palavra e viver um propósito que transcende o cotidiano.</p>
        <div className="hero-actions"><a className="button" href={checkout}>Quero fazer parte <span>→</span></a><a className="text-link" href="#jornada">Conhecer a jornada <span>↓</span></a></div>
      </motion.div>
      <motion.div className="hero-art" style={{ y: imageY }}><img src="assets/canvas/hero-canvas.webp" alt="Bíblia aberta entre flores sob uma luz dourada" width="968" height="768" fetchPriority="high" /></motion.div>
      <div className="scroll-cue" aria-hidden="true"><span>Role para florescer</span><i /></div>
    </section>
  )
}
