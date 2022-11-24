import Head from 'next/head'
import { getCookie, deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'

// Components
import { Button, Header } from 'components'
import { BalanceContainer, Body } from '../styles/error'
// Assets

// Types
interface IProps {
  erro: string
}

export async function getServerSideProps({ req, res }: any) {
  const erro: any = getCookie('Error', { req, res })
  if (!erro || erro === '') return { props: { erro: 'Ops, tivemos um problema no nosso servidor' } }
  return { props: { erro } }
}

export default function ErrorPage({ erro }: IProps) {
  const router = useRouter()
  const handleClick = () => {
    deleteCookie('Error')
    router.push('/landing')
  }
  return (
    <>
      <Head>
        <title>Erro</title>
      </Head>
      <Header/>
      <Body>
        <BalanceContainer>
          <h2>Erro: {erro}</h2>
        </BalanceContainer>
        <Button onClick={handleClick}>voltar</Button>
      </Body>
    </>
  )
}