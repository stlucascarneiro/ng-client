export class Color {
  public readonly brand
  public readonly background
  public readonly element
  public readonly feedback

  constructor() {
    this.brand = {
      primary: '#7431F4',
      secondary: '#B0C8EB',
      hover: '#24539b'
    }
    this.background = {
      default: '#121D2E',
      glassy: 'rgba(18, 29, 46, 0.3)',
      inverse: '#E8EDF6',
      inverseHover: '#fff',
      input: '#333333'
    }
    this.element = {
      strong: '#fff',
      regular: '#E8EDF6',
      disable: '#475569',
      inverseStrong: '#333333',
      inverseRegular: '#5A5A5A'
    }
    this.feedback = {
      success: '#00AC81',
      warning: '#D7D37F',
      error: '#bf4909'
    }
  }
}
