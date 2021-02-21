import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="teste">
        <form>
          <input type="text" />
          <input type="password" />
        </form>
      </Auth>
    )

    const loginBgImg = screen.getByTestId('auth-login-bg-img')
    const loginTitle = screen.getByTestId('auth-login-title')
    const loginDescription = screen.getByTestId('auth-login-description')

    expect(loginBgImg).toBeInTheDocument()
    expect(loginTitle).toBeInTheDocument()
    expect(loginDescription).toBeInTheDocument()
  })
})
