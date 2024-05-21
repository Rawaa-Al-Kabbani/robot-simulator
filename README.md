# Robot simulator

This is an implementation of the Robot simulator where the robot can move around in a room.

Inputs:
Room (width, height) which represents the dimensions of the room the robot can move in where width, height are numbers.
ex: 5 5

Robot (x, y, direction) that represents the starting point for the robot and its orientation in the space where x, y are numbers and direction is one of these characters:
 N North
 E East
 S South
 W West

ex: 1 2 N

Actions (ex: LRFFRFFR) which represents a number of navigation commands in the form of characters where action can be one of these characters:
 L Turn left
 R Turn right
 F Walk forward


## How to run it locally

0. If you are using NVM run `nvm use` to use the recommended Node version.

1. Start by installing the dependencies by running `npm install` or `yarn install`.

2. Then build the distribution files by running `npm run build` or `yarn run build`.

3. You can now run the simulator by running `npm run start` or `yarn run start`.

Now you can input to the simulator line by line in the console. Like the following:

```
5 5
1 2 N
RFRFFRFRF
```

You can run multiple cases after each other.

I have created some scripts that pipes the cases to the stdin of the program to make it easier to test.
You can run these by doing:

- `npm run case1` or `yarn run case1`

- `npm run case2` or `yarn run case2`

- `npm run case3` or `yarn run case3`

You can also run all cases at once by doing: `npm run multi-cases` or `yarn run multi-cases`.

If you have your own custom case in a text file you can pipe it to the stdin by doing the following: `node build/main.js < <FILE_PATH>`.

If you are are on Windows, you have to do `node.exe build/main.js < <FILE_PATH>`, for Node to accept the piped input.

## How to run it using Docker

To run it using Docker start by building the image: `docker build -t robot-simulator .`.

Then start a container in interactive mode (to accept input) by running: `docker run -i -t robot-simulator`.

This will start the simulator in interactive mode inside the container, and you can enter the input line by line in the console (as above).

## How to run the tests

To run the tests, first ensure you have installed the dependencies (see above), then simply run `npm run test` or `yarn run test`.
