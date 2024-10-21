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
  stackList: string[] = []

  /**
   * This method pushes a string into the stack.
   *
   * @param {string} pushedStr - The string to push into the stack.
   * @return {void}
   */
  public pushStr (pushedStr): void {
    this.stackList.push(pushedStr)
  }

  /**
   * This method returns the stack as a string.
   *
   * @return {string} The stack as a string.
   */
  public showStack (): string {
    let stackValues = ''
    for (let counter = 0; counter < this.stackList.length; counter++) {
      stackValues = stackValues + this.stackList[counter] + ', '
    }
    stackValues = stackValues.substring(0, stackValues.length - 2)

    return stackValues
  }
}
