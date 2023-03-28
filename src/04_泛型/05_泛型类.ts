class Point<T> {
  x: T;
  y: T;
  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(1, 2);
const point2 = new Point("1", "2");

export {};
