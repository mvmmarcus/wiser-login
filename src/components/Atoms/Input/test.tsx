import { act, fireEvent, screen } from '@testing-library/react'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render with width full by default', () => {
    renderWithTheme(<Input error={false} labelText="Label" />)

    const inputWrapper = screen.getByTestId('input-wrapper')
    const label = screen.getByTestId('input-label')
    const input = screen.getByTestId('input-input')

    expect(inputWrapper).toBeInTheDocument()
    expect(inputWrapper).toHaveStyle({ width: '100%' })

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should render with error', () => {
    renderWithTheme(<Input error={true} labelText="Label" />)

    const inputWrapper = screen.getByTestId('input-wrapper')
    const label = screen.getByTestId('input-label')
    const input = screen.getByTestId('input-input')
    const errorMessage = screen.getByTestId('input-error-message')
    const iconError = screen.getByTestId('input-icon-error')

    expect(inputWrapper).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(iconError).toBeInTheDocument()

    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle({ border: `1px solid ${theme.colors.error}` })
  })

  it('should render input and can be modified', async () => {
    renderWithTheme(<Input error={false} type="email" labelText="Label" />)

    await act(async () => {
      fireEvent.change(screen.getByTestId('input-input'), {
        target: {
          value: 'test@test.com'
        }
      })
    })
  })
})
