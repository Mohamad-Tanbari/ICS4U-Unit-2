/*
 * This is the MrCoxallStack class.
 *
 * Author: Mohamad T
 * Version: 1.0
 * Since: 2024-10-16
 */

export class MrCoxallStack {
  /**
   * The MrCoxallStack list
   */
  private readonly stackList: string[] = []

  /**
   * This method returns the stack as a string.
   *
   * @return {string} The stack as a string.
   */
  public get showStack (): string {
    let stackValues = ''
    for (let counter = 0; counter < this.stackList.length; counter++) {
      stackValues = stackValues + this.stackList[counter] + ', '
    }
    stackValues = stackValues.substring(0, stackValues.length - 2)

    return stackValues
  }

  /**
   * This method removes the top item and returns it as a string.
   *
   * @return {string}
   */
  public get popItem (): string {
    // Ensure that the stack is full.
    if (this.stackList.length < 1) {
      return 'The stack is empty!'
    }

    // Grab top item
    const topItemIndex = this.stackList.length - 1
    const topItem = this.stackList[topItemIndex]

    // Remove the top item
    this.stackList.splice(topItemIndex, 1)

    return topItem
  }

  /**
   * This method returns a string that is either "true" or "false"
   *  to check if the stack is empty or not.
   *
   *  @return {string} True or False
   */
  public get isEmpty (): string {
    let stackEmpty: boolean
    if (this.stackList.length < 0) {
      stackEmpty = true
    } else {
      stackEmpty = false
    }
    return stackEmpty.toString()
  }

  /**
   * This method gets the size of the stack
   *
   * @return {number}
   */
  public get size (): number {
    return this.stackList.length
  }

  /**
   * This method pushes a string into the stack.
   *
   * @param {string} pushedStr - The string to push into the stack.
   * @return {void}
   */
  public pushStr (pushedStr: string): void {
    this.stackList.push(pushedStr)
  }

  /**
   * This method shows the top item without changing anything.
   *
   * @return {string}
   */
  public get peekItem (): string {
    if (this.stackList.length < 1) {
      return 'The stack is empty!'
    }

    // Grab top item
    const topItemIndex = this.stackList.length - 1

    // Return top item
    return this.stackList[topItemIndex]
  }

  /**
   * This method clears the stack and returns nothing.
   *
   * @return {void}
   */
  public clearStack (): void {
    while (this.stackList.length > 0) {
      this.stackList.splice(-1, 1)
    }
  }
}
