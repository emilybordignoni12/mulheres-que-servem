import { describe, expect, it } from 'vitest'
import { buildCheckoutUrl } from './checkout'

describe('buildCheckoutUrl', () => {
  it('preserva apenas parâmetros de atribuição permitidos', () => {
    expect(
      buildCheckoutUrl(
        'https://pay.kiwify.com.br/U4chBa2',
        '?utm_source=instagram&utm_campaign=lancamento&email=privado',
      ),
    ).toBe(
      'https://pay.kiwify.com.br/U4chBa2?utm_source=instagram&utm_campaign=lancamento',
    )
  })

  it('ignora parâmetros permitidos quando estão vazios', () => {
    expect(
      buildCheckoutUrl(
        'https://pay.kiwify.com.br/U4chBa2',
        '?utm_source=&src=stories',
      ),
    ).toBe('https://pay.kiwify.com.br/U4chBa2?src=stories')
  })
})
