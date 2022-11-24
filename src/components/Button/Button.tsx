/* eslint-disable no-undef */
// Components
import { Button, ButtonContainer, ButtonShadow } from './styles'
// Assets

// Types
import { ButtonHTMLAttributes } from 'react'
import IconType from 'react-icons/index'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: any
  icon?: IconType
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  disabled?: boolean
  secondary?: boolean
}

export const ComponentButton = ({ children, ref, onClick, icon: Icon, style, containerStyle, disabled, secondary = false }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick && onClick(e)
  }
  return (
    <ButtonContainer style={containerStyle}>
      <Button
        ref={ref}
        style={style}
        onClick={handleClick}
        secondary={secondary}
        disabled={disabled}>
          {Icon && <Icon style={{ marginRight: '0.5rem', fontSize: '18px' }}/>}
          {children}
      </Button>
      {!disabled && <ButtonShadow secondary={secondary}/>}
    </ButtonContainer>
  )
}