import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { siteContent } from '../content/siteContent'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('abre uma resposta e atualiza o estado acessível', async () => {
    render(<FAQ items={siteContent.faq} />)
    const button = screen.getByRole('button', { name: /conhecimento avançado/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/diferentes momentos da fé/i)).toBeInTheDocument()
  })
})
