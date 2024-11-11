/*
 * This is the vehicle class
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-04
 */

/**
 * The vehicle class.
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
     *
     * @param color - The color you want the vehicle to start with.
     * @param liscensePlate - The liscense plate you want the vehicle to have.
     * @param numberOfDoors - The number of doors the vehicle should have.
     * @param maxSpeed - The max speed the vehicle can reach.
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
     * The getter for the color property.
     *
     * @return A string containing the color of the vehicle.
     */
    public String getColor() {
        return this.color;
    }

    /**
     * The setter for the color property.
     *
     * @param newColor - THe new color to set the vehicle to.
     */
    public void setColor(String newColor) {
        this.color = newColor;
    }

    /**
     * The getter for the speed property.
     *
     * @return An integer of the current speed of the vehicle.
     */
    public int getSpeed() {
        return this.speed;
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
     * The accelerate method to increase the speed of the vehicle.
     *
     * @param accelerationPower - The intensity of the acceleration.
     * @param accelerationTime - The time the vehicle accelerates for.
     */
    public void accelerate(int accelerationPower, int accelerationTime) {
        this.speed = (accelerationPower * accelerationTime) + this.speed;

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }

    /**
     * The brake method to slow down the vehicle.
     *
     * @param brakePower - The intensity of the brakes.
     * @param brakeTime - The time the vehicle is braking for.
     */
    public void brake(int brakePower, int brakeTime) {
        this.speed = this.speed - (brakePower * brakeTime);

        // Ensure speed does not fall below zero
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
}
