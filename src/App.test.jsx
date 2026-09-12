import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('apresenta a primeira dobra, navegação e checkout', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /você não foi chamada/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /principal/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /quero fazer parte/i })[0]).toHaveAttribute('href', expect.stringContaining('kiwify.com.br'))
  })

  it('mantém o conteúdo essencial da oferta', () => {
    render(<App />)
    expect(screen.getByText(/R\$ 197/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /quatro caminhos/i })).toBeInTheDocument()
  })
})
