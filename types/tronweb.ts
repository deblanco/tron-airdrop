export declare class TronWeb {
  constructor (ConnectionDetails: {
    fullNode?: string;
    solidityNode?: string;
    eventServer?: string;
    privateKey?: string;
  });
  setPrivateKey (pk: string): void
  createAccount (): Promise<{
    privateKey: string;
    publicKey: string;
    address: { base58: string; hex: string };
  }>
  trx: {
    getAccount (address: string): Promise<{ balance: number }>;
    sendToken (
      to: string,
      amount: number,
      tokenID: string,
      privateKey: string
    ): Promise<any>;
  }
  transactionBuilder: {
    sendToken (
      to: string,
      amount: number,
      tokenID: string,
      from?: string,
      options?: number
    ): Promise<any>;
  }
  address: {
    toHex (address: string): string;
  }
}

export default TronWeb
