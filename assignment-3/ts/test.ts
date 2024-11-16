/*
 * The test script used to test the triangle class.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-15
 */

import Triangle from './Triangle.ts'

const triangle = new Triangle(2, 4, 5)

// console.log(`Valid: ${triangle.isValid()}`)
console.log(`Area: ${triangle.area()}`)

console.log(`Angle A: ${triangle.angle(1)}`)
console.log(`Angle B: ${triangle.angle(2)}`)
console.log(`Angle C: ${triangle.angle(3)}`)

console.log(`Type: ${triangle.getType()}`)

console.log(`Height A: ${triangle.height(1)}`)
console.log(`Height B: ${triangle.height(2)}`)
console.log(`Height C: ${triangle.height(3)}`)

console.log(`Incircle: ${triangle.innerCircleRadius()}`)

console.log(`Circumcircle: ${triangle.circumcircleRadius()}`)
