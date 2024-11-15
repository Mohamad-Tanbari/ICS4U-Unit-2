/*
 * The fly test class for lesson 6 on the text book.
 *
 * @author Mohamad Tanbari
 * @version 1.0.0
 * @since 2024-11-15
 */

/**
 * The FlyTest3 class.
 */
public class FlyTest3 {
  /**
   * Prevent instantiation.
   */
  private FlyTest3() { }

  /**
   * The main method.
   *
   * @param args - Unused
   */
  public static void main(String[] args) {
    Jet jet1 = new Jet();
    jet1.speed = 212;
    System.out.println(jet1.speed);

    Jet jet2 = new Jet();
    jet2.setSpeed(212);
    System.out.println(jet2.getSpeed());
  }
}
