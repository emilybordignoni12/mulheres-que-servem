import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const links = [['Jornada', '#jornada'], ['Módulos', '#modulos'], ['Emily', '#emily'], ['Dúvidas', '#duvidas']]

export function Header({ checkout }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Mulheres que Servem — início">
        <img src="assets/mulheres-que-servem-logo.jpg" alt="" width="96" height="96" />
        <span>Mulheres<small>que servem</small></span>
      </a>
      <nav aria-label="Navegação principal" className="desktop-nav">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="button button-small header-cta" href={checkout}>Quero fazer parte</a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
        <span className="sr-only">Abrir menu</span><i /><i />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.nav id="mobile-menu" aria-label="Navegação principal móvel" className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a className="button" href={checkout}>Quero fazer parte</a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
