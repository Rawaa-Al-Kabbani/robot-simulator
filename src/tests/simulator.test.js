import { Robot } from "../classes/robot";
import { SquareRoom } from "../classes/room";
import { SimulatorAction, Simulator } from "../classes/simulator";
import { Direction } from "../modules/direction";

describe("Simulator", () => {
  describe("run", () => {
    it("should return 'Failure: Robot started out of bounds at position and direction' if the robot starts outside the room", () => {
      const simulator = new Simulator({
        actions: [SimulatorAction.Left],
        robot: new Robot({
          direction: Direction.S,
          position: {
            x: 6,
            y: 5,
          },
        }),
        room: new SquareRoom({ height: 5, width: 5 }),
      });
      expect(simulator.run()).toMatchObject({
        success: false,
        message: "Failure: The robot started out of bounds at position 6 5 S",
      });
    });

    it("should return 'Failure: Robot moved out of bounds to robot position and direction' if the robot moves outside the room", () => {
      const simulator = new Simulator({
        actions: [
          SimulatorAction.Forward,
          SimulatorAction.Forward,
          SimulatorAction.Left,
          SimulatorAction.Forward,
          SimulatorAction.Forward,
          SimulatorAction.Right,
          SimulatorAction.Forward,
        ],
        robot: new Robot({
          direction: Direction.N,
          position: {
            x: 2,
            y: 2,
          },
        }),
        room: new SquareRoom({
          height: 3,
          width: 3,
        }),
      });

      expect(simulator.run()).toMatchObject({
        success: false,
        message: "Failure: The robot moved out of bounds to 0 -1 N",
      });
    });

    it("should return 'Success: The robot moved to robot position and direction' if it did the actions", () => {
      const CASES = [
        {
          room: new SquareRoom({ height: 5, width: 5 }),
          robot: new Robot({
            direction: Direction.N,
            position: {
              x: 1,
              y: 2,
            },
          }),
          actions: [
            SimulatorAction.Right,
            SimulatorAction.Forward,
            SimulatorAction.Right,
            SimulatorAction.Forward,
            SimulatorAction.Forward,
            SimulatorAction.Right,
            SimulatorAction.Forward,
            SimulatorAction.Right,
            SimulatorAction.Forward,
          ],
          expectedResult: {
            success: true,
            message: "Success: The robot moved to 1 3 N",
          },
        },
        {
          room: new SquareRoom({
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
            SimulatorAction.Right,
            SimulatorAction.Forward,
            SimulatorAction.Left,
            SimulatorAction.Forward,
            SimulatorAction.Forward,
            SimulatorAction.Left,
            SimulatorAction.Right,
            SimulatorAction.Forward,
          ],
          expectedResult: {
            success: true,
            message: "Success: The robot moved to 3 1 E",
          },
        },
      ];

      CASES.forEach(({ actions, robot, room, expectedResult }) => {
        const simulator = new Simulator({
          actions,
          robot,
          room,
        });
        expect(simulator.run()).toMatchObject(expectedResult);
      });
    });
  });
});
