/* This is the main.ts file used to test the MrCoxallStack class.
 *
 * Author: Mohamad T
 * Version: 1.0
 * Since: 2024-10-16
 */

import { MrCoxallStack } from './MrCoxallStack.ts'

const dogStack = new MrCoxallStack()
console.log('Dog items:')
console.log(`The size of the stack is: ${dogStack.size}`)
dogStack.pushStr('poodle')
dogStack.pushStr('retriever')
dogStack.pushStr('beagle')
console.log(`Dog items: ${dogStack.showStack}`)
console.log(`Top item: ${dogStack.popItem}`)
console.log(`Dog items: ${dogStack.showStack}`)
console.log(`The size of the stack is: ${dogStack.size}`)
console.log(`Is the stack empty? ${dogStack.isEmpty}`)
console.log(`The top item is: ${dogStack.peekItem}`)
console.log('Emptying the stack...')
dogStack.clearStack()
console.log(`The size of the stack is: ${dogStack.size}`)

console.log('\nDone.')
