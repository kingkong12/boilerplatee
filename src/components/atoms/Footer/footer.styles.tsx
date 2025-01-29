import styled from 'styled-components'

export const SecurityBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.15625rem;
  background-color: ${({ theme }) => theme.colors.blackShade || '#486082'};
  color: ${({ theme }) => theme.colors.white || '#ffffff'};
  font-family: 'Neue Haas Grotesk Display', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 1rem;
  box-sizing: border-box;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
`

export const IconWrapper = styled.div`
  margin-right: 0.625rem;
  position: relative;
  top: 0.125rem;
`
