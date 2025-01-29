import styled from 'styled-components'
import { media } from '../utils/mediaQueries'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const FormWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${media.mobile(`
    height: 100vh; 
  `)}

  ${media.minSmallLargeDesktop(`
    margin-left: 5%;
  `)}
`

export const TextContainer = styled.div`
  margin-right: -13%;
  z-index: 1;
  width: 33%;
  margin-left: 3%;
  display: none;

  ${media.minSmallLargeDesktop(`
   display: unset;
  `)}

  ${media.minDesktop(`
   width: 25%;
  `)}

  ${media.minLargeDesktop(`
   width: 20%;
  `)}
`

export const ImageContainer = styled.div`
  display: flex;
  height: inherit;
  position: relative;
  height: 100%;
  display: none;

  ${media.minSmallLargeDesktop(`
   display: unset;
  `)}
`

export const FloatingUserProfile = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 10;
  display: none;

  ${media.minSmallLargeDesktop(`
    display: block;
  `)}

  img {
    width: 3.125rem;
    height: 3.125rem;
  }
`
