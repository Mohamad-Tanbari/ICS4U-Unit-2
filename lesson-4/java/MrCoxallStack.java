/*
 * The MrCoxallStack class.
 *
 * @author Mohamad T
 * @version 1.0.0
 * @since 2024-10-16
 */

import java.util.ArrayList;
import java.util.List;

/**
 * The MrCoxalStack class.
 */
public class MrCoxallStack {
    /**
     * The list used for the stack.
     */
    private final List<String> stackList = new ArrayList<>();

    /**
     * The showStack method to show the stored values of the stack in a string.
     *
     * @return a string containing the values of the stack.
     */
    public String showStack() {
        String stackValues = "";
        for (int counter = 0; counter < this.stackList.size(); counter++) {
            stackValues += this.stackList.get(counter) + ", ";
        }
        stackValues = stackValues.substring(0, stackValues.length() - 2);

        return stackValues;
    }

    /**
     * The addStr method to append a string to the stack.
     *
     * @param str A string that you would like to append.
     */
    public void pushStr(String str) {
        this.stackList.add(str);
    }

    /**
     * The popItem method to remove the top item and return it in a string.
     *
     * @return The top item in a string
     */
    public String popItem() {
        // Get the size of the list
        final int stackLength = this.stackList.size();
        String outputString;
        if (stackLength < 1) {
            // Return this if it is empty
            outputString = "The stack is empty!";
        }
        // Pick the top item
        outputString = this.stackList.get(stackLength - 1);

        // Remove item from list
        this.stackList.remove(stackLength - 1);

        return outputString;
    }

    /**
     * The isEmpty method to check if the stack contains anything.
     *
     * @return A true or false in a string
     */
    public String isEmpty() {
        final boolean empty;
        if (this.stackList.size() < 1) {
            empty = true;
        } else {
            empty = false;
        }

        final String boolAsString = Boolean.toString(empty);

        return boolAsString;
    }

    /**
     * The size method to check the size of the stack.
     *
     * @return An integer value of the stack's size
     */
    public int size() {
        return this.stackList.size();
    }
}
