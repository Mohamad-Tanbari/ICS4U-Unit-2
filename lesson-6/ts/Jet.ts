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
   * The setter for jet speed.
   *
   * @param {number} speed - The new speed to set the jet to.
   */
  public set speed (newSpeed: number) {
    if (newSpeed < 0) {
      super.speed = 0
    } else {
      super.speed = newSpeed * this.MULTIPLIER
    }
  }

  /**
   * Redefine the speed setter to prevent issues.
   *
   * @return {number} speed - The current speed of the jet.
   */
  public get speed (): number {
    return super.speed
  }

  /**
   * The accelerate method of the jet class.
   */
  public accelerate (): void {
    super.speed = super.speed * 2
  }
}
