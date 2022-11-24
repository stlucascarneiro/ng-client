import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
`
export const ItemContainer = styled.div`
  
`

export const DateHeader = styled.h5`
  font-size: 14px;
  font-weight: 500;
  margin: 1rem 0;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  border-bottom: 1px solid #ebebeb;
`

export const Value = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.color.element.inverseStrong};
`

export const Username = styled.p`
  
`