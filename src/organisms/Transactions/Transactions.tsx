// Config

// Components
import { DateHeader, Item, ItemContainer, TransactionsContainer, Username, Value } from './styles'
// Assets
import { getToken } from 'utils/token'

// Types
interface ITransaction {
  createdAt: string
  value: number
  creditedAccount: { user: { id: number, username: string } }
  debitedAccount: { user: { id: number, username: string } }
}
interface IProps{
  data: ITransaction[]
}

export const OrganismTransactions = ({ data }: IProps) => {
  const payload = getToken()
  let currentDate: number

  return (
    <TransactionsContainer>
      {
        data.length === 0
          ? <Value>Nenhum registro encontrado</Value>
          : data.map((elem, i) => {
            let username: string
            let sign: string
            const createdAt = new Date(Number(elem.createdAt))
            const createdDay = createdAt.getDate()
            const displayDateHeader = currentDate !== createdDay

            if (currentDate !== createdDay) currentDate = createdDay

            if (elem.creditedAccount.user.id === payload?.id) {
              username = elem.debitedAccount.user.username
              sign = '+'
            } else {
              username = elem.creditedAccount.user.username
              sign = '-'
            }

            return (
            <ItemContainer key={i}>
              {displayDateHeader && <DateHeader>{createdAt.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</DateHeader>}
              <Item>
                <Value>{sign} {elem.value.toFixed(2).replace('.', ',')}</Value>
                <Username>@{username}</Username>
              </Item>
            </ItemContainer>
            )
          })
      }
    </TransactionsContainer>
  )
}