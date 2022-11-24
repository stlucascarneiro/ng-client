import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Drawer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 150px);
  background-color: white;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  padding: 3rem calc(50% - 180px);
`

export const Link = styled.a`
  width: fit-content;
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
  text-align: center;
  margin-top: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.element.inverseStrong};
  margin-bottom: 2rem;
  user-select: none;

  &:hover {
    color: black;
  }
`