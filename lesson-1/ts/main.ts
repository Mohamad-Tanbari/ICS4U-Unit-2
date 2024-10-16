/* This is the main.ts file used to test the MrCoxallStack class.
 *
 * Author: Mohamad T
 * Version: 1.0
 * Since: 2024-10-16
 */

import { MrCoxallStack } from './MrCoxallStack.ts'

const fruitStack = new MrCoxallStack()
fruitStack.pushStr('apple')
fruitStack.pushStr('banana')
fruitStack.pushStr('cherry')
console.log(`Fruit items: ${fruitStack.showStack()}`)

const colorStack = new MrCoxallStack()
colorStack.pushStr('red')
colorStack.pushStr('green')
colorStack.pushStr('blue')
console.log(`Color items: ${colorStack.showStack()}`)

const dogStack = new MrCoxallStack()
dogStack.pushStr('poodle')
dogStack.pushStr('retriever')
dogStack.pushStr('beagle')
console.log(`Dog items: ${dogStack.showStack()}`)

console.log('\nDone.')
