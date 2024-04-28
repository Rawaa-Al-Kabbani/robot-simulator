import { Direction } from "../src/types/direction";
import { rotateRight, rotateLeft } from "../src/types/direction";

describe("rotateRight", () => {
  const CASES = [
    {
      currentDirection: Direction.N,
      newDirection: Direction.E,
    },
    {
      currentDirection: Direction.E,
      newDirection: Direction.S,
    },
    {
      currentDirection: Direction.S,
      newDirection: Direction.W,
    },
    {
      currentDirection: Direction.W,
      newDirection: Direction.N,
    },
  ];

  test.each(CASES)(
    "it should rotate to the direction to the right",
    ({ currentDirection, newDirection }) => {
      expect(rotateRight(currentDirection)).toBe(newDirection);
    },
  );
});

describe("rotateLeft", () => {
  const CASES = [
    {
      currentDirection: Direction.N,
      newDirection: Direction.W,
    },
    {
      currentDirection: Direction.W,
      newDirection: Direction.S,
    },
    {
      currentDirection: Direction.S,
      newDirection: Direction.E,
    },
    {
      currentDirection: Direction.E,
      newDirection: Direction.N,
    },
  ];

  test.each(CASES)(
    "it should rotate to the direction to the left",
    ({ currentDirection, newDirection }) => {
      expect(rotateLeft(currentDirection)).toBe(newDirection);
    },
  );
});
