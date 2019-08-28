import TronWeb from 'tronweb'

const TESTNET_NODE = 'https://api.shasta.trongrid.io'
const MAINNET_NODE = 'https://api.trongrid.io'

export const getTronWebInstance = (testnet: boolean) =>
  new TronWeb({
    fullNode: testnet ? TESTNET_NODE : MAINNET_NODE,
    solidityNode: testnet ? TESTNET_NODE : MAINNET_NODE
  })

export function getTransactions (
  tronWeb: TronWeb,
  tokenId: string,
  privateKey: string,
  arrTo: string[][]
): Promise<any>[] {
  return arrTo.map(row => {
    const toAddr = tronWeb.address.toHex(row[0])
    return tronWeb.trx.sendToken(
      toAddr,
      parseInt(row[1], 10),
      tokenId,
      privateKey
    )
  })
}
