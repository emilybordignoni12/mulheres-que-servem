import { motion } from 'motion/react'
import { Reveal } from '../motion/Reveal'

export function Offer({ checkout }) {
  return <section className="offer section-dark"><div className="offer-orbit" aria-hidden="true" /><Reveal className="offer-copy"><p className="eyebrow">Comunidade Mulheres que Servem</p><h2>Um ano para <em>aprofundar sua fé.</em></h2><p>Uma jornada completa de estudo, comunhão, prática e direção para viver o propósito que Deus confiou a você.</p></Reveal><Reveal delay={0.1} className="offer-card"><div className="price"><span className="sr-only">R$ 197 por ano</span><span aria-hidden="true">R$</span><strong aria-hidden="true">197</strong><small aria-hidden="true">/ ano</small></div><ul><li>Quatro módulos completos</li><li>Acesso no celular e computador</li><li>Suporte direto com Emily</li><li>Acesso por 12 meses</li></ul><motion.a className="button button-wide" href={checkout} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Entrar para a comunidade <span>→</span></motion.a><p className="terms">Renovação automática anual. Cancele quando quiser. Garantia e reembolso conforme as regras aplicáveis da Kiwify.</p></Reveal></section>
}
