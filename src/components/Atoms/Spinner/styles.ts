import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { SpinnerProps } from '.'

type WrapperProps = Pick<SpinnerProps, 'size'>

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 0px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${media.greaterThan('medium')`
    min-height: 48px;

  `}
`

export const Spinner = styled.svg<WrapperProps>`
  ${({ size }) => css`
    animation: rotate 2s linear infinite;
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: -40px;

    ${media.greaterThan('medium')`
      bottom: 0;
      width: ${size}px;
      height: ${size}px;
    `}
  `}

  circle {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
