import { Interface } from '@ethersproject/abi'
import { ChainId } from '@pancakeswapfinance/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x4ca63fbF6B0fCD14Fc07618959f2f402b8dc5Ddb', // TODO
  [ChainId.BSCTESTNET]: '0x4ca63fbF6B0fCD14Fc07618959f2f402b8dc5Ddb'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }