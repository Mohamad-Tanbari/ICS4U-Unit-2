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
   */
  public pushStr(pushedStr) {
    this.stackList.push(pushedStr)
  }

  /**
   * This method returns the stack as a string.
   *
   * @returns {string} The stack as a string.
   */
  public showStack() {
    let stackValues = ''
    for (let counter = 0; counter < this.stackList.length; counter++) {
      stackValues = stackValues + this.stackList[counter] + ', '
    }
    stackValues = stackValues.substring(0, stackValues.length - 2)

    return stackValues
  }
}
