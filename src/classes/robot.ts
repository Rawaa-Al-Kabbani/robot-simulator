import { Direction, rotateRight, rotateLeft } from "../types/direction";
import { Position } from "../types/position";

export interface RobotInput {
  direction: Direction;
  position: Position;
}

export class Robot {
  direction: Direction;
  position: Position;

  constructor(readonly robotInput: RobotInput) {
    this.direction = robotInput.direction;
    this.position = robotInput.position;
  }

  // Rotates the Robot to the right by 90 degrees.
  rotateRight() {
    this.direction = rotateRight(this.direction);
  }

  // Rotates the Robot to the left by 90 degrees.
  rotateLeft() {
    this.direction = rotateLeft(this.direction);
  }

  // Moves the Robot 1 step forward in the current direction.
  // If the current direction is not one of N, E, S, W then it will throw an "Invalid direction" error.
  moveForward() {
    switch (this.direction) {
      case Direction.N:
        this.position.y -= 1;
        break;
      case Direction.S:
        this.position.y += 1;
        break;
      case Direction.E:
        this.position.x += 1;
        break;
      case Direction.W:
        this.position.x -= 1;
        break;
      default:
        throw new Error(`Invalid direction: ${this.direction}`);
    }
  }
}
