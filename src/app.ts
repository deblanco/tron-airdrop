import 'regenerator-runtime/runtime'
import { transformCsvToArray, isCsvFormatCorrect } from './csv'
import program from 'commander'
import { getTronWebInstance, getTransactions } from './transactionSender'

program.version('v0.0.1')
program
  .option(
    '-f, --file <file>',
    'file to parse location, should be a CSV with "address,amount" format'
  )
  .option('-p, --privateKey <privateKey>', 'sender private key')
  .option('-t, --token <tokenId>', 'token TRC10 ID')
  .option('-tn, --testnet', 'send through testnet')
  .parse(process.argv)

const paramsList = ['file', 'privateKey', 'token']

function main () {
  if (paramsList.some(k => !program[k])) {
    paramsList.forEach(k => {
      if (!program[k]) {
        console.error(`Parameter "${k}" is missing.`)
      }
    })
    console.error('Something goes wrong.')
    process.exit(0)
  }

  const csvContent = transformCsvToArray(program.file)
  const checkCsvContent = isCsvFormatCorrect(csvContent)

  if (!checkCsvContent) {
    console.error('CSV content is incorrect')
    process.exit(0)
  }

  const tronWeb = getTronWebInstance(program.testnet)

  const transactions = getTransactions(
    tronWeb,
    program.token,
    program.privateKey,
    csvContent
  )

  Promise.all(transactions).then(result => {
    console.log('---- TRANSACTIONS DONE ----')
    console.log(JSON.stringify(result, null, 4))
  })
}

main()
