/*
 * The test script used to test the triangle class.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-15
 */

import Triangle from './Triangle.ts'

const triangle = new Triangle (2, 4, 5)

console.log(triangle.isValid())
console.log(`Area: ${triangle.area()}`)

console.log(`Angle A: ${triangle.angle(1)}`)
console.log(`Angle B: ${triangle.angle(2)}`)
console.log(`Angle C: ${triangle.angle(3)}`)
