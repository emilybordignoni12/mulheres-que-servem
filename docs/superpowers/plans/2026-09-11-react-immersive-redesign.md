# React Immersive Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrar a landing page Mulheres que Servem para React com uma narrativa imersiva orientada pela rolagem, interações úteis e publicação estática confiável no GitHub Pages.

**Architecture:** Vite gerará um aplicativo React estático com seções isoladas e conteúdo comercial centralizado. Tailwind CSS fornecerá tokens e utilitários, enquanto Framer Motion controlará revelações, parallax, progresso de leitura e estados interativos com fallback para movimento reduzido.

**Tech Stack:** React 19, Vite 7, Tailwind CSS 4, Motion for React (`motion`), Vitest, Testing Library, Playwright e GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-11-react-immersive-redesign.md`

## Global Constraints

- Preservar integralmente os textos, a identidade visual e a ordem das seções aprovadas.
- Manter checkout `https://pay.kiwify.com.br/U4chBa2`, e-book, Instagram, preço de R$ 197, condições comerciais e suporte direto com Emily.
- Usar base Vite `/mulheres-que-servem/` em produção.
- Não incluir Vue, checkout próprio, banco de dados, login, analytics ou novas integrações.
- Garantir alvos de toque de 44 px, foco visível, navegação por teclado, ausência de overflow horizontal e suporte a `prefers-reduced-motion`.
- Publicar somente após testes, build, comparação visual desktop/mobile e validação dos links externos.

---

### Task 1: Fundação React e contrato de conteúdo

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/content/siteContent.js`
- Create: `src/lib/checkout.js`
- Create: `src/lib/checkout.test.js`
- Modify: `index.html`

**Interfaces:**
- Produces: `siteContent: SiteContent`; `buildCheckoutUrl(baseUrl: string, search?: string): string`; `App(): JSX.Element`.
- Consumes: conteúdo e URLs do HTML estático aprovado.

- [ ] **Step 1: Escrever o teste inicial de atribuição**

```js
import { describe, expect, it } from 'vitest'
import { buildCheckoutUrl } from './checkout'

describe('buildCheckoutUrl', () => {
  it('preserva apenas parâmetros de atribuição permitidos', () => {
    expect(buildCheckoutUrl('https://pay.kiwify.com.br/U4chBa2', '?utm_source=instagram&email=privado')).toBe(
      'https://pay.kiwify.com.br/U4chBa2?utm_source=instagram'
    )
  })
})
```

- [ ] **Step 2: Instalar dependências e comprovar a falha**

Run: `npm install && npm test -- --run src/lib/checkout.test.js`

Expected: FAIL porque `src/lib/checkout.js` ainda não existe.

- [ ] **Step 3: Criar a base mínima e o conteúdo centralizado**

```js
const allowed = new Set(['utm_source','utm_medium','utm_campaign','utm_term','utm_content','src','sck','s1','s2','s3'])
export function buildCheckoutUrl(baseUrl, search = '') {
  const destination = new URL(baseUrl)
  new URLSearchParams(search.replace(/^\?/, '')).forEach((value, key) => {
    if (allowed.has(key) && value) destination.searchParams.set(key, value)
  })
  return destination.toString()
}
```

`siteContent` deve conter as quatro seções de módulo, sete FAQs, oferta, URLs e textos atuais; `App` deve renderizar as seções na ordem do spec.

- [ ] **Step 4: Verificar teste e build**

Run: `npm test -- --run src/lib/checkout.test.js && npm run build`

Expected: PASS e pasta `dist` criada sem erros.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.js index.html src
git commit -m "feat: migrate landing page foundation to React"
```

### Task 2: Sistema visual e estrutura responsiva

**Files:**
- Create: `src/styles.css`
- Create: `src/components/Header.jsx`
- Create: `src/components/Hero.jsx`
- Create: `src/components/Calling.jsx`
- Create: `src/components/SectionHeading.jsx`
- Modify: `src/App.jsx`
- Test: `src/App.test.jsx`

**Interfaces:**
- Consumes: `siteContent`; `buildCheckoutUrl`.
- Produces: `Header`, `Hero`, `Calling` e `SectionHeading`, todos com HTML semântico e classes Tailwind.

- [ ] **Step 1: Escrever teste da primeira dobra**

