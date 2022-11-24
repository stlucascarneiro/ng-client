export type InputType = 'name' | 'username' | 'phone' | 'email' | 'password'

export interface IInputValidation {
    invalid: boolean
    message: string
}

export class Validations {
  public static validateInput(type: InputType, input: string, onBlur = false) {
    switch (type) {
      case 'name':
        return this.validateName(input, onBlur)
      case 'username':
        return this.validateUsername(input, onBlur)
      case 'phone':
        return this.validatePhone(input, onBlur)
      case 'email':
        return this.validateEmail(input, onBlur)
      case 'password':
        return this.validatePassword(input, onBlur)

      default:
        return { invalid: true, message: 'Falha na validação.' }
    }
  }

  private static validateName(input: string, validateLength: boolean): IInputValidation {
    const invalidCharacter = /[^a-záàâãéèêíïòóôõöúçñ ]+$/i.test(input)
    if (invalidCharacter) {
      return { invalid: true, message: 'Utilize apenas letras minúsculas e letras maiúsculas.' }
    }
    const invalidLength = input.length < 1
    if (validateLength && invalidLength) {
      return { invalid: true, message: 'Este campo deve ser preenchido.' }
    }
    return { invalid: false, message: '' }
  }

  private static validateUsername(input: string, validateLength: boolean): IInputValidation {
    const invalidCharacter = /[^a-zA-Z0-9]+$/i.test(input)
    if (invalidCharacter) {
      return { invalid: true, message: 'Utilize apenas letras e números' }
    }
    const invalidLength = input.length <= 3
    if (validateLength && invalidLength) {
      return { invalid: true, message: 'O nome de usuário deve conter mais que 3 caracteres' }
    }
    return { invalid: false, message: '' }
  }

  private static validateEmail(input: string, validateLength: boolean): IInputValidation {
    const invalidCharacter = /[^a-zA-Z0-9@._\-/]/.test(input)
    if (invalidCharacter) {
      return { invalid: true, message: 'Caracteres inválidos.' }
    }
    const invalidLength = input.length > 255 || input.length < 8
    if (validateLength && invalidLength) {
      return { invalid: true, message: 'Seu email deve conter mais que 8 caracteres.' }
    }
    const invalidEmailFormat = !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input)
    if (validateLength && invalidEmailFormat) {
      return { invalid: true, message: 'Formato de email inválido.' }
    }
    return { invalid: false, message: '' }
  }

  private static validatePhone(input: string, validateLength: boolean): IInputValidation {
    const invalidCharacter = /[^0-9()\-/ ]/.test(input)
    if (invalidCharacter) {
      return { invalid: true, message: 'Caracteres inválidos.' }
    }
    const invalidLength = input.length > 24 || input.length < 15
    if (validateLength && invalidLength) {
      return { invalid: true, message: 'Digite seu telefone no formato (99) 99999-9999' }
    }
    return { invalid: false, message: '' }
  }

  public static validatePassword(input: string, validateLength: boolean): IInputValidation {
    const invalidCharacter: boolean = /[^a-zA-Z0-9!@#$%&\-/]/.test(input)
    if (invalidCharacter) return { invalid: true, message: 'Caracteres inválidos.' }

    const invalidLength = input.length < 8
    if (validateLength && invalidLength) {
      return { invalid: true, message: 'Sua senha deve conter pelo menos 8 caracteres' }
    }

    const invalidRequirements: boolean = !/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/.test(input)
    if (validateLength && invalidRequirements) return { invalid: true, message: 'Sua senha deve conter ao menos uma letra maiúscula, letra minúscula e número' }

    else return { invalid: false, message: '' }
  }
}
