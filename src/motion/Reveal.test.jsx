import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reveal } from './Reveal'

describe('Reveal', () => {
  it('mantém o conteúdo disponível no DOM durante a animação', () => {
    render(<Reveal><span>Conteúdo</span></Reveal>)
    expect(screen.getByText('Conteúdo').closest('[data-reveal]')).toBeInTheDocument()
  })
})