```jsx
render(<App />)
expect(screen.getByRole('heading', { name: /você não foi chamada/i })).toBeInTheDocument()
expect(screen.getAllByRole('link', { name: /quero fazer parte/i })[0]).toHaveAttribute('href', expect.stringContaining('kiwify.com.br'))
expect(screen.getByRole('navigation')).toBeInTheDocument()
```

- [ ] **Step 2: Executar e confirmar falha**

Run: `npm test -- --run src/App.test.jsx`

Expected: FAIL por ausência da estrutura React completa.

- [ ] **Step 3: Implementar tokens e primeira dobra responsiva**

Definir em `src/styles.css` as variáveis `--wine: #681c2a`, `--paper: #f3eadc`, `--espresso: #211109`, `--gold: #d7aa58`; configurar Tailwind; construir navegação, hero e Calling com as imagens existentes, `min-h-[100svh]`, focos visíveis e CTAs de 44 px.

- [ ] **Step 4: Verificar componente e build**

Run: `npm test -- --run src/App.test.jsx && npm run build`

Expected: PASS, sem avisos de JSX e sem referências quebradas a assets.

- [ ] **Step 5: Commit**

```bash
git add src index.html
git commit -m "feat: build responsive editorial foundation"
```

### Task 3: Narrativa imersiva orientada pela rolagem

**Files:**
- Create: `src/motion/useMotionPreferences.js`
- Create: `src/motion/Reveal.jsx`
- Create: `src/motion/ScrollProgress.jsx`
- Create: `src/components/Journey.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Calling.jsx`
- Modify: `src/App.jsx`
- Test: `src/motion/Reveal.test.jsx`

**Interfaces:**
- Produces: `useMotionPreferences(): { reduceMotion: boolean }`; `Reveal({children, delay, y}): JSX.Element`; `ScrollProgress(): JSX.Element`.
- Consumes: Framer Motion `motion`, `useScroll`, `useTransform`, `useReducedMotion`.

- [ ] **Step 1: Escrever teste de movimento reduzido**

```jsx
render(<Reveal><span>Conteúdo</span></Reveal>)
expect(screen.getByText('Conteúdo')).toBeVisible()
expect(screen.getByText('Conteúdo').closest('[data-reveal]')).toBeInTheDocument()
```

- [ ] **Step 2: Executar e confirmar falha**

Run: `npm test -- --run src/motion/Reveal.test.jsx`

Expected: FAIL porque `Reveal` não existe.

- [ ] **Step 3: Implementar movimento ligado à rolagem**

Usar `useScroll` para uma linha dourada fixa com `scaleX: scrollYProgress`; em cada seção, usar `whileInView`, `viewport={{ once: true, amount: 0.25 }}` e transições de 0,6–0,9 s; no hero, mapear `scrollYProgress` para deslocamento máximo de 48 px e escala 1–1,04. Quando `useReducedMotion()` for verdadeiro, retornar transformações estáticas.

- [ ] **Step 4: Verificar testes e build**

Run: `npm test -- --run src/motion/Reveal.test.jsx && npm run build`

Expected: PASS e bundle produzido sem importar a biblioteca inteira por namespace.

- [ ] **Step 5: Commit**

```bash
git add src/motion src/components src/App.jsx
git commit -m "feat: add scroll-driven immersive narrative"
```

### Task 4: Módulos, devocional, Emily e oferta interativos

**Files:**
- Create: `src/components/Modules.jsx`
- Create: `src/components/ModuleCard.jsx`
- Create: `src/components/Devotional.jsx`
- Create: `src/components/Emily.jsx`
- Create: `src/components/Offer.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/ModuleCard.test.jsx`

**Interfaces:**
- Produces: `ModuleCard({ module, index, active, onToggle })`; `Modules`, `Devotional`, `Emily`, `Offer`.
- Consumes: módulos e oferta em `siteContent`; `Reveal`; `buildCheckoutUrl`.

- [ ] **Step 1: Escrever teste de expansão acessível**

```jsx
render(<ModuleCard module={siteContent.modules[0]} index={0} active={false} onToggle={vi.fn()} />)
const button = screen.getByRole('button', { name: /mundo espiritual/i })
expect(button).toHaveAttribute('aria-expanded', 'false')
await userEvent.click(button)
expect(onToggle).toHaveBeenCalledWith(0)
```

- [ ] **Step 2: Executar e confirmar falha**

Run: `npm test -- --run src/components/ModuleCard.test.jsx`

Expected: FAIL porque `ModuleCard` não existe.

