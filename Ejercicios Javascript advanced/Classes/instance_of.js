/*Define a class called AreaCalculator. Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter.
    The method will let you calculate the square, the rectangle and the circle area.*/

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figura) {
    if (figura instanceof Square) {
      return figura.side * figura.side;
    } else if (figura instanceof Rectangle) {
      return figura.width*figura.height;
    } else if (figura instanceof Circle) {
      return 3.14*figura.radius*figura.radius;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
