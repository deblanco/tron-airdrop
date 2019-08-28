# Tron airdrop

An script to deploy air drops of TRC10 tokens in Tron blockchain from a CSV file.

## Quick start

Clone the project, the change your workdir to the project directory and install the dependencies:

```
git clone git@github.com:deblanco/tron-airdrop.git
cd tron-airdrop
npm install
```

## Arguments

The script should be executed in the next form:

```
npm start -- -f csvFile.csv -p senderAddressPrivateKey -t tokenId
```

```
Options:
  -V, --version                  output the version number
  -f, --file <file>              file to parse location, should be a CSV with "address,amount" format
  -p, --privateKey <privateKey>  sender private key (no support for WIF format yet)
  -t, --token <tokenId>          token token Id
  -tn, --testnet                 send through testnet
  -h, --help                     output usage information
```

## Input CSV file

The CSV that contains the addresses which will receive the airdrop should be formatted in the next way: \<address>,\<amount>

```csv
TXUJbE7RN2Jpi8zGrW2ZyBUMkvsqqRJLuB,21
TGNRoMMQpdjTbhscJ4qacrJFhXMm4WdwNM,1
TGNRoMMQpdjTbhscJ4qacrJFhXMm4WdwNM,7
TWnCaTgPovThgkeMXojgg65AJEU5HdEwPR,4
```

**Note: The amount field should include the decimals!**

## Example

```
npm start -- -f test.csv -p d9d1392ae21cbe8b910311b9c3016f8f995ac45c811d5896e5c2606fe01a45fb -t d01be91dd3d9c0f09cedef20298e73109a788397
```

## Credits

Daniel Blanco &copy; 2019
