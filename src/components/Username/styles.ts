import icons from 'atoms/icons'
import styled from 'styled-components'

export const Username = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 36px;
background-color: rgba(255, 255, 255, 0.6);
width: 100%;
max-width: 180px;
color: ${({ theme }) => theme.color.element.inverseStrong};
cursor: pointer;
border-radius: 10px 10px 0 0;
`

export const Text = styled.h5`
font-size: 20px;
`

export const LeaveIcon = styled(icons.exit)`
  font-size: 20px;
  transform: translateY(2px);
`