import { Robot } from "../classes/robot";
import { Room } from "../classes/room";
import { SimulatorAction, SimulatorInput } from "../classes/simulator";
import { Direction, symbolToDirection } from "../types/direction";

// Parses the actions array from the line.
export function parseActions(line: string): SimulatorAction[] {
  const actions = line.split("").filter((action) => action !== " ");

  if (actions.length === 0) {
    throw new Error(`Invalid Actions: Expected at least one action`);
  }

  const actionSymbols = Object.values(SimulatorAction);

  if (
    !actions.every((action) =>
      actionSymbols.includes(action as SimulatorAction),
    )
  ) {
    throw new Error(
      `Invalid Actions: Expected Actions to include only these characters ${actionSymbols.join(", ")}`,
    );
  }

  return actions as SimulatorAction[];
}

// Parses the Robot from the line.
export function parseRobot(line: string): Robot {
  const parts = line.split(" ");

  if (parts.length !== 3) {
    throw new Error(`Invalid Robot: Expected position and direction`);
  }
  const positionX = parseInt(parts[0], 10);
  const positionY = parseInt(parts[1], 10);
  const direction = parts[2];

  if (isNaN(positionX) || positionX < 0) {
    throw new Error(
      `Invalid Robot position: Expected X to be a positive integer`,
    );
  }

  if (isNaN(positionY) || positionY < 0) {
    throw new Error(
      `Invalid Robot position: Expected Y to be a positive integer`,
    );
  }

  const directionKeys = ["N", "E", "S", "W"];

  if (!directionKeys.includes(direction)) {
    throw new Error(
      `Invalid Robot direction: Expected direction to be one of these characters ${directionKeys.join(", ")}`,
    );
  }

  return new Robot({
    direction: symbolToDirection(direction as keyof typeof Direction),
    position: {
      x: positionX,
      y: positionY,
    },
  });
}

// Parses the Room from the line.
export function parseRoom(line: string): Room {
  const parts = line.split(" ");

  if (parts.length !== 2) {
    throw new Error(`Invalid Room dimensions: Expected width and height`);
  }

  const [width, height] = parts.map((value) => parseInt(value, 10));

  if (isNaN(width) || width < 1) {
    throw new Error(
      `Invalid Room dimensions: Expected width to be an integer greater than 0`,
    );
  }

  if (isNaN(height) || height < 1) {
    throw new Error(
      `Invalid Room dimensions: Expected height to be an integer greater than 0`,
    );
  }

  return new Room({
    height,
    width,
  });
}

export function parseSimulatorInput(lines: string[]): SimulatorInput {
  if (lines.length !== 3) {
    throw new Error(`Invalid input: Expected 3 lines, got ${lines.length}`);
  }

  return {
    room: parseRoom(lines[0]),
    robot: parseRobot(lines[1]),
    actions: parseActions(lines[2]),
  };
}
