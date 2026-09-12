import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

const flowers = [
  { x: '10%', size: 'clamp(112px, 15vw, 230px)', delay: 0.02, color: 'ivory', tilt: -8 },
  { x: '29%', size: 'clamp(130px, 18vw, 270px)', delay: 0.12, color: 'wine', tilt: 6 },
  { x: '50%', size: 'clamp(150px, 21vw, 320px)', delay: 0.2, color: 'blush', tilt: -2 },
  { x: '71%', size: 'clamp(126px, 17vw, 260px)', delay: 0.3, color: 'wine', tilt: 8 },
  { x: '90%', size: 'clamp(108px, 14vw, 215px)', delay: 0.38, color: 'ivory', tilt: -6 },
]

function BloomFlower({ progress, flower, reduced }) {
  const start = flower.delay
  const end = Math.min(start + 0.42, 0.92)
  const scale = useTransform(progress, [start, end], reduced ? [1, 1] : [0.24, 1])
  const rotate = useTransform(progress, [start, end], reduced ? [flower.tilt, flower.tilt] : [flower.tilt - 24, flower.tilt])
  const petalSpread = useTransform(progress, [start, end], reduced ? [1, 1] : [0.22, 1])
  const glow = useTransform(progress, [start, end], [0.1, 0.72])

  return (
    <motion.div
      className={`bloom-flower bloom-flower--${flower.color}`}
      data-testid="bloom-flower"
      style={{ left: flower.x, width: flower.size, height: flower.size, scale, rotate, opacity: glow }}
      aria-hidden="true"
    >
      <motion.div className="bloom-flower__petals" style={{ scale: petalSpread }}>
        <svg viewBox="0 0 200 200" focusable="false">
          <g className="bloom-flower__outer">
            {Array.from({ length: 12 }, (_, index) => (
              <ellipse key={index} cx="100" cy="48" rx="27" ry="54" transform={`rotate(${index * 30} 100 100)`} />
            ))}
          </g>
          <g className="bloom-flower__middle">
            {Array.from({ length: 9 }, (_, index) => (
              <ellipse key={index} cx="100" cy="66" rx="23" ry="40" transform={`rotate(${index * 40 + 12} 100 100)`} />
            ))}
          </g>
          <g className="bloom-flower__inner">
            {Array.from({ length: 7 }, (_, index) => (
              <ellipse key={index} cx="100" cy="79" rx="18" ry="28" transform={`rotate(${index * 51.4} 100 100)`} />
            ))}
          </g>
          <circle className="bloom-flower__heart" cx="100" cy="100" r="18" />
        </svg>
      </motion.div>
      <span className="bloom-flower__stem" />
    </motion.div>
  )
}

export function BloomIntro() {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const progress = reduced ? { get: () => 1, on: () => () => {} } : scrollYProgress
  const copyY = useTransform(scrollYProgress, [0, 0.72], reduced ? [0, 0] : [0, -34])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72, 0.96], reduced ? [1, 1, 1] : [1, 1, 0.18])
  const mistOpacity = useTransform(scrollYProgress, [0, 0.7], [0.2, 0.78])

  return (
    <section ref={sectionRef} className={`bloom-intro${reduced ? ' bloom-intro--reduced' : ''}`} aria-labelledby="bloom-title">
      <div className="bloom-intro__stage">
        <motion.div className="bloom-intro__mist" style={{ opacity: mistOpacity }} aria-hidden="true" />
        <motion.div className="bloom-intro__copy" style={{ y: copyY, opacity: copyOpacity }}>
          <p>Uma jornada começa quando a fé encontra companhia</p>
          <h1 id="bloom-title">Você não foi feita para <em>florescer sozinha.</em></h1>
          <span>Role para ver florescer</span>
        </motion.div>
        <div className="bloom-garden">
          {flowers.map((flower) => <BloomFlower key={flower.x} flower={flower} progress={progress} reduced={reduced} />)}
        </div>
      </div>
    </section>
  )
}
