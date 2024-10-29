/* This is the main.ts file used to test the MrCoxallStack class.
 *
 * Author: Mohamad T
 * Version: 1.0
 * Since: 2024-10-16
 */

import { MrCoxallStack } from './MrCoxallStack.ts'

const colorStack = new MrCoxallStack()
console.log('Color items:')
console.log(`The size of the stack is: ${colorStack.size}`)
colorStack.pushStr('red')
colorStack.pushStr('green')
colorStack.pushStr('blue')
console.log(`Color items: ${colorStack.showStack}`)
console.log(`Top item: ${colorStack.popItem}`)
console.log(`Color items: ${colorStack.showStack}`)
console.log(`The size of the stack is: ${colorStack.size}`)
console.log(`Is the stack empty? ${colorStack.isEmpty}\n`)

console.log('\nDone.')
