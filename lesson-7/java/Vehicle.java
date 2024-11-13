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
     * The color of the vehicle.
     */
    private String color;

    /**
     * The current speed of the vehicle.
     */
    private int speed;

    /**
     * The max speed of the vehicle.
     */
    private int maxSpeed;

    /**
     * Constructor.
     *
     * @param color - The color you want the vehicle to start with.
     * @param maxSpeed - The max speed the vehicle can reach.
     */
    public Vehicle(
        String color,
        int maxSpeed) {
        // Set the properties
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
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
     * The setter for the speed property.
     *
     * @param newSpeed - The new speed to set the vehicle to.
     */
    public void setSpeed(int newSpeed) {
      if (newSpeed < 0) {
          this.speed = 0;
      } else if (newSpeed > this.maxSpeed) {
          this.speed = this.maxSpeed;
      } else {
          this.speed = newSpeed;
      }
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
