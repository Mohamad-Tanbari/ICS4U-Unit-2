/*
 * The main Typescript file to test the Airplane class and its children.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-09
 */

import { Airplane } from './Airplane'
import { Jet } from './Jet'

const biplane = new Airplane()
biplane.speed = 212
console.log(biplane.speed)

const boeing = new Jet()
boeing.speed = 422
console.log(boeing.speed)

for (let counter = 0; counter < 4; counter++) {
  boeing.accelerate()
  console.log(boeing.speed)
  if (boeing.speed > 5000) {
    biplane.speed = biplane.speed * 2
  } else {
    boeing.accelerate()
  }
}

console.log(biplane.speed)
