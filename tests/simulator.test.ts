import { Robot } from "../src/classes/robot";
import { Room } from "../src/classes/room";
import { Action, Simulator } from "../src/classes/simulator";
import { Direction } from "../src/types/direction";

describe("Simulator", () => {
  describe("run", () => {
    it("should throw a 'Robot out of bounds' error if the robot starts outside the room", () => {
      const simulator = new Simulator({
        actions: [Action.Left],
        robot: new Robot({
          direction: Direction.S,
          position: {
            x: 6,
            y: 5,
          },
        }),
        room: new Room({ height: 5, width: 5 }),
      });
      expect(() => simulator.run()).toThrow("ERROR: Out of bounds at 6 5");
    });

    it("should throw a 'Robot out of bounds' error if the robot moves outside the room", () => {
      const simulator = new Simulator({
        actions: [
          Action.Forward,
          Action.Forward,
          Action.Left,
          Action.Forward,
          Action.Forward,
          Action.Right,
          Action.Forward,
        ],
        robot: new Robot({
          direction: Direction.N,
          position: {
            x: 2,
            y: 2,
          },
        }),
        room: new Room({
          height: 3,
          width: 3,
        }),
      });

      expect(() => simulator.run()).toThrow("ERROR: Out of bounds at 0 -1");
    });

    it("should return the robot position and direction if it did the actions", () => {
      const CASES = [
        {
          room: new Room({ height: 5, width: 5 }),
          robot: new Robot({
            direction: Direction.N,
            position: {
              x: 1,
              y: 2,
            },
          }),
          actions: [
            Action.Right,
            Action.Forward,
            Action.Right,
            Action.Forward,
            Action.Forward,
            Action.Right,
            Action.Forward,
            Action.Right,
            Action.Forward,
          ],
          expectedResult: "Report: 1 3 N",
        },
        {
          room: new Room({
            height: 5,
            width: 5,
          }),
          robot: new Robot({
            direction: Direction.E,
            position: {
              x: 0,
              y: 0,
            },
          }),
          actions: [
            Action.Right,
            Action.Forward,
            Action.Left,
            Action.Forward,
            Action.Forward,
            Action.Left,
            Action.Right,
            Action.Forward,
          ],
          expectedResult: "Report: 3 1 E",
        },
      ];

      CASES.forEach(({ actions, robot, room, expectedResult }) => {
        const simulator = new Simulator({
          actions,
          robot,
          room,
        });
        expect(simulator.run()).toBe(expectedResult);
      });
    });
  });
});
