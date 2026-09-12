import { motion, useReducedMotion } from 'motion/react'

export function Reveal({ children, className = '', delay = 0, y = 34 }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      data-reveal
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
