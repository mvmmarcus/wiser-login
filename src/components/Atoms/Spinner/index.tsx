import theme from 'styles/theme'

import * as S from './styles'

export type SpinnerProps = {
  color?: string
  size?: number
}

const Spinner = ({ color = theme.colors.primary, size = 40 }: SpinnerProps) => (
  <S.Wrapper data-testid="spinner-wrapper">
    <S.Spinner size={size} viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth="5"
      ></circle>
    </S.Spinner>
  </S.Wrapper>
)

export default Spinner
