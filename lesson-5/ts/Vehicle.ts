/**
 * This is the Vehicle class
 *
 * By: Mohamad Tanbari
 * Version: 1.0
 * Since: 2024-10-31
 */

export default class Vehicle {
  /**
   * The liscense plate of the vehicle.
   */
  private privateLiscensePlate: string

  /**
   * The color of the vehicle.
   */
  private privateColour: string

  /**
   * The number of doors the vehicle has.
   */
  private readonly numberOfDoors: number

  /**
   * The current speed of the vehicle.
   */
  private privateSpeed: number = 0

  /**
   * The max speed of the Vehicle.
   */
  private readonly maxSpeed: number

  /**
   * The constructor to change the values of the variables.
   */
  constructor (colour: string,
    liscensePlate: string,
    numberOfDoors: number,
    maxSpeed: number) {
    this.privateColour = colour
    this.privateLiscensePlate = liscensePlate
    this.numberOfDoors = numberOfDoors
    this.maxSpeed = maxSpeed
  }

  /**
   * The getter for the licensePlate property.
   *
   * @return {string} licensePlate - The current license plate of the vehicle.
   */
  public get licensePlate (): string {
    return this.privateLiscensePlate
  }

  /**
   * The setter for the licensePlate property.
   *
   * @param {string} newLicensePlate - The new license plate you want to assign.
   */
  public set licensePlate (newLicensePlate: string) {
    this.privateLiscensePlate = newLicensePlate
  }

  /**
   * The getter for the colour property.
   *
   * @return {string} colour - The current colour of the vehicle.
   */
  public get colour (): string {
    return this.privateColour
  }

  /**
   * The setter for the colour property.
   *
   * @param {string} newColour - The new color to set the vehicle as.
   */
  public set colour (newColour: string) {
    this.privateColour = newColour
  }

  /**
   * The getter for the speed of the vehicle.
   *
   * @return {number} speed - The current speed of the vehicle.
   */
  public get speed (): number {
    return this.privateSpeed
  }

  /**
   * The accelerate method to increase the speed of the vehicle.
   *
   * @param {number} accelerationPower - The intensity of the acceleration.
   * @param {number} accelerationTime - The time the vehicle accelerates for.
   */
  public accelerate (accelerationPower: number,
    accelerationTime: number): void {
    this.privateSpeed = (accelerationPower * accelerationTime) + this.speed

    // Ensure that the vehicle does not accelerate beyond max speed
    if (this.privateSpeed > this.maxSpeed) {
      this.privateSpeed = this.maxSpeed
    }
  }

  /**
   * The break method to slow down the vehicle.
   *
   * @param {number} brakePower - The intensity of the brakes.
   */
  public brake (brakePower: number, brakeTime: number): void {
    this.privateSpeed = this.privateSpeed - (brakePower * brakeTime)

    // Ensure speed does not fall below zero
    if (this.privateSpeed < 0) {
      this.privateSpeed = 0
    }
  }
}
