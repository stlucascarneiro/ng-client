// Config
import { Button, Input } from 'components'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'
import { ApolloError, useLazyQuery, useMutation } from '@apollo/client'
import { setCookie } from 'cookies-next'
// Components
import { Drawer, Link } from './styles'
// Assets
import { AUTHENTICATE_USER, CREATE_USER } from 'api/User'
import { toast } from 'react-toastify'
import { BeatLoader } from 'react-spinners'

// Types
interface IProps {
  flow: 'register' | 'login',
  setDrawerFlow: Dispatch<SetStateAction<'register' | 'login'>>
}

export const OrganismDrawer = ({ flow, setDrawerFlow }: IProps) => {
  const options = { onError: (e: ApolloError) => toast.error(e.message) }
  const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [invalidUsername, setInvalidUsername] = useState(true)
    const [invalidPassword, setInvalidPassword] = useState(true)
    const [createUser, { loading }] = useMutation(CREATE_USER, options)

    const handleSubmit = () => {
      createUser({
        variables: { username, password },
        onCompleted: () => {
          toast.success('Usuário criado')
          setDrawerFlow('login')
        }
      })
    }

    return (
      <>
        <Input type='username' validate={true} setInvalidForm={setInvalidUsername} setValueForm={setUsername} />
        <Input type='password' validate={true} setInvalidForm={setInvalidPassword} setValueForm={setPassword} />
        <Link onClick={() => setDrawerFlow('login')}>acessar minha conta</Link>
        <Button secondary={true} disabled={invalidUsername || invalidPassword || loading} onClick={handleSubmit}>
          {loading
            ? <BeatLoader loading={true} color='#7431F4' />
            : 'criar conta'}
        </Button>
      </>
    )
  }

  const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [invalidUsername, setInvalidUsername] = useState(true)
    const [invalidPassword, setInvalidPassword] = useState(true)
    const [authenticateUser, { loading }] = useLazyQuery(AUTHENTICATE_USER, options)
    const router = useRouter()

    const handleSubmit = () => {
      authenticateUser({
        variables: { username, password },
        onCompleted(data) {
          setCookie('JWT', data.authenticateUser.token)
          router.push('/balance')
        }
      })
    }

    return (
      <>
        <Input type='username' setInvalidForm={setInvalidUsername} setValueForm={setUsername} />
        <Input type='password' setInvalidForm={setInvalidPassword} setValueForm={setPassword} />
        <Link onClick={() => setDrawerFlow('register')}>criar minha conta</Link>
        <Button secondary={true} disabled={invalidUsername || invalidPassword || loading} onClick={handleSubmit}>
          {loading
            ? <BeatLoader loading={true} color='#7431F4' />
            : 'entrar'}
        </Button>
      </>
    )
  }

  return (
    <Drawer initial={{ y: '100vh' }} animate={{ y: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}>
      {flow === 'register' && <Register />}
      {flow === 'login' && <Login />}
    </Drawer>
  )
}
