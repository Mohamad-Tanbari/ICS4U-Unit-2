/*
 * This is the skeleton airplane class.
 *
 * @author Mohamad T
 * @version 1.0.0
 * @since 2024-11-03
 */

/**
 * The main Airplane class.
 */
public class Airplane {
    /**
     * The speed property.
     */
    private int speed;

    /**
     * Constructor.
     */
    public Airplane() { }

    /**
     * Method to set speed.
     *
     * @param speed The speed you want to set the plane to.
     */
    public void setSpeed(int speed) {
        this.speed = speed;
    }

    /**
     * Method to get speed.
     *
     * @return An integer of the current speed of the plane.
     */
    public int getSpeed() {
        return this.speed;
    }
}
