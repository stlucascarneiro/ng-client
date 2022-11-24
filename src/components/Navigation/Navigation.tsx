// Config
import { useRouter } from 'next/router'
// Components
import { IconContainer, Navigation, Title } from './styles'
// Assets
import Icons from 'atoms/icons'

// Types
interface IProps {
  title: string
}

export const ComponentNavigation = ({ title }: IProps) => {
  const router = useRouter()
  return (
    <Navigation>
      <IconContainer onClick={() => router.back()}>
        <Icons.back />
      </IconContainer>
      <Title>{title}</Title>
    </Navigation>
  )
}