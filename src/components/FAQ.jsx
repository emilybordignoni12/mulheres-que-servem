import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '../motion/Reveal'

export function FAQ({ items }) {
  const [active, setActive] = useState(-1)
  return <section id="duvidas" className="faq section-paper"><Reveal className="faq-heading"><p className="eyebrow">Antes de decidir</p><h2>Dúvidas <em>frequentes</em></h2><p>Transparência também é uma forma de cuidado.</p></Reveal><div className="faq-list">{items.map(([question, answer], index) => { const open = active === index; const panelId = `faq-panel-${index}`; return <article className="faq-item" key={question}><button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setActive(open ? -1 : index)}><span>{question}</span><i aria-hidden="true">{open ? '−' : '+'}</i></button><AnimatePresence initial={false}>{open ? <motion.div id={panelId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{answer}</p></motion.div> : null}</AnimatePresence></article> })}</div></section>
}
