export class CircularRoom {
  constructor(radius) {
    this.radius = radius;
  }

  containsPosition(position) {
    const centerX = 0;
    const centerY = 0;

    // Calculate the distance between the point and the center of the circle
    const distance = Math.sqrt(
      Math.pow(position.x - centerX, 2) + Math.pow(position.y - centerY, 2),
    );

    return distance <= this.radius;
  }
}

export class SquareRoom {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  containsPosition(position) {
    if (position.y < 0 || position.y > this.dimensions.height) {
      return false;
    }

    if (position.x < 0 || position.x > this.dimensions.width) {
      return false;
    }

    return true;
  }
}
