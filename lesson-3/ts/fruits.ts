/* This is the main.ts file used to test the MrCoxallStack class.
 *
 * Author: Mohamad T
 * Version: 1.0
 * Since: 2024-10-16
 */

import { MrCoxallStack } from './MrCoxallStack.ts'

const fruitStack = new MrCoxallStack()
console.log('Fruit items:')
console.log(`The size of the stack is: ${fruitStack.size}`)
fruitStack.pushStr('apple')
fruitStack.pushStr('banana')
fruitStack.pushStr('cherry')
console.log(`Fruit items: ${fruitStack.showStack}`)
console.log(`Top item: ${fruitStack.popItem}`)
console.log(`Fruit items: ${fruitStack.showStack}`)
console.log(`The size of the stack is: ${fruitStack.size}`)
console.log(`Is the stack empty? ${fruitStack.isEmpty}\n`)

console.log('\nDone.')
