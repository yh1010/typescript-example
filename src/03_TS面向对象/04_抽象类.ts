abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public raduis: number) {
    super();
  }
  getArea() {
    return this.raduis ** 2 * Math.PI;
  }
}
class Rectangle extends Shape {
  constructor(private long: number, private width: number) {
    super();
  }
  getArea() {
    return this.long * this.width;
  }
}

function calcArea(shape: Shape) {
  return shape.getArea();
}

// 抽象类特点:
// 1.抽象类不能被实例化
// 2.抽象类可以包含抽象方法, 普通方法
// 3.有抽象方法的类, 必须是一个抽象类
// 4.抽象方法必须被子类实现
calcArea(new Rectangle(10, 20));
calcArea(new Circle(10));

export {};
