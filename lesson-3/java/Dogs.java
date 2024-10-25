/*
 * This is the main class used to test the MrCoxallStack class.
 *
 * @author Mohamad Tanbari
 * @version 1.0
 * @since 2024-10-18
 */

/**
 * The Dogs class.
 */
final class Dogs {
    /**
     * Prevent instantiation.
     *
     * @throws IllegalStateException error when instantiated.
     */
    private Dogs() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * The starting main() function.
     *
     * @param args No args will be used.
     */
    public static void main(String[] args) {
        final MrCoxallStack dogStack = new MrCoxallStack();

        System.out.println("Showing dog items: ");
        System.out.println("The size of the stack is: " + dogStack.size());
        dogStack.pushStr("poodle");
        dogStack.pushStr("retriever");
        dogStack.pushStr("beagle");
        System.out.println("Dog items: " + dogStack.showStack());
        System.out.println("Top dog item: " + dogStack.popItem());
        System.out.println("Dog items 2: " + dogStack.showStack());
        System.out.println("The size of the stack is 2: " + dogStack.size());
        System.out.println("Is the stack empty? " + dogStack.isEmpty());

        System.out.println("\nDone.");
    }
}
