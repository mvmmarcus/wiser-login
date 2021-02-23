import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Spinner from '.'

describe('<Spinner />', () => {
  it('should render the Spinner', () => {
    renderWithTheme(<Spinner />)

    const spinner = screen.getByTestId('spinner-wrapper')

    expect(spinner).toBeInTheDocument()
  })
})
