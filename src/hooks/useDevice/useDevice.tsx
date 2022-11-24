import { useEffect, useState } from 'react'
import { DeviceController } from 'hooks/useDevice/resize'
import { Devices } from 'utils/breakpoints'

export const hookUseDevice = () => {
  const [device, setDevice] = useState(Devices.undefined)

  useEffect(() => {
    if (device === Devices.undefined) {
      DeviceController.loadDevice(device, setDevice)
    } else {
      function callback() {
        return DeviceController.handleResize(device, setDevice, callback)
      }
      window.addEventListener('resize', callback)
    }
  }, [device])

  return device
}
