import { Reveal } from '../motion/Reveal'

export function Devotional({ ebookUrl }) {
  return <section className="devotional section-paper"><Reveal className="devotional-art"><img src="assets/canvas/devocional-canvas.webp" alt="Devocional Chamada para Servir ao lado de uma Bíblia e flores" width="610" height="405" loading="lazy" /></Reveal><Reveal delay={0.12} className="devotional-copy"><p className="eyebrow">Devocional gratuito</p><h2>Chamada <em>para Servir</em></h2><p className="lead">21 dias para despertar para a realidade espiritual que influencia sua vida e transformar fé em prática.</p><a className="button" href={ebookUrl} target="_blank" rel="noreferrer">Começar gratuitamente <span>↗</span></a></Reveal></section>
}
