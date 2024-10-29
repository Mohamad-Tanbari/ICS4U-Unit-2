/*
 * This is the main class used to test the MrCoxallStack class.
 *
 * @author Mohamad Tanbari
 * @version 1.0
 * @since 2024-10-18
 */

/**
 * The Fruits class.
 */
final class Fruits {
    /**
     * Prevent instantiation.
     *
     * @throws IllegalStateException error when instantiated.
     */
    private Fruits() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * The starting main() function.
     *
     * @param args No args will be used.
     */
    public static void main(String[] args) {
        final MrCoxallStack fruitStack = new MrCoxallStack();

        System.out.println("Showing fruit items: ");
        System.out.println("The size of the stack is: " + fruitStack.size());
        fruitStack.pushStr("apple");
        fruitStack.pushStr("banana");
        fruitStack.pushStr("cherry");
        System.out.println("Fruit items: " + fruitStack.showStack());
        System.out.println("Top fruit item: " + fruitStack.popItem());
        System.out.println("Fruit items 2: " + fruitStack.showStack());
        System.out.println("The size of the stack is 2: " + fruitStack.size());
        System.out.println("Is the stack empty? " + fruitStack.isEmpty());
        System.out.println("");

        System.out.println("\nDone.");
    }
}
