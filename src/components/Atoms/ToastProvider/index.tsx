import { ToastContainer, Slide } from 'react-toastify'

import * as S from './styles'

export type CustomBodyProps = {
  error?: boolean
  message?: string
}

export const CustomBody = ({ error, message }: CustomBodyProps) => (
  <S.CustomBodyContainer data-testid="toast-custom-body" error={error}>
    {message}
  </S.CustomBodyContainer>
)

export const ToastProvider = () => (
  <div data-testid="toast-container">
    <ToastContainer
      autoClose={3000}
      hideProgressBar
      closeOnClick={true}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      transition={Slide}
      toastStyle={{ position: 'relative' }}
    />
  </div>
)

export default ToastProvider
