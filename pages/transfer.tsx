import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ApolloError, useMutation } from '@apollo/client'
// Components
import { Button, Currency, Header, Input, Navigation, Username } from 'components'
import { Body, Card, Footer, Label } from '../styles/transfer'
import { toast } from 'react-toastify'
// Assets
import { getToken } from 'utils/token'
import { CREATE_TRANSACTION } from 'api/Transaction'
// Types
const steps = [
  {
    title: 'Transferir',
    label: 'Para quem você deseja transferir?',
    button: 'continuar'
  },
  {
    title: 'Valor',
    label: 'Quanto você quer transferir?',
    button: 'transferir'
  },
  {
    title: '',
    label: 'Transferência realizada',
    button: 'voltar'
  }
]

export default function Transfer() {
  const [username, setUsername] = useState('')
  const [value, setValue] = useState(0.00)
  const [invalidForm, setInvalidForm] = useState(true)
  const [transferStep, setTransferStep] = useState(0)
  const [createTransaction] = useMutation(CREATE_TRANSACTION, { onError: (e: ApolloError) => toast.error(e.message) })
  const router = useRouter()

  const InputSwitch = [
    <Input key={0} type='username' validate={true} setValueForm={setUsername} setInvalidForm={setInvalidForm} hideLabel={true} style={{ marginBottom: '1rem' }} />,
    <Currency key={1} setInputValue={setValue} setInvalidForm={setInvalidForm} />,
    ''
  ]

  const handleClick = () => {
    if (transferStep === 1) {
      const payload = getToken(undefined, undefined)
      createTransaction({
        variables: { token: payload?.token, debitedAccountId: payload?.id, creditedAccountUsername: username, value },
        onCompleted(data) {
          if (data) {
            toast.success(steps[2].label)
            setTransferStep(transferStep + 1)
          }
        }
      })
    }
    if (transferStep === 0) setTransferStep(transferStep + 1)
    else if (transferStep === 2) router.push('/balance')
  }

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header />
      <Body>
        {transferStep !== 2 && <Navigation title={steps[transferStep].title} />}
        <Card>
          {InputSwitch[transferStep]}
          <Label>{steps[transferStep].label}</Label>
        </Card>
        <Button disabled={invalidForm} onClick={handleClick}>{steps[transferStep].button}</Button>
      </Body>
      <Footer>
        <Username/>
      </Footer>
    </>
  )
}