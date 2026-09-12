import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { siteContent } from '../content/siteContent'
import { ModuleCard } from './ModuleCard'

describe('ModuleCard', () => {
  it('comunica e solicita a expansão do módulo', async () => {
    const onToggle = vi.fn()
    render(<ModuleCard module={siteContent.modules[0]} index={0} active={false} onToggle={onToggle} />)
    const button = screen.getByRole('button', { name: /mundo espiritual/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(button)
    expect(onToggle).toHaveBeenCalledWith(0)
  })
})
