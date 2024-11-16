/*
 * The triangle class.
 *
 * Author: Mohamad Tanbari
 * Version: 1.0.0
 * Since: 2024-11-15
 */

/**
 * The triangle class.
 */
export default class Triangle {
  /**
   * The first sidelength.
   */
  private _sideLength1: number

  /**
   * The second sidelength.
   */
  private _sideLength2: number

  /**
   * The third sidelength.
   */
  private _sideLength3: number

  /**
   * Constructor
   *
   * @param {number} sideLength1
   * @param {number} sideLength2
   * @param {number} sideLength3
   */
  constructor(sideLength1: number,
    sideLength2: number,
    sideLength3: number) {
    // Set the passed in values to the properties.
    this._sideLength1 = sideLength1
    this._sideLength2 = sideLength2
    this._sideLength3 = sideLength3
  }

  /**
   * Getter for sideLength1.
   */
  public get sideLength1 (): number {
    return this._sideLength1
  }

  /**
   * Getter for sideLength2.
   */
  public get sideLength2 (): number {
    return this._sideLength2
  }

  /**
   * Getter for sideLength3.
   */
  public get sideLength3 (): number {
    return this._sideLength3
  }

  /**
   * The get perimeter function.
   */
  private get perimeter (): number {
    return this.sideLength1 + this.sideLength2 + this.sideLength3
  }

  /**
   * The semiPerimeter method.
   *
   * @return {number} semiPerimeter.
   */
  public semiPerimeter (): number {
    return this.perimeter / 2
  }

  /**
   * The isValid method.
   */
  public isValid (): boolean {
    let valid: boolean = false

    if (this.sideLength1 < (this.sideLength2 + this.sideLength3)) {
      if (this.sideLength2 < (this.sideLength1 + this.sideLength3)) {
        if (this.sideLength3 < (this.sideLength2 + this.sideLength1)) {
          valid = true
        }
      }
    }

    return valid
  }

  /**
   * The get area method.
   *
   * @return {number} area - The area of the triangle.
   */
  public area(): number {
    const semiPerimeter = this.semiPerimeter()

    let area = (semiPerimeter - this.sideLength1) *
               (semiPerimeter - this.sideLength2) *
               (semiPerimeter - this.sideLength3) *
               semiPerimeter

    area = Math.sqrt(area)

    area = Number(area.toFixed(2))

    return area
  }

  /**
   * The get angle method. Pick 1 - 3.
   *
   * @return {number} angle.
   */
  public angle (angleNumber: number): number {
    let angle: number
    if (angleNumber === 1) {
      // cos A = (b^2 + c^2 - a^2) / 2bc
      angle = (this.sideLength2 ** 2 +
               this.sideLength3 ** 2 -
               this.sideLength1 ** 2) /
              (2 * this.sideLength2 *
               this.sideLength3)

      angle = Math.acos(angle)
    } else if (angleNumber === 2) {
      // cos B = (a^2 + c^2 - b^2) / 2ac
      angle = (this.sideLength1 ** 2 +
               this.sideLength3 ** 2 -
               this.sideLength2 ** 2) /
              (2 * this.sideLength1 *
               this.sideLength3)

      angle = Math.acos(angle)
    } else if (angleNumber === 3) {
      // cos C = (b^2 + a^2 - c^2) / 2ab
      angle = (this.sideLength2 ** 2 +
               this.sideLength1 ** 2 -
               this.sideLength3 ** 2) /
              (2 * this.sideLength1 *
               this.sideLength2)

      angle = Math.acos(angle)
    } else {
      angle = -1
    }

    angle = Number(angle.toFixed(2))

    return angle
  }


  /**
   * The type function to check what type of triangle it is.
   */
  public getType (): string {
    let type: string = '-1'
    
    // Equilateral triangle
    if (this.sideLength1 === this.sideLength2 &&
      this.sideLength3 === this.sideLength1) {
      type = 'Equilateral'
    }

    // Isoceles triangle


    return type
  }
}
