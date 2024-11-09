/**
 * This is the airplane class.
 * 
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-05
 */

/**
 * The Airplane class.
 */
export class Airplane {
  /**
   * The speed property.
   */
  protected _speed: number = 0

  /**
   * The setter for the speed property.
   *
   * @param {number} speed - The speed to set the airplane to.
   */
  public set speed (speed: number) {
    if (speed < 0) {
      this._speed = 0
    } else {
      this._speed = speed
    }
  }

  /**
   * The getter for the speed property.
   *
   * @return {number} speed - The current speed of the airplane.
   */
  public get speed (): number {
    return this._speed
  }
}
