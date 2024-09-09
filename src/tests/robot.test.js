import { Robot } from "../classes/robot";
import { Direction } from "../modules/direction";

describe("Robot", () => {
  describe("rotateRight", () => {
    it("should rotate the robot right to the correct direction", () => {
      const robot = new Robot({
        direction: Direction.N,
        position: {
          x: 3,
          y: 4,
        },
      });

      robot.rotateRight();
      expect(robot.direction).toBe(Direction.E);

      robot.rotateRight();
      expect(robot.direction).toBe(Direction.S);

      robot.rotateRight();
      expect(robot.direction).toBe(Direction.W);

      robot.rotateRight();
      expect(robot.direction).toBe(Direction.N);
    });
  });

  describe("rotateLeft", () => {
    it("should rotate the robot left to the correct direction", () => {
      const robot = new Robot({
        direction: Direction.N,
        position: {
          x: 4,
          y: 6,
        },
      });

      robot.rotateLeft();
      expect(robot.direction).toBe(Direction.W);

      robot.rotateLeft();
      expect(robot.direction).toBe(Direction.S);

      robot.rotateLeft();
      expect(robot.direction).toBe(Direction.E);

      robot.rotateLeft();
      expect(robot.direction).toBe(Direction.N);
    });
  });

  describe("moveForward", () => {
    const CASES = [
      {
        robot: new Robot({
          direction: Direction.N,
          position: {
            x: 5,
            y: 4,
          },
        }),
        expectedResult: {
          x: 5,
          y: 3,
        },
      },
      {
        robot: new Robot({
          direction: Direction.N,
          position: {
            x: 0,
            y: 0,
          },
        }),
        expectedResult: {
          x: 0,
          y: -1,
        },
      },
      {
        robot: new Robot({
          direction: Direction.E,
          position: {
            x: 4,
            y: 4,
          },
        }),
        expectedResult: {
          x: 5,
          y: 4,
        },
      },
      {
        robot: new Robot({
          direction: Direction.S,
          position: {
            x: 3,
            y: 3,
          },
        }),
        expectedResult: {
          x: 3,
          y: 4,
        },
      },
      {
        robot: new Robot({
          direction: Direction.W,
          position: {
            x: 1,
            y: 1,
          },
        }),
        expectedResult: {
          x: 0,
          y: 1,
        },
      },
    ];

    test.each(CASES)(
      "should move the robot in the correct direction",
      ({ robot, expectedResult }) => {
        robot.moveForward();

        expect(robot.position).toEqual(expectedResult);
      },
    );
  });
});
