import { Button, ButtonContainer, ButtonShadow } from './styles'
import { forwardRef } from 'react'

export const ForwardButton = forwardRef(({ value, onClick }: any, ref: any) => (
  <ButtonContainer style={{ height: '54px', width: '246px', marginLeft: '1rem' }}>
      <Button
        ref={ref}
        style={{ fontSize: '16px' }}
        onClick={onClick}
        secondary={false}
        disabled={false}>
          {value}
      </Button>
      <ButtonShadow secondary={false}/>
  </ButtonContainer>
))