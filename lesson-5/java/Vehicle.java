/*
 * This is the vehicle class
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-04
 */

public class Vehicle {
    /**
     * The liscense plate orf the vehicle.
     */
    private String liscensePlate;

    /**
     * The color of the vehicle.
     */
    private String color;

    /**
     * The number of doors the vehicle has.
     */
    private final int numberOfDoors;

    /**
     * The current speed of the vehicle.
     */
    private int speed;

    /**
     * The max speed of the vehicle.
     */
    private final int maxSpeed;

    /**
     * Constructor.
     */
    public Vehicle(
        String color,
        String liscensePlate,
        int numberOfDoors,
        int maxSpeed) {
        // Set the properties
        this.color = color;
        this.liscensePlate = liscensePlate;
        this.numberOfDoors = numberOfDoors;
        this.maxSpeed = maxSpeed;
    }
}
