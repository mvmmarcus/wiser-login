import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render with width full by default', () => {
    renderWithTheme(
      <Button type="button" fullWidth={true}>
        Button
      </Button>
    )
    const button = screen.getByTestId('button-wrapper')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('should render with width auto', () => {
    renderWithTheme(
      <Button type="button" onClick={() => null}>
        Button
      </Button>
    )
    const button = screen.getByTestId('button-wrapper')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      width: 'auto'
    })
  })
})
