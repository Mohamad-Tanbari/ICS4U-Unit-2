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
     *
     * @throws IllegalStateException error when instantiated.
     */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

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
        System.out.println("Top fruit item: " + fruitStack.popItem());
        System.out.println("Fruit items 2: " + fruitStack.showStack());
        System.out.println("");

        colorStack.pushStr("red");
        colorStack.pushStr("green");
        colorStack.pushStr("blue");
        System.out.println("Color items: " + colorStack.showStack());
        System.out.println("Top color item: " + colorStack.popItem());
        System.out.println("Color items 2: " + colorStack.showStack());
        System.out.println("");

        dogStack.pushStr("poodle");
        dogStack.pushStr("retriever");
        dogStack.pushStr("beagle");
        System.out.println("Dog items: " + dogStack.showStack());
        System.out.println("Top dog item: " + dogStack.popItem());
        System.out.println("Dog items 2: " + dogStack.showStack());

        System.out.println("\nDone.");
    }
}
