import { siteContent } from './content/siteContent'
import { buildCheckoutUrl } from './lib/checkout'

export default function App() {
  const checkout = buildCheckoutUrl(siteContent.checkoutUrl, typeof window === 'undefined' ? '' : window.location.search)
  return (
    <main id="conteudo">
      <section id="inicio"><h1>Você não foi chamada para florescer sozinha.</h1><a href={checkout}>Quero fazer parte</a></section>
      <section id="jornada"><h2>Uma jornada para compreender, discernir e servir.</h2></section>
      <section id="modulos"><h2>Quatro módulos</h2></section>
      <section id="emily"><h2>Uma palavra de mulher para mulher.</h2></section>
      <section id="duvidas"><h2>Dúvidas frequentes</h2></section>
    </main>
  )
}
