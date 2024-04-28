import { Robot } from "./classes/robot";
import { Room } from "./classes/room";
import { Action, Simulator } from "./classes/simulator";
import { Direction } from "./types/direction";

function main() {
  const simulator1 = new Simulator({
    actions: [
      Action.Right,
      Action.Forward,
      Action.Right,
      Action.Forward,
      Action.Forward,
      Action.Right,
      Action.Forward,
      Action.Right,
      Action.Forward,
    ],
    robot: new Robot({
      direction: Direction.N,
      position: {
        x: 1,
        y: 2,
      },
    }),
    room: new Room({ height: 5, width: 5 }),
  });

  console.log(simulator1.run());

  const simulator2 = new Simulator({
    actions: [
      Action.Forward,
      Action.Forward,
      Action.Left,
      Action.Forward,
      Action.Forward,
      Action.Right,
      Action.Forward,
    ],
    robot: new Robot({
      direction: Direction.N,
      position: {
        x: 2,
        y: 2,
      },
    }),
    room: new Room({ height: 3, width: 3 }),
  });

  simulator2.run();
}

main();
