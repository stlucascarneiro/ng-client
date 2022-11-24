import styled from 'styled-components'

export const Body = styled.main`
  margin-top: 2.5rem;
`

export const Heading2 = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.color.element.regular};
`

export const Illustration = styled.img`
  margin: 1rem 0;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;
`

export const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
  text-align: center;
  margin-top: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.element.regular};

  &:hover {
    color: ${({ theme }) => theme.color.element.strong};
  }
`