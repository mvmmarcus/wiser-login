import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return <S.Button>{children}</S.Button>
}

export default Button
