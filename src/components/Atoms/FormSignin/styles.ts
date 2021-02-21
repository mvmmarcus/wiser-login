import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Wrapper as ButtonWrapper } from 'components/Atoms/Button/styles'

export const Wrapper = styled.div`
  width: 100%;
`

export const Form = styled.form`
  padding-bottom: 30px;

  ${media.greaterThan('medium')`
      padding-bottom: 0;
  `}
`

export const CustomButtonWrapper = styled(ButtonWrapper)`
  ${({ theme }) => css`
    && {
      position: absolute;
      bottom: -${theme.spacings.large};
      width: 50%;
      left: 50%;
      transform: translate(-50%, 0);

      ${media.greaterThan('medium')`
        position: relative;
        width: 100%;
        bottom: 0;
      `}
    }
  `}
`

export const DescriptionFooter = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    line-height: ${theme.font.sizes.medium};
    text-align: center;
    max-width: 212px;
    margin: 0 auto;
    position: absolute;
    bottom: -86px;
    left: 0;
    right: 0;

    ${media.greaterThan('medium')`
        color: ${theme.colors.secondary};
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.normal};
        line-height: ${theme.font.sizes.medium};
        margin-top: 32px;
        position: relative;
        bottom: 0;
      `}
  `}
`

export const LinkText = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    text-decoration: underline;
    margin-left: 4px;

    ${media.greaterThan('medium')`
    color: ${theme.colors.tertiary};
    `}
  `}
`
