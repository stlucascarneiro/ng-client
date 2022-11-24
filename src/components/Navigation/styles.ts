import styled from 'styled-components'

export const Navigation = styled.div`
  display: flex;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 58px;

  font-size: 32px;
  background-color: white;
  color: ${({ theme }) => theme.color.element.inverseStrong};

  border-radius: 10px;
  cursor: pointer;

  &:hover{
    color: black;
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  margin-left: 1rem;

  font-size: 20px;
  background-color: white;
  color: ${({ theme }) => theme.color.element.inverseStrong};

  border-radius: 10px;
`