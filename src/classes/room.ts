import { Dimensions } from "../types/dimensions";
import { Position } from "../types/position";

export class Room {
  constructor(public readonly dimensions: Dimensions) {}

  // Returns true if the position is inside the Room.
  // Otherwise it returns false.
  containsPosition(position: Position) {
    if (position.y < 0 || position.y > this.dimensions.height) {
      return false;
    }

    if (position.x < 0 || position.x > this.dimensions.width) {
      return false;
    }

    return true;
  }
}
