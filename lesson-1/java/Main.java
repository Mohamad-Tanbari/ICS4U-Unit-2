/*
 * This is the main class used to test the MrCoxallStack class.
 *
 * @author Mohamad Tanbari
 * @version 1.0
 * @since 2024-10-18
 */

/**
 * The main class.
 */
final class Main {
    /**
     * Prevent instantiation.
     */
    private Main() { }

    /**
     * The starting main() function.
     *
     * @param args No args will be used.
     */
    public static void main(String[] args) {
        final MrCoxallStack fruitStack = new MrCoxallStack();
        final MrCoxallStack colorStack = new MrCoxallStack();
        final MrCoxallStack dogStack = new MrCoxallStack();

        fruitStack.pushStr("apple");
        fruitStack.pushStr("banana");
        fruitStack.pushStr("cherry");
        System.out.println("Fruit items: " + fruitStack.showStack());

        colorStack.pushStr("red");
        colorStack.pushStr("green");
        colorStack.pushStr("blue");
        System.out.println("Color items: " + colorStack.showStack());

        dogStack.pushStr("poodle");
        dogStack.pushStr("retriever");
        dogStack.pushStr("beagle");
        System.out.println("Dog items: " + dogStack.showStack());

        System.out.println("\nDone.");
    }
}
