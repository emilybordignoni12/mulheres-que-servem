import { motion } from 'motion/react'
import { Reveal } from '../motion/Reveal'

const devices = [
  {
    label: 'No celular',
    src: 'assets/acesso-celular.png',
    alt: 'Comunidade acessada pelo celular',
    width: 1064,
    height: 1484,
  },
  {
    label: 'No computador',
    src: 'assets/acesso-computador.png',
    alt: 'Comunidade acessada pelo computador',
    width: 1187,
    height: 1334,
  },
]

export function AccessShowcase() {
  return (
    <section className="access-showcase section-paper" id="acesso" aria-labelledby="access-title">
      <Reveal className="access-heading">
        <p className="eyebrow">Acesso simples e imediato</p>
        <h2 id="access-title">Sua jornada, <em>onde você estiver.</em></h2>
        <p>Acesse a comunidade pelo celular ou computador e avance no seu ritmo.</p>
      </Reveal>
      <div className="access-gallery">
        {devices.map((device, index) => (
          <Reveal key={device.src} className={`access-frame access-frame--${index + 1}`} delay={index * 0.12}>
            <motion.figure whileHover={{ y: -6 }} transition={{ duration: 0.35 }}>
              <img src={device.src} alt={device.alt} width={device.width} height={device.height} loading="lazy" decoding="async" />
              <figcaption><span>0{index + 1}</span>{device.label}</figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
