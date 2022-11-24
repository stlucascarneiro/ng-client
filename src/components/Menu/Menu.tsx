// Config
import { Dispatch, SetStateAction } from 'react'
// Components
import { Item, Menu } from './styles'
// Assets

// Types
type filter = 'todos' | 'ganhos' | 'gastos'
interface IProps {
  options: {
    label: string
    state: filter
  }[]
  setState: Dispatch<SetStateAction<filter>>
}

export const ComponentMenu = ({ options, setState }: IProps) => {
  return (
    <Menu initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
      {options.map((elem, i) => (
        <Item key={i} onClick={() => setState(elem.state)}>{elem.label}</Item>
      ))}
    </Menu>
  )
}