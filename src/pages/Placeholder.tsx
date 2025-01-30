import React from 'react'
import styled from 'styled-components'
import eyeIcon from '../assets/svg/eyeIcon.svg'
import { pixToRem } from '../utils/pixToRem'
import { media } from '../utils/mediaQueries'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'

const StyledDiv = styled.div`
  font-size: ${pixToRem(20)};
  border: ${({ theme }) => `1px solid ${theme.staticColors.primary}`};
  ${({ theme }) =>
    media.betweenMobileAndTablet(`
      font-size: ${pixToRem(28)};
      border: 1px solid ${theme.staticColors.danger};
  `)}
`

const Placeholder = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  return (
    <StyledDiv>
      PLACE HOLDER COMPONENT
      <img src={eyeIcon} alt="Eye Icon" />
      <div>Counter Value: {counter}</div>
    </StyledDiv>
  )
}

export default Placeholder
