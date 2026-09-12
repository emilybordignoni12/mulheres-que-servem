import { Calling } from './components/Calling'
import { Devotional } from './components/Devotional'
import { Emily } from './components/Emily'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Modules } from './components/Modules'
import { Offer } from './components/Offer'
import { siteContent } from './content/siteContent'
import { buildCheckoutUrl } from './lib/checkout'
import { ScrollProgress } from './motion/ScrollProgress'
import { BloomIntro } from './motion/BloomIntro'
import { AccessShowcase } from './components/AccessShowcase'

export default function App() {
  const checkout = buildCheckoutUrl(siteContent.checkoutUrl, typeof window === 'undefined' ? '' : window.location.search)
  return <><ScrollProgress /><BloomIntro /><div className="site-shell"><Header checkout={checkout} /><main id="conteudo"><Hero checkout={checkout} /><Calling /><Journey /><Modules modules={siteContent.modules} /><AccessShowcase /><Devotional ebookUrl={siteContent.ebookUrl} /><Emily instagramUrl={siteContent.instagramUrl} /><Offer checkout={checkout} /><FAQ items={siteContent.faq} /></main><Footer /></div></>
}
