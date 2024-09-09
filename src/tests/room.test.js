import { CircularRoom, SquareRoom } from "../classes/room";

describe("CircularRoom", () => {
  describe("containsPosition", () => {
    it("should return true when the position is inside the Room", () => {
      const room = new CircularRoom(1);

      expect(room.containsPosition({ x: 1, y: 0 })).toBe(true);
    });

    it("should return false when the x coordinate is is outside the Room", () => {
      const room = new CircularRoom({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 2, y: 0 })).toBe(false);
    });

    it("should return false when the y coordinate is is outside the Room", () => {
      const room = new CircularRoom(1);

      expect(room.containsPosition({ x: 1, y: 2 })).toBe(false);
    });
  });
});

describe("SquareRoom", () => {
  describe("containsPosition", () => {
    it("should return true when the position is inside the Room", () => {
      const room = new SquareRoom({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 5, y: 5 })).toBe(true);
    });

    it("should return false when the x coordinate is greater than the width of the Room", () => {
      const room = new SquareRoom({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 6, y: 5 })).toBe(false);
    });

    it("should return false when the x coordinate is less than 0", () => {
      const room = new SquareRoom({ height: 5, width: 5 });

      expect(room.containsPosition({ x: -1, y: 5 })).toBe(false);
    });

    it("should return false when the y coordinate is greater than the height of the Room", () => {
      const room = new SquareRoom({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 5, y: 6 })).toBe(false);
    });

    it("should return false when the y coordinate is less than 0", () => {
      const room = new SquareRoom({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 5, y: -1 })).toBe(false);
    });
  });
});
