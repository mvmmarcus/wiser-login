import media from 'styled-media-query'

import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'fullWidth'>

const WrapperModifiers = {
  fullWIdth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, fullWidth }) => css`
    background: linear-gradient(
      267.79deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.tertiary} 99.18%
    );
    border-radius: 8px;
    padding: 14px;
    text-align: center;
    width: auto;
    ${!!fullWidth && WrapperModifiers.fullWIdth()}
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.medium};
    outline: none;
    border: none;
    cursor: pointer;
    transition: ${theme.transition.default};
    transition-property: opacity;

    ${media.greaterThan('medium')`
      box-shadow: 0px 10px 25px ${theme.colors.shadow};

      &:hover {
        opacity: 0.9;
      }

    `}
  `}
`
