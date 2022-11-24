// Config

// Components
import { MouseEventHandler } from 'react'
import { Header, Logo } from './styles'
// Assets

// Types
interface IProps {
  onClick?: MouseEventHandler<HTMLElement>
}

export const ComponentHeader = ({ onClick }: IProps) => {
  return (
    <Header onClick={onClick}>
      <Logo src='images\logos\ngcash_logo.svg'/>
    </Header>
  )
}