const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should correctly initialize with color', () => {
      const triangle = new Triangle('green');
      expect(triangle.color).toBe('green');
    });
  
    test('should correctly draw a triangle', () => {
      const triangle = new Triangle('blue');
      const consoleSpy = jest.spyOn(console, 'log');
  
      triangle.draw();
     
      expect(consoleSpy).toHaveBeenCalledWith('Drawing a blue triangle.');
      consoleSpy.mockRestore();
    });
  });

  describe('Circle', () => {
    test('should correctly initialize with color', () => {
      const circle = new Circle('green');
      expect(circle.color).toBe('green');
    });
  
    test('should correctly draw a circle', () => {
      const circle = new Circle('yellow');
      const consoleSpy = jest.spyOn(console, 'log');
  
      circle.draw();
  
      expect(consoleSpy).toHaveBeenCalledWith('Drawing a yellow circle.');
      consoleSpy.mockRestore();
    });
  });
  
  describe('Square', () => {
    test('should correctly initialize with color', () => {
      const square = new Square('purple');
      expect(square.color).toBe('purple');
    });
  
    test('should correctly draw a square', () => {
      const square = new Square('pink');
      const consoleSpy = jest.spyOn(console, 'log');
  
      square.draw();
  
      expect(consoleSpy).toHaveBeenCalledWith('Drawing a pink square.');
      consoleSpy.mockRestore();
    });
  });
  