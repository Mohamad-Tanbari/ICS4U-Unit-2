/*
 * This program expands strings
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-04
 */

/**
 * The main class.
 */
public final class Main {
    /**
     * Prevent instantiation.
     */
    private Main() { }

    /**
     * The blowUp method to blow strings up.
     *
     * @param string the string to blow up.
     * @return The blown up string.
     */
    public static String blowUp(String string) {
        String newString = "";
        final int length = string.length();
        int counter = 0;

        while (counter < length) {
            // Variables
            int cachedNumber = 1;
            char cachedLetter = '\0';

            // Check if there's a number followed by a letter
            if (Character.isDigit(string.charAt(counter))) {
                cachedNumber = Character.getNumericValue(
                    string.charAt(counter)
                );

                // Only process the letter if it exists after the number
                if (counter + 1 < length && Character.isLetter(
                      string.charAt(counter + 1))
                    ) {
                    cachedLetter = string.charAt(counter + 1);
                    counter += 2;
                } else {
                    newString += string.charAt(counter);
                    counter++;
                    continue;
                }
            } else {
                // If there's no number or following letter
                newString += string.charAt(counter);
                counter++;
                continue;
            }

            // Multiply string by number
            newString += String.valueOf(cachedLetter).repeat(cachedNumber);
        }

        return newString;
    }

    /**
     * The main method.
     *
     * @param args unused.
     */
    public static void main(String[] args) {
        System.out.println(blowUp("3a2b55"));
    }
}
