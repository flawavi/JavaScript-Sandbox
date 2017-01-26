
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
  this.width = 1
  this.height = 1
}

// superclass method
Shape.prototype.translate = (x, y) => {
  this.x += x;
  this.y += y;
  if(x === 0 && y === 0){
    return console.log('Shape did not move.')
  }
  return console.info('Shape moved.');
}

Shape.prototype.stretch = (width, height) => {
  this.width += width
  this.height += height
  if(width === 0 && height === 0){
    return console.log('This shape did not stretch.')
  } else if(height === 1 && width === 1){
      return console.log(`This shape stretched ${width} unit in width and ${height} unit in height.`)
  } else if(height === 1 && width != 1){
      return console.log(`This shape stretched 1 unit in width and ${width} units in height.`)
  } else if(height != 1 && width === 1){
    return console.log(`This shape stretched ${height} units in height and 1 unit in width.`)
  }
}

// Rectangle - subclass
function Rectangle(object) {
  this.object = object
  this.type = 'rectangle'
  Shape.call(this); // call super constructor.
  Shape.call(console.log(this)); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var creditCard = new Rectangle('credit card');

console.log('Is creditCard an instance of Rectangle?', creditCard instanceof Rectangle);// true
console.log('Is creditCard an instance of Shape?', creditCard instanceof Shape);// true
creditCard.translate(1, 2)
creditCard.translate(0, 1)
creditCard.stretch(1, 1)
creditCard.stretch(2, 1)
creditCard.stretch(1, 2)
creditCard.stretch(1, 0)
creditCard.stretch(0, 1)
