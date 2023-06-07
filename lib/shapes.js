class Shape {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      // Implement the draw method for the base Shape class
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      // Implement the draw method for Triangle
      console.log(`Drawing a ${this.color} triangle.`);
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      // Implement the draw method for Circle
      console.log(`Drawing a ${this.color} circle.`);
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    draw() {
      // Implement the draw method for Square
      console.log(`Drawing a ${this.color} square.`);
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  