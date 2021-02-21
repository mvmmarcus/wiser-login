import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputProps = {
  labelText?: string
  error: boolean
  errorText?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, ''>

const Input = ({
  labelText = 'LABEL',
  error = false,
  errorText = 'error',
  ...props
}: InputProps) => (
  <S.Wrapper data-testid="input-wrapper">
    <S.Label data-testid="input-label">{labelText}</S.Label>
    <S.InputWrapper>
      <S.Input data-testid="input-input" error={error} {...props} />
      {!!error && (
        <S.ErrorIcon data-testid="input-icon-error" src="img/icon-error.svg" />
      )}
    </S.InputWrapper>
    {!!error && (
      <S.ErrorMessage data-testid="input-error-message">
        {errorText}
      </S.ErrorMessage>
    )}
  </S.Wrapper>
)

export default Input
