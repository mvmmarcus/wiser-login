import styled, { css } from 'styled-components'
import { CustomBodyProps } from '.'

type CustomBodyContainerProps = Pick<CustomBodyProps, 'error'>

export const CustomBodyContainer = styled.div<CustomBodyContainerProps>`
  ${({ error, theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 500px;
    position: absolute;
    padding: 12px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    background: ${error ? theme.colors.error : theme.colors.success};
  `}
`
