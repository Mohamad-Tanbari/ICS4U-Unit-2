/*
* This program is a vehicle class.
*
* @author  Mr Coxall
* @version 1.0
* @since   2020-01-01
*/

import { Truck } from './Truck'
import { Bike } from './Bike'

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:')
console.log(bmx.status())

console.log('Set the cadense to 10\n')
bmx.accelerate(10, 2)
console.log(bmx.status())

console.log('\nAccelerate by 15:')
bmx.accelerate(15, 1)
console.log(`Status: \n${bmx.status()}`)
console.log(bmx.ringBell())

const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:')
console.log(bigTruck.status())

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log(`New speed: ${bigTruck.speed}`)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log(`New speed: ${bigTruck.speed}`)

console.log('\nApplyed air pressure of 10:')
bigTruck.provideAir(10)
console.log(`New speed: ${bigTruck.speed}`)

console.log('\nDone.')
