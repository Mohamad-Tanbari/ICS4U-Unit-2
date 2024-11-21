/*
 * This program expands strings.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-10-25
 */

function blowUp (string: string): string {
  // Make sure the input is not empty
  if (string === '') {
    return "-1"
  }

  let stringCopy = string // Copy of the inputted string, to not modify original
  let newString: string = '' // The new string that will be returned

  while (stringCopy.length > 0) {
    // Variables
    let cachedNumber: number = 1
    let cachedLetter: string = ''

    // Check if there is a number followed by a letter
    const tempNumber = parseInt(stringCopy[0])
    // Only check the following number if the string is large enough
    let tempNumber2: number = -1
    if (stringCopy.length > 1) {
      tempNumber2 = parseInt(stringCopy[1])
    }

    if (tempNumber2 !== -1 && !isNaN(tempNumber) && isNaN(tempNumber2)) {
      // if there is a number followed by a letter
      // save the to cache letters
      cachedNumber = tempNumber
      cachedLetter = stringCopy[1]

      // remove the letters from the string
      stringCopy = stringCopy.slice(0, 0) +
        stringCopy.slice(2)
    } else {
      // If the next two characters don't fit the format
      newString += stringCopy[0]
      stringCopy = stringCopy.slice(0, 0) +
        stringCopy.slice(1)
    }

    // Add the letter x times depending on the cached number
    for (let counter = 0; counter < cachedNumber; counter++) {
      newString += cachedLetter
    }
  }

  return newString
}

const testString: string = '2xy5a55'
const testString2: string = '5534311'
const testString3: string = ''
const testString4: string = 'hello'

console.log(`Original string: ${testString}`)
console.log(`Blown up string: ${blowUp(testString)}`)
console.log('')

console.log(`Original string: ${testString2}`)
console.log(`Blown up string: ${blowUp(testString2)}`)
console.log('')

console.log(`Original string: ${testString3}`)
console.log(`Blown up string: ${blowUp(testString3)}`)
console.log('')

console.log(`Original string: ${testString4}`)
console.log(`Blown up string: ${blowUp(testString4)}`)

console.log('\nDone.')
