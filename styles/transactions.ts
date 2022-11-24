import icons from 'atoms/icons'
import styled from 'styled-components'

export const Body = styled.main`
  margin-top: 4rem;
  flex-grow: 1;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`

export const MenuContainer = styled.div`
  position: relative;
`

export const Strong = styled.span`
  margin: 0 4px;
  font-weight: 600;
`

export const Chevron = styled(icons.chevronDown)`
  font-size: 24px;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`