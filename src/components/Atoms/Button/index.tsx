import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, ''>

const Button = ({ children, fullWidth = false, ...props }: ButtonProps) => (
  <S.Wrapper data-testid="button-wrapper" fullWidth={fullWidth} {...props}>
    {children}
  </S.Wrapper>
)

export default Button
