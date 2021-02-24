import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  min-height: 600px;
  position: relative;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/img/login-illustration.png);
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;

  &:before {
    ${({ theme }) => css`
      content: '';
      position: absolute;
      border-bottom: 1px solid;
      height: 50%;
      top: 0;
      right: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        ${theme.colors.quaternary} 0%,
        rgba(105, 57, 153, 0) 100%
      );
      transform: rotate(-180deg);
    `}
  }

  &:after {
    ${({ theme }) => css`
      content: '';
      height: 50%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.quaternary};
    `}
  }

  ${media.greaterThan('medium')`
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: none;
      padding: 0;

    &:before {
      display: none;
    }


    &:after {
      display: none;
    }

  `}
`

export const Illustration = styled.div`
  display: none;
  height: 100%;
  position: relative;
  background-image: url(/img/login-illustration.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &:after {
    ${({ theme }) => css`
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        ${theme.colors.quaternary} 0%,
        rgba(105, 57, 153, 0) 100%
      );
      transform: rotate(-180deg);
    `}
  }

  ${media.greaterThan('medium')`
  display: block;
  width: 40%;
  `}

  ${media.greaterThan('large')`
  width: 60%;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    position: absolute;
    width: calc(100% - 64px);
    z-index: 2;
    border-radius: 8px;
    text-align: center;
  `}

  ${media.greaterThan('medium')`
  width: 60%;
  height: 100%;
  padding: 0 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `}

  ${media.greaterThan('large')`
  width: 40%;
  padding-left: 112px;
  align-items: flex-start;
  justify-content: center;
  `}
`
export const Content = styled.div`
  width: 100%;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ${media.greaterThan('medium')`
  text-align: left;
  padding: 0;
  align-items: flex-start;
  justify-content: flex-start;
  `};

  ${media.greaterThan('large')`
  max-width: 256px;
  `};
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.small};
    text-align: center;
    max-width: 140px;

    ${media.greaterThan('medium')`
      max-width: 232px;
      text-align: left;
      font-size:${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxxlarge};
  `};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;

    ${media.greaterThan('medium')`
      max-width: 232px;
      text-align: left;
    font-size: ${theme.font.sizes.small};
      margin-bottom:  ${theme.spacings.xxlarge};
  `};
  `}
`
