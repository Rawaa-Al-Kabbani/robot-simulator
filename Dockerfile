# Use a plain Node image
FROM node:18.18.0

WORKDIR /app

# Copy all the project files into /app directory
COPY . .

# Install the dependencies from the yarn.lock file
RUN yarn install --frozen-lockfile

# Build the distribution files
RUN yarn run build

# Start the program
CMD ["yarn", "run", "start"]
