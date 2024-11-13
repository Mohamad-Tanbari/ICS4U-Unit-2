/*
 * The main file used to test sub classes of Vehicle.
 *
 * @author Mohamad Tanbari
 * @Version 1.0.0
 * @since 2024-11-13
 */

/**
 * The main class.
 */
final class Main2 {
    /**
     * Prevent instantiation.
     */
    private Main2() { }

    /**
     * The main method.
     *
     * @param args - Unused.
     */
    public static void main(String[] args) {
        // Variables
        final String status = "Status: ";
        final String newSpeed = "New speed: ";
        final int gear1 = 1;
        final int gear2 = 2;
        final int bikeMaxSpeed = 40;
        final int bikeAcceleration1 = 10;
        final int bikeAcceleration2 = 15;
        final int truckMaxSpeed = 200;
        final int truckAcceleration = 10;
        final int truckAccelerationTime = 10;
        final int truckAir = 10;

        // Create the bike
        final Bike bmx = new Bike("Red", bikeMaxSpeed);
        System.out.println("Created Bmx bike.");

        // Print status
        System.out.println(status + bmx.status());

        // Accelerate the bike.
        System.out.println("\nSet the cadence to 10");
        bmx.accelerate(bikeAcceleration1, gear2);
        System.out.println(bmx.status());

        System.out.println("\nAccelerate by 15:");
        bmx.accelerate(bikeAcceleration2, gear1);
        System.out.printf(bmx.status());
        System.out.println(bmx.ringBell());

        // Create the truck
        final Truck bigTruck = new Truck("Grey", "HGC-3456F", truckMaxSpeed);

        System.out.println("Created a Truck.");
        System.out.println(status + bigTruck.status());

        System.out.println("\nAccelerating, 10 of power for ten seconds:");
        bigTruck.accelerate(truckAcceleration, truckAccelerationTime);
        System.out.println(newSpeed + bigTruck.getSpeed());

        System.out.println("\nMore acceleration, 10 of power for ten seconds:");
        bigTruck.accelerate(truckAcceleration, truckAccelerationTime);
        System.out.println(newSpeed + bigTruck.getSpeed());

        System.out.println("\nApplied air pressure of 10");
        bigTruck.provideAir(truckAir);
        System.out.println(newSpeed + bigTruck.getSpeed());

        System.out.println("\nDone.");
    }
}
