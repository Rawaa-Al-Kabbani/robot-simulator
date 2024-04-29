import { Robot } from "../src/classes/robot";
import { Room } from "../src/classes/room";
import { SimulatorAction } from "../src/classes/simulator";
import {
  parseActions,
  parseRobot,
  parseRoom,
} from "../src/modules/simulator-parser";
import { Direction } from "../src/types/direction";

describe("parseActions", () => {
  it('should throw "Invalid Actions: Expected at least one action" error if no actions are sent', () => {
    expect(() => parseActions("")).toThrow(
      "Invalid Actions: Expected at least one action",
    );
  });

  it('should throw "Invalid Actions: Expected Actions to include only these characters L, R, F" error any of the actions are invalid', () => {
    expect(() => parseActions("SFK")).toThrow(
      "Invalid Actions: Expected Actions to include only these characters L, R, F",
    );
  });

  it("should return the actions array if the input is valid", () => {
    expect(parseActions("LRF")).toEqual([
      SimulatorAction.Left,
      SimulatorAction.Right,
      SimulatorAction.Forward,
    ]);
  });
});

describe("parseRobot", () => {
  it('should throw "Invalid Robot: Expected position and direction" error if the input is invalid', () => {
    expect(() => parseRobot("1 2")).toThrow(
      "Invalid Robot: Expected position and direction",
    );
  });

  it('should throw "Invalid Robot position: Expected X to be a positive integer" error if the X coordinate is not a positive integer', () => {
    expect(() => parseRobot("-1 5 N")).toThrow(
      "Invalid Robot position: Expected X to be a positive integer",
    );
  });

  it('should throw "Invalid Robot position: Expected Y to be a positive integer" error if the Y coordinate is not a positive integer', () => {
    expect(() => parseRobot("5 -1 N")).toThrow(
      "Invalid Robot position: Expected Y to be a positive integer",
    );
  });

  it('should throw "Invalid Robot direction: Expected direction to be one of these characters N, E, S, W" error if the direction is not valid', () => {
    expect(() => parseRobot("5 1 a")).toThrow(
      "Invalid Robot direction: Expected direction to be one of these characters N, E, S, W",
    );
  });

  it("should return a Robot if the input is valid", () => {
    expect(parseRobot("1 2 N")).toEqual(
      new Robot({
        direction: Direction.N,
        position: { x: 1, y: 2 },
      }),
    );
  });
});

describe("parseRoom", () => {
  it('should throw "Invalid Room dimensions: Expected width and height" error if the Room input is invalid', () => {
    expect(() => parseRoom("55")).toThrow(
      "Invalid Room dimensions: Expected width and height",
    );
  });

  it('should throw "Invalid Room dimensions: Expected width to be an integer greater than 0" error if width is less than 1', () => {
    expect(() => parseRoom("0 5")).toThrow(
      "Invalid Room dimensions: Expected width to be an integer greater than 0",
    );
  });

  it('should throw "Invalid Room dimensions: Expected height to be an integer greater than 0" error if height is less than 1', () => {
    expect(() => parseRoom("5 0")).toThrow(
      "Invalid Room dimensions: Expected height to be an integer greater than 0",
    );
  });

  it("should return a Room if the input is valid", () => {
    expect(parseRoom("5 5")).toEqual(new Room({ height: 5, width: 5 }));
  });
});
