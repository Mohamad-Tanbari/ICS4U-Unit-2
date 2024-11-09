/*
 * The main Typescript file to test the Airplane class and its children.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-09
 */

import { Airplane } from './Airplane'
import { Jet } from './Jet'

// Test the airplane class
const normalPlane = new Airplane()
console.log('Created an airplane object.')

// Check the speed
console.log(`The speed of this airplane is: ${normalPlane.speed}`)

// Change the speed
console.log('Changing speed...')
normalPlane.speed = 20

// Check the speed again
console.log(`The new speed of the plane is: ${normalPlane.speed}`)

// Test the Jet sub class
console.log('\n\n')
const jet = new Jet()
console.log('Created a jet object.')

// Check the speed
console.log(`The speed of this jet is: ${jet.speed}`)

// Change the speed
console.log('Changing speed...')
jet.speed = 20

// Check the speed again
console.log(`The new speed of the jet is: ${jet.speed}`)

