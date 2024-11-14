/*
 * The truck subclass extending Vehicle
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-12
 */

import Vehicle from './Vehicle.ts'

/**
 * The truck class
 */
export class Truck extends Vehicle {
  /**
   * The licensePlate property
   */
  private _liscensePlate: string

  /**
   * The amount of doors the vehicle has
   */
  private readonly _numberOfDoors: number = 2

  /**
   * Constructor
   *
   * @param {string} color - Color of the truck.
   * @param {number} maxSpeed - The max speed of the truck.
   * @param {string} liscensePlate - The license plate of the truck.
   */
  constructor (color: string,
    maxSpeed: number,
    liscensePlate: string,
    amountOfWheels: number) {
    super(color, maxSpeed, amountOfWheels)
    this._liscensePlate = liscensePlate
  }

  /**
   * The getter for the licensePlate property.
   *
   * @return {string} licensePlate - The current license plate of the vehicle.
   */
  public get licensePlate (): string {
    return this._liscensePlate
  }

  /**
   * The setter for the licensePlate property.
   *
   * @param {string} newLicensePlate - The new license plate you want to assign.
   */
  public set licensePlate (newLicensePlate: string) {
    this._liscensePlate = newLicensePlate
  }

  /**
   * The getter for the number of doors the truck has.
   *
   * @return {number} The number of doors the vehicle has.
   */
  public get numberOfDoors (): number {
    return this._numberOfDoors
  }

  /**
   * The provide air method to give the truck some air.
   *
   * @param {number} airPressure
   */
  public provideAir (airPressure: number): void {
    super.speed = super.speed - airPressure / 2
  }

  /**
   * This getter gives info on all properties of the vehicle.
   *
   * @return {string} A string containing all the property values.
   */
  public status (): string {
    const statusString = `-> Speed: ${super.speed}\n` +
                         `-> Max Speed: ${super.maxSpeed}\n` +
                         `-> Number of doors: ${this.numberOfDoors}\n` +
                         `-> Liscense Plate: ${this.licensePlate}\n` +
                         `-> Wheels: ${super.numberOfWheels}\n` +
                         `-> Color: ${super.colour}`

    return statusString
  }
}
