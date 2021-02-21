import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
}

const Button = ({ children, fullWidth = false }: ButtonProps) => (
  <S.Wrapper data-testid="button-wrapper" fullWidth={fullWidth}>
    {children}
  </S.Wrapper>
)

export default Button
