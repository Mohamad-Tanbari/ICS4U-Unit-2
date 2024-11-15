/**
 * This is the Vehicle class
 *
 * By: Mohamad Tanbari
 * Version: 1.0
 * Since: 2024-10-31
 */

export default class Vehicle {
  /**
   * The color of the vehicle.
   */
  private _colour: string

  /**
   * The current speed of the vehicle.
   */
  private _speed: number = 0

  /**
   * The max speed of the Vehicle.
   */
  private readonly _maxSpeed: number

  /**
   * The amount of wheels the vehicle has.
   */
  private readonly _amountOfWheels: number

  /**
   * The constructor to change the values of the variables.
   */
  constructor (colour: string, maxSpeed: number, amountOfWheels: number) {
    this._colour = colour
    this._maxSpeed = maxSpeed
    this._amountOfWheels = amountOfWheels
  }

  /**
   * The getter for the colour property.
   *
   * @return {string} colour - The current colour of the vehicle.
   */
  public get colour (): string {
    return this._colour
  }

  /**
   * The setter for the colour property.
   *
   * @param {string} newColour - The new color to set the vehicle as.
   */
  public set colour (newColour: string) {
    this._colour = newColour
  }

  /**
   * The getter for the speed of the vehicle.
   *
   * @return {number} speed - The current speed of the vehicle.
   */
  public get speed (): number {
    return this._speed
  }

  /**
   * The setter for the speed property.
   *
   * @param {number} newSpeed - The new speed to set the vehicle to.
   */
  public set speed (newSpeed: number) {
    if (newSpeed < 0) {
      this._speed = 0
    } else if (newSpeed > this._maxSpeed) {
      this._speed = this._maxSpeed
    } else {
      this._speed = newSpeed
    }
  }

  /**
   * The getter for the wheels property.
   *
   * @return {number} numberOfWheels - The wheels that the vehicle has.
   */
  public get numberOfWheels (): number {
    return this._amountOfWheels
  }

  /**
   * The getter for the max speed property.
   *
   * @return {number} The max speed of the vehicle/
   */
  public get maxSpeed (): number {
    return this._maxSpeed
  }

  /**
   * The accelerate method to increase the speed of the vehicle.
   *
   * @param {number} accelerationPower - The intensity of the acceleration.
   * @param {number} accelerationTime - The time the vehicle accelerates for.
   */
  public accelerate (accelerationPower: number,
    accelerationTime: number): void {
    this._speed = (accelerationPower * accelerationTime) + this._speed

    // Ensure that the vehicle does not accelerate beyond max speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  /**
   * The break method to slow down the vehicle.
   *
   * @param {number} brakePower - The intensity of the brakes.
   */
  public brake (brakePower: number, brakeTime: number): void {
    this._speed = this._speed - (brakePower * brakeTime)

    // Ensure speed does not fall below zero
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
