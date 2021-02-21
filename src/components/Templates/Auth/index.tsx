import * as S from './styles'

type Props = {
  children: React.ReactNode
  title: string
  description?: string
}

const Auth = ({ children, title, description }: Props) => (
  <S.Wrapper>
    <S.Illustration data-testid="auth-login-bg-img" />
    <S.ContentWrapper>
      <S.Content>
        <S.Title data-testid="auth-login-title">{title}</S.Title>
        <S.Description data-testid="auth-login-description">
          {description}
        </S.Description>
        {children}
      </S.Content>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Auth
