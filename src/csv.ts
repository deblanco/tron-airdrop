import fs from 'fs'

export function transformCsvToArray (path: string) {
  const fileContent = fs.readFileSync(path, { encoding: 'utf8' })
  return fileContent.split('\n').map(r => r.split(','))
}

export function isCsvFormatCorrect (arr: string[][]) {
  const amountRegExp = /^[0-9]+$/
  const addressCheck = (address: string) =>
    address.length === 40 || address.length === 34
  return arr.every((row, i) => {
    if (!addressCheck(row[0]) || !amountRegExp.test(row[1])) {
      console.log(
        `Error checking CSV content. Line ${i}, ${JSON.stringify(row)}`
      )
      return false
    }
    return true
  })
}
