// Direction represents the four possible directions.
export enum Direction {
  N = 0, // North
  E = 90, // East
  S = 180, // South
  W = 270, // West
}

// Returns the Direction to the right of the current direction.
export const rotateRight = (direction: Direction): Direction => {
  if (direction === Direction.W) {
    return Direction.N;
  }
  return direction + 90;
};

// Returns the Direction to the left of the current direction.
export const rotateLeft = (direction: Direction): Direction => {
  if (direction === Direction.N) {
    return Direction.W;
  }
  return direction - 90;
};

// Returns the symbol for the direction.
export const directionToString = (direction: Direction): string => {
  return Direction[direction];
};
