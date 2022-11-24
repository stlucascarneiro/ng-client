// Config
import React, { Dispatch, SetStateAction } from 'react'
// Components
import { Currency, Input } from './styles'
// Assets
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

// Types
interface IProps {
  setInvalidForm: Dispatch<SetStateAction<boolean>>
  setInputValue: Dispatch<SetStateAction<number>>
}

const defaultMaskOptions = {
  prefix: 'R$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false
}

export const ComponentCurrency = ({ setInvalidForm, setInputValue }: IProps) => {
  const currencyMask = createNumberMask(defaultMaskOptions)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value.length < 1) setInvalidForm(true)
    else {
      setInvalidForm(false)
      setInputValue(Number(
        e.target.value.slice(2)
          .replace('.', '')
          .replace(',', '.')
      ))
    }
  }
  return (
    <Currency>
      <Input mask={currencyMask} onBlur={handleBlur} placeholder='R$ 100,00'/>
    </Currency>
  )
}