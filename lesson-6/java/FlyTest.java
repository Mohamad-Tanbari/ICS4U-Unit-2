/*
 * The fly test to try the new classes.
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-09
 */

/**
 * The fly test class.
 */
public final class FlyTest {
    /**
     * The initial speed for the biplane.
     */
    static final int BIPLANE_SPEED = 212;

    /**
     * The initial speed for the boeing.
     */
    static final int BOEING_SPEED = 422;

    /**
     * The loop length.
     */
    static final int LOOP_LENGTH = 4;

    /**
     * The speed in the if statement.
     */
    static final int MAX_SPEED = 5000;

    /**
     * Prevent instantiation.
     */
    private FlyTest() { }

    /**
     * The main method.
     *
     * @param args Not used.
     */
    public static void main(String[] args) {
        final Airplane biplane = new Airplane();
        biplane.setSpeed(BIPLANE_SPEED);
        System.out.println(biplane.getSpeed());

        final Jet boeing = new Jet();
        boeing.setSpeed(BOEING_SPEED);
        System.out.println(boeing.getSpeed());

        for (int counter = 0; counter < LOOP_LENGTH; counter++) {
            boeing.accelerate();
            System.out.println(boeing.getSpeed());
            if (boeing.getSpeed() > MAX_SPEED) {
                biplane.setSpeed(biplane.getSpeed() * 2);
            } else {
                boeing.accelerate();
            }
        }
        System.out.println(biplane.getSpeed());
    }
}
