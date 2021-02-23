import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { CustomBody as ToastCustomBody, ToastProvider } from '.'

describe('<ToastProvider />', () => {
  it('should render the success toast', () => {
    renderWithTheme(<ToastCustomBody message="error message" error={false} />)

    const toast = screen.getByTestId('toast-custom-body')

    expect(toast).toBeInTheDocument()
    expect(toast).toHaveStyle({ background: theme.colors.success })
  })

  it('should render the error toast', () => {
    renderWithTheme(<ToastCustomBody message="success message" error />)

    const toast = screen.getByTestId('toast-custom-body')

    expect(toast).toBeInTheDocument()
    expect(toast).toHaveStyle({ background: theme.colors.error })
  })

  it('should render the toast container', () => {
    renderWithTheme(<ToastProvider />)

    const toastProvider = screen.getByTestId('toast-container')

    expect(toastProvider).toBeInTheDocument()
  })
})
