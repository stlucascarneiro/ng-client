import icons from 'atoms/icons'
import styled from 'styled-components'

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  flex-grow: 1;
  padding-bottom: 5rem;
`
export const ShowHideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  height: 36px;
  padding: 0 12px;
  background-color: white;
  border-radius: 10px;
  margin-left: calc(100% - 56px);
`

export const HideIcon = styled(icons.hide)`
  font-size: 32px;
  color: ${({ theme }) => theme.color.element.inverseRegular};

  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.color.element.inverseStrong};
  }
`

export const ShowIcon = styled(icons.show)`
  font-size: 32px;
  color: ${({ theme }) => theme.color.element.inverseRegular};

  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.color.element.inverseStrong};
  }
`

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  padding: 1rem 0;
  margin: 1.5rem 0;
`

export const Currency = styled.p`
  font-size: 56px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.element.inverseStrong};
  margin-right: 4px;
`

export const Value = styled.p`
  width: fit-content;
  font-size: 56px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.element.inverseStrong};
`

export const Stripe = styled.div`
  width: 150px;
  height: 8px;
  background-color: black;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`