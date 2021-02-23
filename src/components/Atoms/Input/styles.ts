import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { InputProps } from '.'

type WrapperProps = Pick<InputProps, 'error'>

const InputModifiers = {
  error: () => css`
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.error};
    `}
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.font.sizes.small};
    text-align: left;

    & + & {
      margin-bottom: 0;
    }

    ${media.greaterThan('medium')`
      & + & {
        margin-bottom: ${theme.font.sizes.large};
      }
    `}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxxsmall};
    margin-left: ${theme.spacings.xxsmall};
    text-transform: uppercase;
  `}
`

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const Input = styled.input<WrapperProps>`
  ${({ theme, error }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.xsmall};
    background: transparent;
    border-radius: 8px;
    padding: 18px;
    outline: none;

    ${!!error && InputModifiers.error()}

    &::placeholder {
      color: ${theme.colors.secondary};
    }
  `}
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.xsmall};
    margin-top: 8px;
    margin-left: ${theme.spacings.small};
    text-align: :left;
    color: ${theme.colors.error};

  `}
`

export const ErrorIcon = styled.img`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.xsmall};
    color: ${theme.colors.error};
    position: absolute;
    right: 16px;
    bottom: 0;
    top: 0;
    margin: auto 0;
  `}
`
