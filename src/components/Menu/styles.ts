import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Menu = styled(motion.ul)`
  position: absolute;
  bottom: calc(-100% - 3rem);
  z-index: 3;

  width: 100%;
  padding: 6px 0;

  background-color: white;
  border-radius: 10px;
`

export const Item = styled.li`
  padding: 4px 8px;
  list-style-type: none;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.element.inverseStrong};
  cursor: pointer;
  
  &:hover{
    background-color: ${({ theme }) => theme.color.element.regular};
  }
`