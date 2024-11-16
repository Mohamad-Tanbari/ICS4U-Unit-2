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
  private readonly _sideLength1: number

  /**
   * The second sidelength.
   */
  private readonly _sideLength2: number

  /**
   * The third sidelength.
   */
  private readonly _sideLength3: number

  /**
   * Constructor
   *
   * @param {number} sideLength1
   * @param {number} sideLength2
   * @param {number} sideLength3
   */
  constructor (sideLength1: number,
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
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return -1
    }

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
  public area (): number {
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return -1
    }

    const semiPerimeter = this.semiPerimeter()

    let area = (semiPerimeter - this.sideLength1) *
               (semiPerimeter - this.sideLength2) *
               (semiPerimeter - this.sideLength3) *
               semiPerimeter

    area = Math.sqrt(area)

    return area
  }

  /**
   * The get angle method. Pick 1 - 3.
   *
   * @return {number} angle.
   */
  public angle (angleNumber: number): number {
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return -1
    }

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

    return angle
  }

  /**
   * The type function to check what type of triangle it is.
   *
   * @return {string} The type of triangle it is.
   */
  public getType (): string {
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return '-1'
    }

    // Equilateral triangle
    if (this.sideLength1 === this.sideLength2 &&
      this.sideLength2 === this.sideLength3) {
      return 'Equilateral'
    }

    // Isoceles triangle
    if (this.sideLength1 === this.sideLength2 ||
        this.sideLength2 === this.sideLength3 ||
        this.sideLength1 === this.sideLength3) {
      return 'Isoceles'
    }

    // Right angle triange
    if (this.sideLength1 ** 2 + this.sideLength2 ** 2 === this.sideLength3 ** 2 ||
        this.sideLength1 ** 2 + this.sideLength3 ** 2 === this.sideLength2 ** 2 ||
        this.sideLength2 ** 2 + this.sideLength3 ** 2 === this.sideLength1 ** 2) {
      return 'Right'
    }

    // Scalene
    return 'Scalene'
  }

  /**
   * The height method to get the height of the triangle.
   *
   * @param {number} sideNumber - Which side to use for the calculation
   */
  public height (sideNumber: number): number {
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return -1
    }

    let selectedSide: number = 0
    switch (sideNumber) {
      case 1:
        selectedSide = this.sideLength1
        break
      case 2:
        selectedSide = this.sideLength2
        break
      case 3:
        selectedSide = this.sideLength3
        break
      default:
        return -1
    }

    const area: number = this.area()

    const height: number = 2 * area / selectedSide

    return height
  }

  /**
   * The method to get the inner circle of the triangle.
   *
   * @return {number} The inner circle of the triangle.
   */
  public innerCircleRadius (): number {
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return -1
    }

    const semiPerimeter: number = this.semiPerimeter()
    const area: number = this.area()

    const radius: number = area / semiPerimeter

    return radius
  }

  /**
   * The method to get the circumcircle radius.
   *
   * @return {number} The radius of the circumcirclek.
   */
  public circumcircleRadius (): number {
    // Ensure the triangle is valid
    if (!this.isValid()) {
      return -1
    }

    const area: number = this.area()
    const allSidesMultiplied: number = this.sideLength1 *
                                       this.sideLength2 *
                                       this.sideLength3

    const radius: number = allSidesMultiplied / (4 * area)

    return radius
  }
}
