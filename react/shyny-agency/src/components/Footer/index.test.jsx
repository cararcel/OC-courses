import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'
import Footer from './'

test('Change theme', async () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  )
  const nightModeButton = screen.getByRole('button')
  expect(nightModeButton.textContent).toBe('Switch mode : ☀️')
  fireEvent.click(nightModeButton)
  expect(nightModeButton.textContent).toBe('Switch mode : 🌙')
})
