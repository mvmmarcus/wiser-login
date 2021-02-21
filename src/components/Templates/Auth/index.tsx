import * as S from './styles'

type Props = {
  children: React.ReactNode
  title: string
  description?: string
}

const Auth = ({ children, title, description }: Props) => (
  <S.Wrapper>
    <S.IllustrationWrapper>
      <S.IllustrationGradient />

      <S.Illustration
        src="/img/login-illustration.png"
        alt="A woman using her computer"
      />
    </S.IllustrationWrapper>

    <S.ContentWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Content>{children}</S.Content>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Auth
