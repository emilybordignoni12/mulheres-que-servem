import { Reveal } from '../motion/Reveal'

export function Journey() {
  return <section id="jornada" className="journey section-paper"><Reveal className="section-heading"><p className="eyebrow">Nossa jornada</p><h2>Uma jornada para <em>compreender, discernir e servir.</em></h2><p>Quatro caminhos que ajudam você a crescer na intimidade com Deus, viver com sabedoria e fazer a diferença onde Ele a colocou.</p></Reveal><Reveal delay={0.15} className="verse"><blockquote>“Mas sede transformadas pela renovação da vossa mente.”</blockquote><cite>Romanos 12:2</cite></Reveal></section>
}
