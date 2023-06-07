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