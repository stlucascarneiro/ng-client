import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'atoms/theme'
import { Button } from 'components'

describe('Botão Simples', () => {
  it('Executa uma função onClick', () => {
    const clickHandler = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={clickHandler}>teste</Button>
      </ThemeProvider>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(clickHandler).toHaveBeenCalled()
  })
})