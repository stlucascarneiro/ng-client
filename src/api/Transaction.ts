import { ApolloError, gql } from '@apollo/client'
import { toast } from 'react-toastify'
import { getToken } from 'utils/token'

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($token: String!, $debitedAccountId: Int!, $creditedAccountUsername: String!, $value: Float!) {
    createTransaction(token: $token, debitedAccountId: $debitedAccountId, creditedAccountUsername: $creditedAccountUsername, value: $value) {
      value
    }
  }
`

export const GET_TRANSACTIONS = gql`
  query GetTransactions(
    $token: String!,
    $accountId: Int!,
    $filterBy: String,
    $fromDate: Date,
    $toDate: Date) {
      getTransactions(
        token: $token,
        accountId: $accountId, 
        filterBy: $filterBy, 
        fromDate: $fromDate, 
        toDate: $toDate) {
        value
        createdAt
        creditedAccount {
          user {
            id
            username
          }
        }
        debitedAccount {
          user {
            id
            username
          }
        }
      }
  }
`

export const getTransactionsOptions = (startDate: Date, endDate: Date, filterBy: 'todos' | 'ganhos' | 'gastos') => {
  const payload = getToken()

  const now = new Date()
  const monthEarlier = new Date()
  monthEarlier.setMonth(now.getMonth() - 1)

  let fromDate = {}
  let toDate = {}

  if (startDate) {
    fromDate = {
      day: startDate.getDate(),
      month: startDate.getMonth(),
      year: startDate.getFullYear()
    }
  }
  if (endDate) {
    toDate = {
      day: endDate.getDate(),
      month: endDate.getMonth(),
      year: endDate.getFullYear()
    }
  }

  return {
    onError: (e: ApolloError) => toast.error(e.message),
    variables: {
      token: payload?.token,
      accountId: payload?.id,
      filterBy,
      fromDate,
      toDate
    }
  }
}