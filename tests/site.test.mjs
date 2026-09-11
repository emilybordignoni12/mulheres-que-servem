import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

test('usa as três artes integrais do canvas na ordem aprovada', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  const images = [...html.matchAll(/src="(assets\/canvas-pagina-[123]\.png)"/g)].map(match => match[1]);
  assert.deepEqual(images, ['assets/canvas-pagina-1.png','assets/canvas-pagina-2.png','assets/canvas-pagina-3.png']);
  for (const image of images) await access(join(root, image));
});

test('checkout, ebook e Instagram estão ligados às áreas clicáveis', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  assert.match(html, /https:\/\/pay\.kiwify\.com\.br\/U4chBa2/);
  assert.match(html, /https:\/\/drive\.google\.com\/file\/d\/145AngcTvZ_COGaTWghNKTkECSkTPYaRQ\/view/);
  assert.match(html, /https:\/\/www\.instagram\.com\/emilybordignoni\//);
  assert.ok((html.match(/class="[^"]*hotspot/g) || []).length >= 10);
});

test('as artes mantêm proporção e têm descrição acessível', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  for (const tag of html.match(/<img[^>]+canvas-pagina-[123][^>]+>/g) || []) {
    assert.match(tag, /width="\d+"/);
    assert.match(tag, /height="\d+"/);
    assert.match(tag, /alt="[^"]+"/);
  }
});

test('CSS mantém as artes sem recorte ou deformação', async () => {
  const css = await readFile(join(root, 'styles.css'), 'utf8');
  assert.match(css, /img\{display:block;width:100%;height:auto\}/);
  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
});

test('checkout preserva apenas parâmetros de rastreamento autorizados', () => {
  const { buildCheckoutUrl } = require(join(root, 'script.js'));
  const result = new URL(buildCheckoutUrl('https://pay.kiwify.com.br/U4chBa2','?utm_source=instagram&email=privado%40teste.com&src=bio'));
  assert.equal(result.searchParams.get('utm_source'), 'instagram');
  assert.equal(result.searchParams.get('src'), 'bio');
  assert.equal(result.searchParams.has('email'), false);
});

test('inclui dúvidas frequentes acessíveis sem alterar as artes do canvas', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  assert.match(html, /id="duvidas"/);
  assert.ok((html.match(/<details class="faq-item"/g) || []).length >= 7);
  assert.match(html, /Renovação automática/i);
  assert.match(html, /outra denominação/i);
  assert.match(html, /reembolso/i);
  assert.match(html, /href="#duvidas"/);
});

test('oferece uma composição mobile dedicada e legível', async () => {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  const css = await readFile(join(root, 'styles.css'), 'utf8');
  assert.match(html, /class="mobile-site"/);
  assert.match(html, /class="mobile-module/);
  assert.match(html, /mobile-offer/);
  assert.match(css, /@media\(max-width:700px\)/);
  assert.match(css, /min-height:52px/);
  assert.match(css, /\.mobile-site\{display:block/);
  assert.match(css, /\.canvas-frame\{display:none/);
});
