import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0rem 0.12rem 0.24rem 0rem rgba(0, 0, 0, 0.2879);
  min-width: 100vw;
  height: 100%;

  ${media.minSmallLargeDesktop(`
    height: auto;
    min-width: 0;
    width: 19.375rem; 
  `)}

  ${media.minDesktop(`
    height: auto;
    min-width: 0;
    width: 21.76rem; 
  `)}

  ${media.minLargeDesktop(`
    height: auto;
    min-width: 0;
    width: 30.28rem; 
  `)}
`

export const ImageWrapper = styled.div`
  min-width: 13.75rem;
  padding: 0.625rem 0 0.625rem 0;
  margin-bottom: 0.3125rem;
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.static.white || '#FFFFFF'};

  > img {
    width: 191.26px;

    ${media.minSmallLargeDesktop(`
     width: 170.01px;

    `)}
    ${media.minDesktop(`
        width: 191.26px;
    `)}

    ${media.minLargeDesktop(`
         width:  266px; 
    `)}
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0rem 1.625rem;
  background-color: ${({ theme }) => theme.static.white || '#FFFFFF'};
  width: 100%;
  flex: 1;
`

export const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor.primary || '#000000'};
  margin: 1.625rem 0rem 2.25rem 0rem;
`

export const ForgotPasswordText = styled.button`
  font-weight: 450;
  font-size: 1.1375rem;
  line-height: 1.30125rem;

  color: ${({ theme }) => theme.static.blueShade || '#486082'};
  text-align: center;
  background: none;
  border: none;
  margin-top: 3.4375rem;
  cursor: pointer;
  transition: color 0.3s ease;

  ${media.minSmallLargeDesktop(`
  margin-top: 1.25rem;
  font-size: 0.8375rem;
  line-height: 0.959375rem;
  `)}

  ${media.minDesktop(`
  font-size: 0.95rem;
  line-height: 1.0725rem;
  `)}

  ${media.minLargeDesktop(`
   margin-top: 1.5rem;
  font-size: 1.325rem;
  line-height: 1.50125rem;
  `)}

  &:focus {
    outline: 0.0625rem solid ${({ theme }) => theme.colors.primary || '#D2691E'};
  }
`

export const ButtonWrapper = styled.div`
  flex: 1;
  margin-top: 4.625rem;
  margin-bottom: 1.5625rem;
  display: flex;
  align-items: end;
  justify-content: center;

  ${media.minSmallLargeDesktop(`
  margin-top: 4.20706rem;
  `)}

  ${media.minDesktop(`
  margin-top: 5.5rem;  
  `)}

  ${media.minLargeDesktop(`
  margin-top: 6.78856rem;
  `)}
`
