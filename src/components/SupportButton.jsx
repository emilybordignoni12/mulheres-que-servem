import { motion } from 'motion/react'

const supportMessage = 'Olá, Emily! Tenho uma dúvida sobre a comunidade Mulheres que Servem.'
const supportUrl = `https://wa.me/5517996649423?text=${encodeURIComponent(supportMessage)}`

export function SupportButton() {
  return (
    <motion.a className="support-button" href={supportUrl} target="_blank" rel="noreferrer"
      aria-label="Dúvidas? Fale comigo pelo WhatsApp"
      initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, x: -4 }} whileTap={{ scale: 0.97 }}>
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4.2A11.8 11.8 0 0 0 5.8 21.9L4.2 27.8l6-1.6A11.8 11.8 0 1 0 16 4.2Zm0 21.5c-2 0-3.8-.6-5.4-1.6l-.4-.2-3.5.9.9-3.4-.2-.4A9.7 9.7 0 1 1 16 25.7Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.7-4.2-3.8-.3-.6.3-.6.9-1.9.1-.2 0-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8 1.3-.2 2.5-1.1 2.8-2.2.4-1.1.4-2 .3-2.2-.1-.2-.3-.3-.6-.4Z" /></svg>
      <span><small>Dúvidas?</small><strong>Fale comigo</strong></span>
    </motion.a>
  )
}
