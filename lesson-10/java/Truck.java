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
     * The number of doors the vehicle has.
     */
    private final int numberOfDoors = 2;

    /**
     * Constructor.
     *
     * @param color - The color you want the vehicle to start with.
     * @param liscensePlate - The liscense plate you want the vehicle to have.
     * @param maxSpeed - The max speed the vehicle can reach.
     * @param numberOfWheels - The number of wheels the truck will have.
     */
    public Truck(
        String color,
        String liscensePlate,
        int maxSpeed,
        int numberOfWheels) {
        // Set the properties
        super(color, maxSpeed, numberOfWheels);
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
     * Override the Brake method of the main vehicle class.
     *
     * @param brakePower - The brake power.
     * @param brakeTime - The time you are braking for.
     * @param airPressure - The air pressure.
     */
    public void brake(int brakePower, int brakeTime, int airPressure) {
        this.setSpeed(
            this.getSpeed()
            - (brakePower * brakeTime)
            - (airPressure * brakeTime)
        );
    }

    /**
     * The status getter to show info about all properties of the vehicle.
     *
     * @return A string containing all the properties.
     */
    public String status() {
        final String status = "\n-> Speed: " + super.getSpeed()
                            + "\n-> Max Speed: " + super.getMaxSpeed()
                            + "\n-> Number of Doors: " + this.numberOfDoors
                            + "\n-> Liscense Plate: " + this.liscensePlate
                            + "\n-> Wheels: " + super.getNumberOfWheels()
                            + "\n-> Color: " + super.getColor();

        return status;
    }
}
