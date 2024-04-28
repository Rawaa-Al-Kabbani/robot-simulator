import { Direction, rotateRight, rotateLeft } from "../types/direction";
import { Position } from "../types/position";

export interface RobotInput {
  direction: Direction;
  position: Position;
}

export class Robot {
  protected _direction: Direction;
  protected _position: Position;

  constructor(readonly robotInput: RobotInput) {
    this._direction = robotInput.direction;
    this._position = robotInput.position;
  }

  // Getter for the Direction.
  get direction() {
    return this._direction;
  }

  // Getter for the Position.
  get position() {
    return this._position;
  }

  // Rotates the Robot to the right by 90 degrees.
  rotateRight() {
    this._direction = rotateRight(this._direction);
  }

  // Rotates the Robot to the left by 90 degrees.
  rotateLeft() {
    this._direction = rotateLeft(this._direction);
  }

  // Moves the Robot 1 step forward in the current direction.
  // If the current direction is not one of N, E, S, W then it will throw an "Invalid direction" error.
  moveForward() {
    switch (this._direction) {
      case Direction.N:
        this._position.y -= 1;
        break;
      case Direction.S:
        this._position.y += 1;
        break;
      case Direction.E:
        this._position.x += 1;
        break;
      case Direction.W:
        this._position.x -= 1;
        break;
      default:
        throw new Error(`Invalid direction: ${this._direction}`);
    }
  }
}
