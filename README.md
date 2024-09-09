# Robot simulator

This is my implementation of the Robot simulator. It is written in JavaScript and React.js is used as the framework.

When running the app via Docker Nginx is used to serve the static build files.

The app supports entering commands in english, french, and swedish, and it supports both square and circular rooms.

## Requirements

- Node.js and Yarn for running the app, tests or linting locally.
  If you are using NVM you can install a compatible version from the `.nvmrc` file using `nvm use`
- Docker for running the app via Docker
- docker-compose for running the app via docker-compose

## How to run the tests

To run the tests:

1. Install the dependencies using `yarn install`
2. Run `yarn run test`

## How to run linting

To run the linting:

1. Install the dependencies using `yarn install`
2. Run `yarn run lint`

## How to run it using Docker

To run it using Docker:

1. Ensure you have Docker installed on your system
2. Build the Docker image using `docker build -t robot-simulator .`
3. Start the container using `docker run -p 3000:80 -t robot-simulator`
4. The app will be available on http://localhost:3000

## How to run it using docker-compose

To run it using docker-compose:

1. Ensure you have Docker and docker-compose installed on your system
2. Start the app using `docker-compose up`
3. The app will be available on: http://localhost:3000

## How to run it locally with Reacts development server

1. Install the dependencies using `yarn install`
2. Run the app using `yarn run start`
3. The app will be available on http://localhost:3000, by default
