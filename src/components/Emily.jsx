import { Reveal } from '../motion/Reveal'

export function Emily({ instagramUrl }) {
  return <section id="emily" className="emily section-paper"><Reveal className="emily-copy"><p className="eyebrow">Nossa fundadora</p><h2>Uma palavra de mulher <em>para mulher.</em></h2><p>Emily Bordignoni é cristã evangélica, estudiosa da Palavra e fundadora da comunidade Mulheres que Servem. Ela acredita que toda mulher foi chamada para servir e deseja caminhar ao seu lado com base bíblica, encorajamento real e propósito para a vida de todos os dias.</p><div className="signature"><span>Suporte direto com Emily</span><a href={instagramUrl} target="_blank" rel="noreferrer">@emilybordignoni ↗</a></div></Reveal><Reveal delay={0.15} className="emily-image"><img src="assets/emily-editorial.webp" alt="Emily Bordignoni" width="1024" height="1536" loading="lazy" /><blockquote>“Juntas, podemos viver uma fé que transforma o cotidiano.”</blockquote></Reveal></section>
}
