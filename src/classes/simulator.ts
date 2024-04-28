import { directionToString } from "../types/direction";
import { Robot } from "./robot";
import { Room } from "./room";

export class RobotOutOfBoundsError extends Error {
  constructor({ position }: Robot) {
    super(`ERROR: Out of bounds at ${position.x} ${position.y}`);
  }
}

export enum Action {
  Left = "L",
  Right = "R",
  Forward = "F",
}

export interface SimulatorInput {
  actions: Action[];
  robot: Robot;
  room: Room;
}

export class Simulator {
  protected readonly actions: Action[];
  protected readonly robot: Robot;
  protected readonly room: Room;

  constructor({ actions, robot, room }: SimulatorInput) {
    this.actions = actions;
    this.robot = robot;
    this.room = room;
  }

  // Returns true if the Robot is within the Room.
  // Otherwise it returns false.
  isRobotOutOfBounds(): boolean {
    return !this.room.containsPosition(this.robot.position);
  }

  // Executes an action on the Robot.
  executeAction(action: Action) {
    switch (action) {
      case Action.Forward:
        this.robot.moveForward();
        break;
      case Action.Right:
        this.robot.rotateRight();
        break;
      case Action.Left:
        this.robot.rotateLeft();
        break;
      default:
        throw new Error(`Invalid action: ${action}`);
    }

    // If the Robot moved outside the Room throw an "Robot out of bounds" error.
    if (this.isRobotOutOfBounds()) {
      throw new RobotOutOfBoundsError(this.robot);
    }
  }

  run() {
    // If the Robot starts outside the Room throw an "Robot out of bounds" error.
    if (this.isRobotOutOfBounds()) {
      throw new RobotOutOfBoundsError(this.robot);
    }

    // Loops each Action and executes it.
    for (let action of this.actions) {
      this.executeAction(action);
    }

    // Returns the report with the Robot position and direction.
    return `Report: ${this.robot.position.x} ${this.robot.position.y} ${directionToString(this.robot.direction)}`;
  }
}
