import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://host.docker.internal:4000',
  cache: new InMemoryCache()
})