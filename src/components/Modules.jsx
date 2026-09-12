import { useState } from 'react'
import { Reveal } from '../motion/Reveal'
import { ModuleCard } from './ModuleCard'

export function Modules({ modules }) {
  const [active, setActive] = useState(0)
  return <section id="modulos" className="modules section-dark"><Reveal className="section-heading centered"><p className="eyebrow">O que você vai aprender</p><h2>Quatro caminhos. <em>Uma transformação.</em></h2><p>Toque em cada módulo para descobrir o que será aprofundado durante a jornada.</p></Reveal><div className="module-grid">{modules.map((module, index) => <Reveal key={module.title} delay={index * 0.08}><ModuleCard module={module} index={index} active={active === index} onToggle={(next) => setActive(active === next ? -1 : next)} /></Reveal>)}</div></section>
}
