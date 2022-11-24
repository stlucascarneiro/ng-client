import styled from 'styled-components'

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  flex-grow: 1;
  padding-bottom: 10rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 2rem 0;
  padding: 1rem 1rem;

  background-color: white;
  border-radius: 16px;
`

export const Label = styled.p`
  color: ${({ theme }) => theme.color.element.inverseStrong};
  font-weight: 500;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`