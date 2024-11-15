/*
 * The bike subclass extending Vehicle.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-12
 */

import Vehicle from './Vehicle.ts'

const NUMBER_OF_WHEELS = 2

/**
 * The Bike class.
 */
export class Bike extends Vehicle {
  /**
   * The cadence property
   */
  private _cadence: number

  /**
   * The gear of the bike
   */
  private _gear: number = 1

  /**
   * Constructor.
   *
   * @param {string} color - The color of the bike.
   * @param {number} maxSpeed - The max speed of the bike.
   */
  constructor (color: string, maxSpeed: number) {
    super(color, maxSpeed, NUMBER_OF_WHEELS)
    this._cadence = 0
  }

  /**
   * The getter for the candence property.
   *
   * @return {number} The current cadence of the bike.
   */
  public get cadence (): number {
    return this._cadence
  }

  /**
   * The setter for the cadence property.
   *
   * @param {number} newCadence - The new cadence of the bike to set.
   */
  public set cadence (newCadence: number) {
    this._cadence = newCadence
  }

  /**
   * The getter for the gear property.
   *
   * @return {number} The current gear of the bike.
   */
  public get gear (): number {
    return this._gear
  }

  /**
   * The setter for the gear property.
   *
   * @param {number} newGear
   */
  public set gear (newGear: number) {
    if (newGear > 0) {
      this._gear = 1
    } else {
      this._gear = newGear
    }
  }

  /**
   * The accelerate method to override the one in Vehicle.
   *
   * @param {number} appliedPower
   * @param {number} newGear
   */
  public accelerate (appliedPower: number, newGear: number): void {
    // Update the gear
    this.gear = newGear
    this.cadence = this.cadence + appliedPower
    super.speed = super.speed + (this.cadence * newGear)
  }

  /**
   * The ring bell method to ring the bell of the bike.
   *
   * @return {string} the sound of the bell.
   */
  public ringBell (): string {
    return 'Ding ding!\n'
  }

  /**
   * This getter gives info on all properties of the vehicle.
   *
   * @return {string} A string containing all the property values.
   */
  public status (): string {
    const statusString = `-> Speed: ${super.speed}\n` +
                         `-> Max Speed: ${super.maxSpeed}\n` +
                         `-> Cadence: ${this.cadence}\n` +
                         `-> Wheels: ${super.numberOfWheels}\n` +
                         `-> Color: ${super.colour}`

    return statusString
  }
}