- [ ] **Step 3: Implementar cartões e seções comerciais**

Os cards devem responder a hover, foco e toque, expandindo o conteúdo com `AnimatePresence` e `layout`; manter apenas um card ativo. Devocional, Emily e Oferta devem usar recortes existentes, revelação em camadas e CTAs reais, sem carrossel automático ou movimento incessante.

- [ ] **Step 4: Verificar interação e conteúdo**

Run: `npm test -- --run src/components/ModuleCard.test.jsx src/App.test.jsx && npm run build`

Expected: PASS; os quatro módulos, R$ 197 e os links externos aparecem no DOM.

- [ ] **Step 5: Commit**

```bash
git add src/components src/App.jsx src/content
git commit -m "feat: add interactive journey and offer sections"
```

### Task 5: FAQ, navegação ativa e qualidade de interação

**Files:**
- Create: `src/components/FAQ.jsx`
- Create: `src/components/Footer.jsx`
- Create: `src/hooks/useActiveSection.js`
- Modify: `src/components/Header.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/FAQ.test.jsx`

**Interfaces:**
- Produces: `FAQ({ items })`; `useActiveSection(ids: string[]): string`; `Footer()`.
- Consumes: `siteContent.faq`; IDs `inicio`, `jornada`, `modulos`, `emily`, `duvidas`.

- [ ] **Step 1: Escrever teste do acordeão**

```jsx
render(<FAQ items={siteContent.faq} />)
const first = screen.getByRole('button', { name: /conhecimento avançado/i })
await userEvent.click(first)
expect(first).toHaveAttribute('aria-expanded', 'true')
expect(screen.getByText(/diferentes momentos da fé/i)).toBeVisible()
```

- [ ] **Step 2: Executar e confirmar falha**

Run: `npm test -- --run src/components/FAQ.test.jsx`

Expected: FAIL porque o componente ainda não existe.

- [ ] **Step 3: Implementar FAQ e navegação**

Usar botões reais com `aria-controls`, `aria-expanded` e `AnimatePresence`; uma pergunta aberta por vez. `useActiveSection` deve usar `IntersectionObserver` e o Header deve refletir a seção ativa sem alterar o histórico durante a rolagem.

- [ ] **Step 4: Executar suíte completa**

Run: `npm test -- --run && npm run build`

Expected: todos os testes PASS.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: complete accessible interactive navigation"
```

### Task 6: QA visual, desempenho e GitHub Pages

**Files:**
- Create: `tests/e2e/site.spec.js`
- Create: `playwright.config.js`
- Modify: `.github/workflows/pages.yml`
- Modify: `README.md`
- Modify: `design-qa.md`

**Interfaces:**
- Consumes: build Vite em `dist`; URL pública do GitHub Pages.
- Produces: workflow de deploy de `dist` e evidências de QA desktop/mobile.

- [ ] **Step 1: Escrever teste de ponta a ponta**

```js
test('jornada principal funciona no celular', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /florescer sozinha/i })).toBeVisible()
  await page.getByRole('button', { name: /mundo espiritual/i }).click()
  await expect(page.getByText(/anjos e demônios/i)).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
```

- [ ] **Step 2: Executar o E2E antes dos ajustes finais**

Run: `npm run build && npm run test:e2e`

Expected: qualquer falha deve apontar diretamente para responsividade, interação ou caminho de asset.

- [ ] **Step 3: Adaptar o workflow de publicação**

O workflow deve usar Node 24, `npm ci`, `npm run build` e `actions/upload-pages-artifact` com `path: dist`; manter permissões `contents: read`, `pages: write`, `id-token: write` e ambiente `github-pages`.

- [ ] **Step 4: Fazer a verificação final**

Run: `npm test -- --run && npm run build && npm run test:e2e`

Expected: PASS. No Browser, validar 1440×1000 e 390×844, movimento reduzido, links Kiwify/Drive/Instagram, ausência de overflow e imagens carregadas; comparar capturas com os três canvas aprovados e registrar cinco pontos no `design-qa.md`.

- [ ] **Step 5: Commit, push e deploy**

```bash
git add .github/workflows/pages.yml README.md design-qa.md tests playwright.config.js package.json package-lock.json
git commit -m "ci: publish React build to GitHub Pages"
git push origin main
```

Monitorar o GitHub Actions até `Success` e validar `https://emilybordignoni12.github.io/mulheres-que-servem/` antes da entrega.
