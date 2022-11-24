// Config
import { deleteCookie } from 'cookies-next'
// Components
import { useRouter } from 'next/router'
import { getToken } from 'utils/token'
import { LeaveIcon, Text, Username } from './styles'
// Assets

// Types

export const ComponentUsername = () => {
  const payload = getToken()
  const router = useRouter()
  const handleClick = () => {
    deleteCookie('JWT')
    router.push('/landing')
  }
  return (
    <Username onClick={handleClick}>
      <Text>{payload?.username}</Text>
      <LeaveIcon/>
    </Username>
  )
}