import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  cursor: pointer;
`

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 1.5rem;
  z-index: 1;
`

export const Icon = styled.span<{ checked: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.07875rem solid
    ${({ theme }) => theme.colors.chineseSilver || '#ccc'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${media.minSmallLargeDesktop(`
    width: 0.958125rem;
    height: 0.958125rem;
  `)}

  ${media.minDesktop(`
    width: 1.078125rem;
    height: 1.078125rem;
  `)}

  ${media.minLargeDesktop(`
    width: 1.5rem;
    height: 1.5rem;
  `)}

  img {
    width: 1rem;
    height: 1rem;
    display: ${({ checked }) => (checked ? 'block' : 'none')};

    ${media.minSmallLargeDesktop(``)}

    ${media.minDesktop(``)}

    ${media.minLargeDesktop(``)}
  }
`

export const Label = styled.label`
  font-size: 0.975rem;
  color: ${({ theme }) => theme.static.blackCoffee || '#000'};
  cursor: pointer;

  ${media.minSmallLargeDesktop(`
    font-size: 0.71875rem;
  `)}

  ${media.minDesktop(`
    font-size: 0.8125rem;
  `)}

  ${media.minLargeDesktop(`
    font-size: 1.125rem;
  `)}
`
