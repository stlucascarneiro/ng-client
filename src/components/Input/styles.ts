import icons from 'atoms/icons'
import styled from 'styled-components'

export const Input = styled.fieldset`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: none;
  padding: 0;
  user-select: none;
`

export const Legend = styled.legend`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.element.inverseStrong};
`

export const HTMLInput = styled.input`
  font-size: 16px;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 0.5rem;
  padding-bottom: 4px;

  &:focus-visible{
    outline: none;
  }

  &::placeholder{
    font-weight: 500;
  }
`

export const Feedback = styled.label`
  color: ${({ theme }) => theme.color.feedback.error};
`

export const HideIcon = styled(icons.hide)`
  position: absolute;
  top: 8px;
  right: 2px;

  font-size: 22px;
  color: ${({ theme }) => theme.color.element.inverseRegular};

  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.color.element.inverseStrong};
  }
`

export const ShowIcon = styled(icons.show)`
  position: absolute;
  top: 8px;
  right: 2px;

  font-size: 22px;
  color: ${({ theme }) => theme.color.element.inverseRegular};

  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.color.element.inverseStrong};
  }
`