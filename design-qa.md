# Design QA

## Redesign React imersivo

- Primeira dobra: composição, texto, navegação, imagem e CTA preservados em relação ao canvas aprovado.
- Tipografia: contraste editorial entre títulos serifados e textos funcionais mantido.
- Paleta: vinho, dourado, creme e espresso preservados sem filtros que prejudiquem as fotografias.
- Movimento: progresso de leitura, revelações, parallax leve e expansões respondem à rolagem, foco, hover e toque.
- Mobile: verificado em 390 × 844, sem overflow horizontal e com CTA principal visível.
- Interações: módulos e FAQ atualizam `aria-expanded`; checkout, e-book e Instagram permanecem acessíveis.
- Imagens: nenhum recurso quebrado na verificação do navegador.

- Referência: as três artes de canvas fornecidas pela usuária.
- Implementação: cada arte é exibida integralmente, em ordem, com `width: 100%` e `height: auto`.
- Fidelidade: não há reconstrução, recorte, sobreposição visual ou alteração de proporção.
- Interação: áreas clicáveis acompanham proporcionalmente os botões de navegação, checkout, ebook e Instagram.
- Acessibilidade: imagens possuem textos alternativos, conteúdo semântico complementar e foco visível nos links.
- Desktop: conferido no navegador local contra a primeira arte original.
- Mobile: escala proporcional preservada; nenhuma imagem é deformada.
- FAQ: acrescentada após as três artes, sem alterar seus arquivos ou proporções; abertura da resposta conferida no navegador.

Final result: passed
