import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render width auto by default', () => {
    renderWithTheme(<Button>Button</Button>)
    const button = screen.getByTestId('button-wrapper')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      width: 'auto'
    })
  })

  it('should render width full when fullWidth prop is true', () => {
    renderWithTheme(<Button fullWidth={true}>Button</Button>)
    const button = screen.getByTestId('button-wrapper')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      width: '100%'
    })
  })
})
