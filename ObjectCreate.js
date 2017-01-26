// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(z) {
  this.x += z;
  this.y += z;
  if(z === 0){
    return console.log('Shape did not move.')
  }
  return console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
rect.move(1) // Outputs, 'Shape moved.'
rect.move(0) // Outputs, 'Shape did not move.'
