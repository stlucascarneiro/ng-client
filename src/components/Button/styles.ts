import styled from 'styled-components'

interface ButtonProps {
  secondary: boolean
}
export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    justify-content: center;
    z-index: 1;
    
    height: 100%;
    width: 100%;
    
    background-color: white;
    color: ${({ theme, secondary, disabled }) => {
      if (disabled) return '#c9c9c9'
      else if (secondary) return theme.color.element.inverseStrong
      else return 'black'
    }};
    border: ${({ theme, secondary, disabled }) => {
      if (disabled) return '1px solid #c9c9c9'
      else if (secondary) return `1px solid ${theme.color.element.inverseStrong}`
      else return 'none'
    }};
    border-radius: 16px;
    
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 20px;

    transition: .3s;
    cursor: pointer;
    user-select: none;

    &:hover {
      transform: ${({ disabled }) => disabled ? '' : 'translate(2px, 2px)'};
      transition: .3s;
    }
    &:active{
      transform: ${({ disabled }) => disabled ? '' : 'translate(0.5rem, 0.5rem)'};
      transition: .1s;
    }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: calc(100% - 8px);
  position: relative;
`

export const ButtonShadow = styled.div<ButtonProps>`
  z-index: 0;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  height: 100%;
  width: 100%;

  background-color: ${({ theme, secondary }) => !secondary ? 'black' : theme.color.brand.primary};
  border-radius: 16px;
  border: 1px solid ${({ theme, secondary }) => !secondary ? theme.color.element.strong : theme.color.element.inverseStrong};
`