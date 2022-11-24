import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

export const Currency = styled.div`
  margin-bottom: 1rem;
`

export const Input = styled(MaskedInput)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 53px;
  text-align: center;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.element.inverseRegular};

  &:focus-visible{
    outline: none;
  }

  &::placeholder{
    font-weight: 500;
    color: #d3d3d3;
  }
`