import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next'
// Components
import { Button, Header, Username } from 'components'
import { BalanceContainer, Body, ButtonContainer, Currency, Footer, HideIcon, ShowHideContainer, ShowIcon, Stripe, Value } from '../styles/balance'
// Assets
import { formatter } from 'utils/currency'
import { client } from 'api'
import { GET_ACCOUNT } from 'api/User'
import { ApolloError } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'utils/token'

// Types
interface IProps {
  data: {
    username: string
    balance: number
  },
  error: string
}

export async function getServerSideProps({ req, res }: {req: NextApiRequest, res: NextApiResponse}) {
  const payload = getToken(req, res)
  if (!payload) return { props: { error: 'Token Invalido' } }

  const response = await client.query({ query: GET_ACCOUNT, variables: { token: payload.token, userId: payload.id } })
    .catch((e: ApolloError) => e.message)

  if (typeof response === 'string') return { props: { error: response } }
  else return { props: { data: { ...response.data.getAccount, username: payload.username } } }
}

export default function Balance({ data, error }: IProps) {
  const [showValue, setShowValue] = useState(true)
  const router = useRouter()

  if (error || !data) {
    setCookie('Error', error)
    router.push('/error')
  }

  const handleButton = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header/>
      <Body>
        <ShowHideContainer>
          {showValue ? <HideIcon onClick={() => setShowValue(false)}/> : <ShowIcon onClick={() => setShowValue(true)}/>}
        </ShowHideContainer>
        <BalanceContainer>
          <Currency>R$</Currency>
          {showValue
            ? <Value>{formatter.format(data.balance)}</Value>
            : <Stripe/>}
        </BalanceContainer>
        <ButtonContainer>
          <Button onClick={() => handleButton('/transfer')} containerStyle={{ maxWidth: '170px' }}>transferir</Button>
          <Button onClick={() => handleButton('/transactions')} containerStyle={{ maxWidth: '170px' }}>transações</Button>
        </ButtonContainer>
      </Body>
      <Footer>
        <Username/>
      </Footer>
    </>
  )
}