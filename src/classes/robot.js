import { Direction, rotateRight, rotateLeft } from "../modules/direction";

export class Robot {
  constructor({ direction, position }) {
    this.direction = direction;
    this.position = position;
  }

  rotateRight() {
    this.direction = rotateRight(this.direction);
  }

  rotateLeft() {
    this.direction = rotateLeft(this.direction);
  }

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
