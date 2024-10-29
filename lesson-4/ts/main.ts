/* This is the main.ts file used to test the MrCoxallStack class.
 *
 * Author: Mohamad T
 * Version: 1.0
 * Since: 2024-10-16
 */

import { MrCoxallStack } from './MrCoxallStack.ts'

const fruitStack = new MrCoxallStack()
console.log(`The size of the stack is: ${fruitStack.size}`)
fruitStack.pushStr('apple')
fruitStack.pushStr('banana')
fruitStack.pushStr('cherry')
console.log(`Fruit items: ${fruitStack.showStack}`)
console.log(`Top item: ${fruitStack.popItem}`)
console.log(`Fruit items: ${fruitStack.showStack}`)
console.log(`The size of the stack is: ${fruitStack.size}`)
console.log(`Is the stack empty? ${fruitStack.isEmpty}\n`)

const colorStack = new MrCoxallStack()
console.log(`The size of the stack is: ${colorStack.size}`)
colorStack.pushStr('red')
colorStack.pushStr('green')
colorStack.pushStr('blue')
console.log(`Color items: ${colorStack.showStack}`)
console.log(`Top item: ${colorStack.popItem}`)
console.log(`Color items: ${colorStack.showStack}`)
console.log(`The size of the stack is: ${colorStack.size}`)
console.log(`Is the stack empty? ${colorStack.isEmpty}\n`)

const dogStack = new MrCoxallStack()
console.log(`The size of the stack is: ${dogStack.size}`)
dogStack.pushStr('poodle')
dogStack.pushStr('retriever')
dogStack.pushStr('beagle')
console.log(`Dog items: ${dogStack.showStack}`)
console.log(`Top item: ${dogStack.popItem}`)
console.log(`Dog items: ${dogStack.showStack}`)
console.log(`The size of the stack is: ${dogStack.size}`)
console.log(`Is the stack empty? ${dogStack.isEmpty}`)

console.log('\nDone.')
