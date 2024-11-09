/*
 * The fly test to try the new classes.
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-09
 */

/**
 * The fly test class.
 */
public class FlyTest {
  /**
   * Prevent instantiation.
   */
  private FlyTest() { }

  /**
   * The main method
   *
   * @param args Not used.
   */
  public static void main(String[] args) {
    Airplane biplane = new Airplane();
    biplane.setSpeed(212);
    System.out.println(biplane.getSpeed());

    Jet boeing = new Jet();
    boeing.setSpeed(422);
    System.out.println(boeing.getSpeed());

    for (int counter = 0; counter < 4; counter++) {
      boeing.accelerate();
      System.out.println(boeing.getSpeed());
      if (boeing.getSpeed() > 5000) {
        biplane.setSpeed(biplane.getSpeed() * 2);
      } else {
        boeing.accelerate();
      }
    }
    System.out.println(biplane.getSpeed());
  }

}
