import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`

export const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 0.0625rem solid ${({ theme }) => theme.colors.chineseSilver || '#ccc'};
  border-radius: 1.08px;
  ${media.minSmallLargeDesktop(`
  border-radius: 0.96px;
  `)}

  ${media.minDesktop(`
  border-radius: 1.08px;
  `)}

  ${media.minLargeDesktop(`
  border-radius: 1.15px;
  `)}

  transition: border-color 0.3s ease;
`

export const Icon = styled.div<{ hasopacity: boolean }>`
  position: absolute;
  right: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ hasopacity }) => (hasopacity ? 1 : 0.6)};

  img {
    width: 1.3125rem;
    height: 0.75rem;
    pointer-events: none;
  }
`

export const Input = styled.input<{ type: string }>`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.12rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  height: 3.375rem;
  padding-right: ${({ type }) => (type === 'password' ? '2.5rem' : '0.5rem')};

  ${media.minSmallLargeDesktop(`
       height: 2.695rem;
    `)}

  ${media.minDesktop(`
       height: 3.0325rem;
    `)} 
    
  ${media.minLargeDesktop(`
       height: 4.21875rem;
    `)}
`

export const Label = styled.label<{ isfocused: boolean }>`
  position: absolute;
  top: ${({ isfocused }) => (isfocused ? '-0.1rem' : '50%')};
  left: 0.5rem;
  transform: translateY(${({ isfocused }) => (isfocused ? '0' : '-50%')});
  font-size: ${({ isfocused }) => (isfocused ? '0.8rem' : '1rem')};
  color: ${({ theme }) => theme.colors.secondary || '#666'};
  transition: all 0.3s ease;
  pointer-events: none;
  padding: 0 0.1rem;
`
