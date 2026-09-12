import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('abre a jornada com um jardim que floresce antes do conteúdo', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /você não foi feita para florescer sozinha/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('bloom-flower')).toHaveLength(5)
  })

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

  it('mostra que a comunidade pode ser acessada pelo celular e computador', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sua jornada, onde você estiver/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /comunidade acessada pelo celular/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /comunidade acessada pelo computador/i })).toBeInTheDocument()
  })

  it('oferece suporte para dúvidas pelo WhatsApp da Emily', () => {
    render(<App />)
    const suporte = screen.getByRole('link', { name: /dúvidas.*fale comigo pelo whatsapp/i })

    expect(suporte).toHaveAttribute('href', expect.stringContaining('wa.me/5517996649423'))
    expect(suporte).toHaveAttribute('href', expect.stringContaining('Tenho%20uma%20d%C3%BAvida'))
    expect(suporte).toHaveAttribute('target', '_blank')
  })
})
