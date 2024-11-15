/*
 * The Jet subclass extending Airplane.
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-07
 */

/**
 * The Jet subclass.
 */
public class Jet extends Airplane {
    /**
     * Multiplier constant.
     */
    private static final int MULTIPLIER = 2;

    /**
     * The modified speed setter.
     *
     * @param speed - The new speed to set the jet to.
     */
    public void setSpeed(int speed) {
        super.setSpeed(speed * MULTIPLIER);
    }

    /**
     * The accelerate method to speed up the jet.
     */
    public void accelerate() {
        super.setSpeed(super.getSpeed() * 2);
    }
}
