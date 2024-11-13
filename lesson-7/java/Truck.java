/*
 * This is the truck class
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-13
 */

/**
 * The Truck class.
 */
public class Truck extends Vehicle {
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
    private final int numberOfDoors = 2;

    /**
     * The current speed of the vehicle.
     */
    private int speed;

    /**
     * Constructor.
     *
     * @param color - The color you want the vehicle to start with.
     * @param liscensePlate - The liscense plate you want the vehicle to have.
     * @param maxSpeed - The max speed the vehicle can reach.
     */
    public Truck(
        String color,
        String liscensePlate,
        int maxSpeed) {
        // Set the properties
        super(color, maxSpeed);
        this.liscensePlate = liscensePlate;
    }

    /**
     * The getter for the liscensePlate property.
     *
     * @return a string containing the liscense plate.
     */
    public String getLiscensePlate() {
        return this.liscensePlate;
    }

    /**
     * The setter for the liscensePlate property.
     *
     * @param newLiscensePlate - The new liscense plate you want to assign.
     */
    public void setLiscensePlate(String newLiscensePlate) {
        this.liscensePlate = newLiscensePlate;
    }

    /**
     * The status getter to show info about all properties of the vehicle.
     *
     * @return A string containing all the properties.
     */
    public String status() {
        final String status = "\n-> Speed: " + this.speed
                            + "\n-> Max Speed: " + this.maxSpeed
                            + "\n-> Number of Doors: " + this.numberOfDoors
                            + "\n-> Liscense Plate: " + this.liscensePlate
                            + "\n-> Color: " + this.color;

        return status;
    }

    /**
     * The provideAir method.
     *
     * @param airPressure
     */
    public void provideAir(int airPressure) {
      this.speed = this.speed - airPressure / 2;
    }
}
