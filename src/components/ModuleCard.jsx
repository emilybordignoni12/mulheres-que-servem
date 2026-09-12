import { AnimatePresence, motion } from 'motion/react'

export function ModuleCard({ module, index, active, onToggle }) {
  const panelId = `module-panel-${index}`
  return (
    <motion.article className={`module-card ${active ? 'is-active' : ''}`} layout whileHover={{ y: -6 }} transition={{ layout: { duration: 0.35 } }}>
      <div className="module-image"><img src={module.image} alt={module.alt} width="420" height="350" loading="lazy" /></div>
      <div className="module-body">
        <span className="module-number">0{index + 1}</span>
        <button type="button" aria-expanded={active} aria-controls={panelId} onClick={() => onToggle(index)}><span><strong>{module.title}</strong><small>{module.promise}</small></span><i aria-hidden="true">{active ? '−' : '+'}</i></button>
        <AnimatePresence initial={false}>
          {active ? <motion.div id={panelId} className="module-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}><p>{module.description}</p><ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></motion.div> : null}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}
