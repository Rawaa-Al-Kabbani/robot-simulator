export const Direction = {
  N: 0,
  E: 90,
  S: 180,
  W: 270,
};

export const DirectionString = {
  0: "N",
  90: "E",
  180: "S",
  270: "W",
};

export const rotateRight = (direction) => {
  return (direction + 90) % 360;
};

export const rotateLeft = (direction) => {
  return (direction - 90 + 360) % 360;
};

export function getDirectionString(direction) {
  if (direction in DirectionString) {
    return DirectionString[direction];
  }
  throw new Error("Invalid direction");
}
