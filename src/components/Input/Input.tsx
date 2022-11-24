// Config
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IInputValidation, InputType } from 'middlewares/validations'
import { handleInputType, handleInputChange, handleBlur } from './handlers'
// Components
import { Input, Feedback, HTMLInput, Legend, ShowIcon, HideIcon } from './styles'
// Assets

// Types
interface IProps {
  type: InputType
  validate?: boolean
  setValueForm: Dispatch<SetStateAction<string>>
  setInvalidForm?: Dispatch<SetStateAction<boolean>>
  hideLabel?: boolean
  style?: React.CSSProperties
}

const inputTypes = {
  name: {
    type: 'text',
    title: 'Nome',
    placeholder: 'Seu nome.'
  },
  username: {
    type: 'text',
    title: 'Nome de usuário',
    placeholder: 'usuário'
  },
  phone: {
    type: 'text',
    title: 'Telefone',
    placeholder: '(DDD) 99999-9999'
  },
  email: {
    type: 'email',
    title: 'E-mail',
    placeholder: 'seuemail@email.com'
  },
  password: {
    type: 'password',
    title: 'Senha',
    placeholder: 'sua senha aqui'
  }
}

export const ComponentInput = ({ type, validate, setValueForm, setInvalidForm, hideLabel, style }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputValidation, setInputValidation] = useState<IInputValidation>({ invalid: false, message: '' })
  const [hideValue, setHideValue] = useState(true)
  const inputType = handleInputType(type, hideValue, inputTypes)

  return (
    <Input style={style}>
      {!hideLabel && <Legend>{inputTypes[type].title}</Legend>}
      <HTMLInput
        type={inputType}
        value={inputValue}
        placeholder={inputTypes[type].placeholder}
        onChange={(e) => handleInputChange(e, type, validate, setInputValue, setInputValidation, setValueForm)}
        onBlur={(e) => handleBlur(e, type, validate, setInputValidation, setInvalidForm)} />
      {(type === 'password' && hideValue) && <HideIcon onClick={() => setHideValue(false)} />}
      {(type === 'password' && !hideValue) && <ShowIcon onClick={() => setHideValue(true)} />}
      {inputValidation.invalid && <Feedback>{inputValidation.message}</Feedback>}
    </Input>
  )
}