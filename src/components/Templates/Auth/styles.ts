import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IllustrationWrapper = styled.div`
  height: 100%;
  width: 60%;
  position: relative;
`

export const IllustrationGradient = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
`

export const Illustration = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`

export const ContentWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 112px;
`
export const Content = styled.div`
  width: 100%;
  max-width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`

export const Title = styled.h1`
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #383e71;
  margin-bottom: 16px;
`
export const Description = styled.h1`
  color: #989fdb;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 44px;
`
