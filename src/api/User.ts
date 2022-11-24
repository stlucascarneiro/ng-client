import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(apiKey: "IFKJ24JtNYzLx8NyPGaPTQhFGpVwucBrk7yuJcrzwT177hxNP7", username: $username, password: $password) {
      id
    }
  }
`

export const AUTHENTICATE_USER = gql`
  query AuthenticateUser(
    $username: String!,
    $password: String!
  ) {
  authenticateUser(apiKey: "IFKJ24JtNYzLx8NyPGaPTQhFGpVwucBrk7yuJcrzwT177hxNP7", username: $username, password: $password) {
    token
  }
}
`

export const GET_ACCOUNT = gql`
  query GetAccount($token: String!, $userId: Int!) {
    getAccount(token: $token, userId: $userId) {
      balance
    }
  }
`