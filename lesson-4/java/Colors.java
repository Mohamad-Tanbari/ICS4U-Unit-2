/*
 * This is the main class used to test the MrCoxallStack class.
 *
 * @author Mohamad Tanbari
 * @version 1.0
 * @since 2024-10-18
 */

/**
 * The Colors class.
 */
final class Colors {
    /**
     * Prevent instantiation.
     *
     * @throws IllegalStateException error when instantiated.
     */
    private Colors() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * The starting main() function.
     *
     * @param args No args will be used.
     */
    public static void main(String[] args) {
        final MrCoxallStack colorStack = new MrCoxallStack();

        System.out.println("Showing color items: ");
        System.out.println("The size of the stack is: " + colorStack.size());
        colorStack.pushStr("red");
        colorStack.pushStr("green");
        colorStack.pushStr("blue");
        System.out.println("Color items: " + colorStack.showStack());
        System.out.println("Top color item: " + colorStack.popItem());
        System.out.println("Color items 2: " + colorStack.showStack());
        System.out.println("The size of the stack is 2: " + colorStack.size());
        System.out.println("Is the stack empty? " + colorStack.isEmpty());
        System.out.println("Peeked item: " + colorStack.peekItem());
        System.out.println("Clearing stack...");
        colorStack.clearStack();
        System.out.println("The size of the stack after clearing: "
            + colorStack.size());

        System.out.println("\nDone.");
    }
}
