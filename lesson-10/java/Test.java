/*
 * The test class to check if the abstract class works.
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-15
 */

/**
 * The test class.
 */
public final class Test {
    /**
     * Prevent instantiation.
     */
    private Test() { }

    /**
     * The main method.
     *
     * @param args - Unused.
     */
    public static void main(String[] args) {
        // Try to instantiate a Vehicle
        final AbstractVehicle car = new AbstractVehicle();
    }
}
