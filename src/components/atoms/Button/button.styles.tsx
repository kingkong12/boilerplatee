import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#EA731F'};
  color: ${({ theme }) => theme.static.white || '#fff'};
  font-size: 1.2rem;
  line-height: 1.3125rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.20625rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 9.125rem;
`
