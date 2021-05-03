import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { VGD } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const vgdPriceUsd = priceData ? parseFloat(priceData.data[VGD.address].price) : 0

  const vgdPriceUsdString =
    Number.isNaN(vgdPriceUsd) || vgdPriceUsd === 0
      ? ''
      : ` - $${vgdPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `VangoldSwap${vgdPriceUsdString}`
  }, [vgdPriceUsdString])
}
export default useGetDocumentTitlePrice
