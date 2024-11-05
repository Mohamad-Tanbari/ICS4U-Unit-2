/**
 * The jet child class of Airplane.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-05
 */

import { Airplane } from './Airplane'

/**
 * The jet class.
 */
export class Jet extends Airplane {
  /**
   * The multiplier property.
   */
  private readonly MULTIPLIER: number = 2

  /**
   * The constructor.
   */
  constructor() {
    // Call the constructor ofthe parent class.
    super()
  }

  /**
   * The setter for jet speed.
   *
   * @param {number} speed - The new speed to set the jet to.
   */
  public set speed(speed: number) {
    super.speed = speed * this.MULTIPLIER
  }

  /**
   * The accelerate method of the jet class.
   */
  public accelerate(): void {
    super.speed = super.speed * 2
  }
}
