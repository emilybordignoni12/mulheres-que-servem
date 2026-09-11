---
version: alpha
name: "Mulheres que Servem"
description: "Landing page editorial cristã, acolhedora e solene, para apresentar a comunidade de Emily Bordignoni."
colors:
  espresso: "#24150f"
  brown: "#3b2117"
  burgundy: "#681c2a"
  burgundyDark: "#47121d"
  gold: "#c69a52"
  goldLight: "#e2be7a"
  paper: "#f4ecdf"
  paperDeep: "#e9dcc9"
  ink: "#2a1711"
  muted: "#725f54"
  light: "#fbf5eb"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
rounded:
  DEFAULT: "8px"
  sm: "8px"
  md: "20px"
  pill: "999px"
spacing:
  sectionGap: "120px"
  pageMax: "1180px"
components:
  button:
    minHeight: "58px"
  card:
    radius: "20px"
  accordion:
    minTarget: "48px"
---

# Mulheres que Servem Design System

## Overview

### Creative North Star

Um livro devocional antigo aberto sobre uma mesa de madeira, iluminado por luz dourada, com flores profundas em vinho e um detalhe de ouro envelhecido. A página deve parecer uma experiência editorial cristã íntima e bem cuidada — não um anúncio agressivo.

### Product context and register

- **Audience and primary job:** mulheres cristãs brasileiras que desejam conhecer a Bíblia com profundidade e decidir com segurança se a comunidade é adequada para sua jornada.
- **Target market and evidence:** Brasil; conteúdo, preço e checkout fornecidos pela fundadora em português brasileiro.
- **Locale and language policy:** pt-BR em toda a interface e nos nomes acessíveis.
- **Usage scene:** descoberta principalmente pelo celular, seguida por leitura, avaliação da oferta e saída para o checkout da Kiwify.
- **Register:** marca editorial com áreas utilitárias mais contidas em preço, garantia e perguntas frequentes.
- **Memorable signature:** alternância entre faixas de pergaminho claro e cenas escuras com retratos, Bíblia e detalhes florais.
- **Restraint:** preço, renovação, cancelamento, garantia e links devem ser inequívocos, sem efeitos decorativos que prejudiquem a leitura.
- **Anti-references:** páginas de infoproduto neon, cronômetros falsos, escassez artificial, depoimentos inventados e iconografia genérica em excesso.
- **Token ownership/runtime mapping:** este documento espelha os tokens canônicos declarados em `styles.css`; alterações de sistema devem atualizar ambos juntos.

## Colors

Espresso e marrom formam as superfícies de imersão. Papel e papel profundo sustentam textos longos. Borgonha identifica ações de compra; ouro é expressivo e também o foco visível. Texto principal usa ink e o texto secundário usa muted. A experiência é deliberadamente de tema único; contraste e modo de cores forçadas permanecem responsabilidade do navegador.

## Typography

Georgia é a voz editorial dos títulos, citações e numerais de módulos. Inter com fallbacks de sistema é usada para leitura, navegação e termos comerciais. Parágrafos ficam próximos de 17px com entrelinha generosa; caixa alta é reservada a rótulos curtos.

## Layout

O conteúdo utiliza largura máxima de 1180px, respiro vertical de 120px em telas amplas e redução progressiva no celular. A página se transforma em uma coluna abaixo de 760px. Imagens reservam proporção para evitar deslocamentos. O CTA móvel respeita a área segura inferior.

## Elevation & Depth

Profundidade vem de vinhetas fotográficas, bordas douradas translúcidas e sombras amplas e suaves. Superfícies de texto permanecem planas. Blur é permitido somente no cabeçalho fixo após rolagem.

## Shapes

Botões e pequenos controles usam raio de 8px; cartões editoriais usam 20px. Elementos circulares aparecem apenas como selos, números e marca. Divisórias são linhas finas em ouro envelhecido.

## Components

### Foundational visual states

Links e botões possuem hover, active e foco visível dourado. Elementos ocultos permanecem fora da ordem de leitura quando fechados. Revelações usam movimento curto; com preferência por movimento reduzido, transições e rolagem suave são desativadas.

### Buttons and actions

O botão primário é borgonha com borda dourada; o secundário é transparente. A redação indica o destino: conhecer a comunidade, baixar o devocional ou ir para o checkout.

### Navigation and data display

O cabeçalho é transparente no topo e ganha fundo espresso após a rolagem. No celular, a navegação abre em painel simples e preserva um CTA de compra fixo.

### Forms and overlays

Não há formulários nem sobreposições. A FAQ usa botões nativos com `aria-expanded` e respostas associadas por `aria-controls`.

### Iconography

Símbolos lineares simples e pequenos ornamentos tipográficos. Ícones nunca substituem rótulos essenciais.

### Motion

Entradas discretas ao revelar seções e respostas rápidas no acordeão. Movimento serve apenas para orientar continuidade e estado.

### Content and data visualization

Voz acolhedora, bíblica e direta. Evita promessas garantidas de cura ou transformação e expõe claramente preço anual, renovação automática, cancelamento e garantia conforme a Kiwify.

## Do's and Don'ts

- **Do:** usar imagens em tons quentes e profundos, com textura editorial e boa legibilidade.
- **Do:** repetir a ação de compra somente em pontos naturais da jornada.
- **Don't:** criar urgência, escassez, depoimentos ou resultados não comprovados.
- **Don't:** reduzir a clareza comercial em favor de ornamentação.
