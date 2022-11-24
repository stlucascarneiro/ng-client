import { IInputValidation, InputType, Validations } from 'middlewares/validations'
import React from 'react'

export function handlePhoneMask(e: string) {
  if (e.length === 1 && e[0] !== '(') {
    return '(' + e
  } else if (e.length === 4 && e[3] !== ')') {
    return [e.slice(0, 3), ') ', e.slice(3)].join('')
  } else if (e.length === 11 && e[10] !== '-') {
    return [e.slice(0, 10), '-', e.slice(10)].join('')
  } else if (e.length > 15) {
    return e.slice(0, -1)
  } else {
    return e
  }
}

export function handleInputType(type: InputType, hideValue: boolean, inputTypes: any) {
  if (type === 'password' && hideValue) return 'password'
  else if (type === 'password' && !hideValue) return 'text'
  else return inputTypes[type].type
}

export function handleInputChange(
  e: React.ChangeEvent<HTMLInputElement>,
  type: InputType,
  validate: boolean | undefined,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setInputValidation: React.Dispatch<React.SetStateAction<IInputValidation>>,
  setValueForm: React.Dispatch<React.SetStateAction<string>>
) {
  if (type === 'phone') {
    const value: string = handlePhoneMask(e.target.value)
    setInputValue(value)
    setValueForm(value)
  } else {
    setInputValue(e.target.value)
    setValueForm(e.target.value)
  }
  if (validate) {
    const feedback = Validations.validateInput(type, e.target.value, false)
    setInputValidation(feedback)
  }
}

export function handleBlur(
  e: React.ChangeEvent<HTMLInputElement>,
  type: InputType,
  validate: boolean | undefined,
  setInputValidation: React.Dispatch<React.SetStateAction<IInputValidation>>,
  setInvalidForm?: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (validate) {
    const feedback = Validations.validateInput(type, e.target.value, true)
    setInputValidation(feedback)
    setInvalidForm && setInvalidForm(feedback.invalid)
  } else {
    (e.target.value.length > 0 && setInvalidForm) && setInvalidForm(false)
  }
}