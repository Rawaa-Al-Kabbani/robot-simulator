import { Direction } from "./types/direction";
import { Robot } from "./classes/robot";
import { Room } from "./classes/room";
import assert from "assert";

function main() {
  const robot = new Robot({
    direction: Direction.N,
    position: {
      x: 0,
      y: 0,
    },
  });

  robot.rotateRight();
  robot.moveForward();

  assert(robot.position.x === 1);
  assert(robot.position.y === 0);
  assert(robot.direction === Direction.E);

  const room = new Room({ height: 5, width: 5 });

  assert(room.containsPosition(robot.position));
}

main();
