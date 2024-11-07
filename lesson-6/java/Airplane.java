/*
 * The airplane parent class.
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-05
 */

/**
 * The airplane class
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
     * The speed setter.
     *
     * @param speed The speed to set the airplane to.
     */
    public void setSpeed(int speed) {
        this.speed = speed;
    }

    /**
     * The speed getter.
     *
     * @return Speed as an integer.
     */
    public int getSpeed() {
        return this.speed;
    }
}
