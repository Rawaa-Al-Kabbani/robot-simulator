import { getDirectionString } from "../modules/direction";

export const SimulatorAction = {
  Forward: "F",
  Right: "R",
  Left: "L",
};

export class Simulator {
  constructor({ actions, robot, room }) {
    this.actions = actions;
    this.robot = robot;
    this.room = room;
  }

  isRobotOutOfBounds() {
    return !this.room.containsPosition(this.robot.position);
  }

  executeAction(action) {
    switch (action) {
      case SimulatorAction.Forward:
        this.robot.moveForward();
        break;
      case SimulatorAction.Right:
        this.robot.rotateRight();
        break;
      case SimulatorAction.Left:
        this.robot.rotateLeft();
        break;
      default:
        throw new Error(`Invalid action: ${action}`);
    }

    return !this.isRobotOutOfBounds();
  }

  getRobotPositionString() {
    return `${this.robot.position.x} ${this.robot.position.y} ${getDirectionString(this.robot.direction)}`;
  }

  run() {
    if (this.isRobotOutOfBounds()) {
      return {
        success: false,
        message: `Failure: The robot started out of bounds at position ${this.getRobotPositionString()}`,
      };
    }

    for (let action of this.actions) {
      if (!this.executeAction(action)) {
        return {
          success: false,
          message: `Failure: The robot moved out of bounds to ${this.getRobotPositionString()}`,
        };
      }
    }

    return {
      success: true,
      message: `Success: The robot moved to ${this.getRobotPositionString()}`,
    };
  }
}
