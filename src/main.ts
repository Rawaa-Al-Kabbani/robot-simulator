import { createInterface } from "node:readline";
import { parseSimulatorInput } from "./modules/simulator-parser";
import { RobotOutOfBoundsError, Simulator } from "./classes/simulator";

const runSimulator = (lines: string[]) => {
  // Tries to pase the input lines as Simulator input.
  const simulatorInput = parseSimulatorInput(lines);

  // Create a new Simulator based on the input.
  const simulator = new Simulator(simulatorInput);
  try {
    // Runs the simulator and logs the result.
    console.log(simulator.run());
  } catch (error) {
    // If the Robot moves outside the Room a RobotOutOfBoundsError will be thrown.
    // Here we handle the error and logs the error message.
    if (error instanceof RobotOutOfBoundsError) {
      console.log(error.message);
    } else {
      throw error;
    }
  }
};

async function main() {
  let lines: string[] = [];

  console.log("Ready to accept cases, line by line.");

  // Reads the input from stdin line by line in chunks of three.
  for await (const line of createInterface({ input: process.stdin })) {
    lines.push(line.trim());

    if (lines.length === 3) {
      runSimulator(lines);
      lines = [];
    }
  }
}

main();
