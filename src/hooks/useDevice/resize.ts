import React from 'react'
import { Breakpoints } from '../../utils/breakpoints'
import { Devices } from 'utils/breakpoints'

export class DeviceController {
  public static handleViewport(deviceId: Devices): Devices {
    const viewportWidth: number = window.innerWidth

    if (viewportWidth <= Breakpoints.mobile_sm && deviceId !== 1) {
      return Devices.mobile_sm
    } else if (viewportWidth > Breakpoints.mobile_sm && viewportWidth <= Breakpoints.mobile && deviceId !== 2) {
      return Devices.mobile
    } else if (viewportWidth > Breakpoints.mobile && viewportWidth <= Breakpoints.tablet && deviceId !== 3) {
      return Devices.tablet
    } else if (viewportWidth > Breakpoints.tablet && viewportWidth <= Breakpoints.desktop_sm && deviceId !== 4) {
      return Devices.desktop_sm
    } else if (viewportWidth > Breakpoints.desktop_sm && viewportWidth <= Breakpoints.desktop && deviceId !== 5) {
      return Devices.desktop
    } else if (viewportWidth > Breakpoints.desktop && deviceId !== 6) {
      return Devices.ultra_wide
    } else {
      return Devices.undefined
    }
  }

  public static handleResize(deviceId: Devices, setDevice: React.Dispatch<React.SetStateAction<Devices>>, callback?: any): void {
    const device = this.handleViewport(deviceId)
    if (device !== Devices.undefined) {
      window.removeEventListener('resize', callback)
      setDevice(device)
    }
  }

  public static loadDevice(deviceId: Devices, setDevice: React.Dispatch<React.SetStateAction<Devices>>): void {
    const device = this.handleViewport(deviceId)
    if (device !== Devices.undefined) {
      setDevice(device)
    }
  }
}
