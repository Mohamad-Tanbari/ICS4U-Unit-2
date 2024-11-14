/*
 * This is the bike class
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-04
 */

/**
 * The Bike class.
 */
public class Bike extends Vehicle {
    /**
     * Number of wheels constant.
     */
    private static int numberOfWheels = 2;

    /**
     * The cadence property.
     */
    private int cadence;

    /**
     * The gear property.
     */
    private int gear = 1;

    /**
     * Constructor.
     *
     * @param color - The color you want the vehicle to start with.
     * @param maxSpeed - The max speed the vehicle can reach.
     */
    public Bike(
        String color,
        int maxSpeed) {
        // Set the properties
        super(color, maxSpeed, numberOfWheels);
        this.cadence = 0;
    }

    /**
     * The getter for the cadence property.
     *
     * @return The current cadence of the bike.
     */
    public int getCadence() {
        return this.cadence;
    }

    /**
     * The setter for the cadence property.
     *
     * @param newCadence - The number to set the cadence to.
     */
    public void setCadence(int newCadence) {
        if (newCadence < 0) {
            this.cadence = 0;
        } else {
            this.cadence = newCadence;
        }
    }

    /**
     * The getter for the gear property.
     *
     * @return The current gear of the bike.
     */
    public int getGear() {
        return this.gear;
    }

    /**
     * The setter for the gear property.
     *
     * @param newGear - The number to set the gear of the bike to.
     */
    public void setGear(int newGear) {
        if (newGear < 0) {
            this.gear = 0;
        } else {
            this.gear = newGear;
        }
    }

    /**
     * The status getter to show info about all properties of the vehicle.
     *
     * @return A string containing all the properties.
     */
    public String status() {
        final String status = "\n-> Speed: " + super.getSpeed()
                            + "\n-> Max Speed: " + super.getMaxSpeed()
                            + "\n-> Color: " + super.getColor()
                            + "\n-> Wheels: " + super.getNumberOfWheels()
                            + "\n-> Cadence: " + this.getCadence();

        return status;
    }

    /**
     * The accelerate method to increase the speed of the bike.
     *
     * @param appliedPower - The applied peddling power.
     * @param newGear - The new gear to set the bike to.
     */
    public void accelerate(int appliedPower, int newGear) {
        this.setCadence(this.getCadence() + appliedPower);
        super.setSpeed(super.getSpeed() + (this.getCadence() * this.getGear()));
    }

    /**
     * The ring bell method to ring the bike bell.
     *
     * @return The sound the bike makes.
     */
    public String ringBell() {
        final String sound = "Ding ding!\n";
        return sound;
    }
}
