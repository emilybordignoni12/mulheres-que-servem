# Mulheres que Servem — migração imersiva para React

## Objetivo

Transformar a landing page estática já aprovada em uma experiência React mais imersiva e interativa, preservando integralmente a identidade visual, a mensagem cristã, os quatro módulos, o devocional gratuito, as informações comerciais, o FAQ e os destinos externos existentes.

## Decisão arquitetural

O projeto usará React com Vite, Tailwind CSS e Framer Motion. Vue não será incluído porque React e Vue resolvem a mesma camada de interface e a combinação aumentaria o JavaScript, a manutenção e o risco de incompatibilidades sem benefício para a visitante.

O resultado continuará sendo um site estático compatível com GitHub Pages. O build gerará a pasta `dist`, publicada pelo workflow atual adaptado.

## Experiência visual

- Manter a direção artística vinho, dourado, creme, flores, Bíblia e fotografia editorial já aprovada.
- Recriar as seções em componentes reais, usando as imagens do canvas como referência visual e os recortes existentes como apoio.
- Preservar a hierarquia e a ordem: abertura, identificação da dor, jornada, quatro módulos, devocional, Emily, oferta e dúvidas frequentes.
- Usar tipografia editorial, espaços generosos, bordas douradas discretas e contraste adequado.
- Manter todos os textos, preço de R$ 197 ao ano, renovação automática, cancelamento, garantia Kiwify e suporte direto com Emily.

## Interações e movimento

- Entrada progressiva de títulos, textos e imagens durante a rolagem.
- Uma linha de progresso e mudanças graduais de profundidade responderão continuamente à posição da rolagem, fazendo a narrativa avançar junto com a visitante.
- Parallax leve e seguro apenas em elementos decorativos.
- Cards dos módulos com expansão para revelar os tópicos, resposta a hover no desktop e toque no celular.
- FAQ animado com apenas uma resposta aberta por vez.
- Barra de navegação com indicação da seção ativa e rolagem suave.
- CTAs com feedback visual e preservação automática dos parâmetros UTM no checkout.
- Transições de profundidade e luz sutis, sem efeitos excessivos que disputem atenção com a mensagem.
- Respeito a `prefers-reduced-motion`, removendo animações para quem solicitar movimento reduzido.

## Componentes

- `Header`: navegação, logotipo e CTA principal.
- `Hero`: promessa principal, imagem editorial e ações.
- `Calling`: identificação emocional e proposta da comunidade.
- `Journey`: visão geral da transformação.
- `Modules`: quatro cards interativos com conteúdo completo.
- `Devotional`: apresentação e acesso ao e-book gratuito.
- `Emily`: autoridade, proximidade e link do Instagram.
- `Offer`: preço, condições, benefícios e checkout Kiwify.
- `FAQ`: perguntas acessíveis com expansão animada.
- `Footer`: marca, navegação essencial e avisos comerciais.

O conteúdo comercial ficará centralizado em dados locais para evitar divergências entre seções e facilitar futuras alterações.

## Responsividade e desempenho

- Layout mobile-first, com alvos de toque mínimos de 44 px e nenhuma rolagem horizontal.
- Imagens responsivas em WebP, dimensões explícitas e carregamento adiado fora da primeira dobra.
- Carregamento do Framer Motion somente onde houver interação ou animação relevante.
- Componentes estáticos fora do estado global para evitar renderizações desnecessárias.
- Compatibilidade com navegadores modernos e fallback legível sem animações.

## Acessibilidade

- HTML semântico, foco visível, navegação por teclado e link para pular ao conteúdo.
- Botões e expansões com nomes acessíveis e estados `aria-expanded`.
- Textos alternativos nas imagens relevantes; ornamentos serão ignorados por leitores de tela.
- Contraste suficiente sobre fundos fotográficos.

## Publicação

- O workflow do GitHub Pages instalará as dependências, executará o build e publicará `dist`.
- A base do Vite será `/mulheres-que-servem/` para os recursos funcionarem no endereço do projeto.
- O repositório continuará público em `emilybordignoni12/mulheres-que-servem`.

## Verificação e critérios de aceite

- Build de produção concluído sem erros.
- Testes dos links Kiwify, Google Drive e Instagram.
- Parâmetros UTM preservados em todos os CTAs de compra.
- Navegação, módulos e FAQ operantes por mouse, teclado e toque.
- Verificação visual em desktop e em celular, sem overflow horizontal.
- Teste com movimento reduzido.
- Comparação visual com o canvas aprovado e manutenção da mesma identidade.
- GitHub Actions concluído com sucesso e URL pública respondendo após a atualização.

## Fora de escopo

- Checkout próprio, banco de dados, login, área de membros ou alteração da oferta.
- Coleta de leads, analytics ou integrações novas não solicitadas.
- Mudança de domínio.
