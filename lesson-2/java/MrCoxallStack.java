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
 * The MrCoxxalStack class.
 */
public class MrCoxallStack {
    /**
     * The list used for the stack.
     */
    private final List<String> stackList = new ArrayList<>();

    /**
     * The addStr method to append a string to the stack.
     *
     * @param str A string that you would like to append.
     */
    public void pushStr(String str) {
        this.stackList.add(str);
    }

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
}
