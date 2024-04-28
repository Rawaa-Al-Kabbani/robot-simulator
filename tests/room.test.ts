import { Room } from "../src/classes/room";

describe("Room", () => {
  describe("containsPosition", () => {
    it("should return true when the position is inside the Room", () => {
      const room = new Room({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 5, y: 5 })).toBe(true);
    });

    it("should return false when the the x coordinate is greater than the width of the Room", () => {
      const room = new Room({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 6, y: 5 })).toBe(false);
    });

    it("should return false when the the x coordinate is less than 0", () => {
      const room = new Room({ height: 5, width: 5 });

      expect(room.containsPosition({ x: -1, y: 5 })).toBe(false);
    });

    it("should return false when the the y coordinate is greater than the height of the Room", () => {
      const room = new Room({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 5, y: 6 })).toBe(false);
    });

    it("should return false when the the y coordinate is less than 0", () => {
      const room = new Room({ height: 5, width: 5 });

      expect(room.containsPosition({ x: 5, y: -1 })).toBe(false);
    });
  });
});
