import { fireEvent, screen, act } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import FormSignin from '.'

describe('<FormSignin />', () => {
  it('should render the form', () => {
    const handleSubmit = jest.fn()

    renderWithTheme(<FormSignin isSubmiting={false} onSubmit={handleSubmit} />)

    const formWrapper = screen.getByTestId('form-wrapper')
    const form = screen.getByTestId('form-form')
    const formInputEmail = screen.getByTestId('form-input-email')
    const formInputPassword = screen.getByTestId('form-input-password')
    const formButton = screen.getByTestId('form-button')
    const formDescription = screen.getByTestId('form-description')

    expect(formWrapper).toBeInTheDocument()
    expect(form).toBeInTheDocument()
    expect(formInputEmail).toBeInTheDocument()
    expect(formInputPassword).toBeInTheDocument()
    expect(formButton).toBeInTheDocument()
    expect(formDescription).toBeInTheDocument()
  })

  it('Form can be submited & input field is modifiable', async () => {
    const mockOnSubmit = jest.fn()
    renderWithTheme(<FormSignin isSubmiting={false} onSubmit={mockOnSubmit} />)

    await act(async () => {
      fireEvent.change(screen.getByTestId('form-input-email'), {
        target: { value: 'teste@mail.com' }
      })

      fireEvent.change(screen.getByTestId('form-input-password'), {
        target: { value: '123456' }
      })
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId('form-button'))
    })

    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
