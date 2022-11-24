export type TDevice = 'mobile_sm' | 'mobile' | 'tablet' | 'desktop_sm' | 'desktop' | 'ultra_wide'

export enum Devices {
  undefined = 0,
  mobile_sm = 1,
  mobile = 2,
  tablet = 3,
  desktop_sm = 4,
  desktop = 5,
  ultra_wide = 6
}

export class Breakpoints {
  static readonly mobile_sm: number = 320
  static readonly mobile: number = 425
  static readonly tablet: number = 768
  static readonly desktop_sm: number = 1200
  static readonly desktop: number = 1900
  static readonly ultra_wide: number = 2560

  public static getAbove(device: TDevice) {
    return `(min-width: ${Breakpoints[device]}px)`
  }

  public static getBelow(device: TDevice) {
    return `(max-width: ${Breakpoints[device]}px)`
  }
}