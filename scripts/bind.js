this.x = 9;
let module = {
  x: 81,
  getX: function() { return this.x }
}
console.log(module.getX())
let retrieveX = module.getX
console.log(retrieveX())

function logX(){
  this.x = 1
  let obj = {
    x: 90,
    findX: function() {return this.x}
  }
  let getX = obj.findX()
  console.log(this.x)
  console.log(getX)
}

logX()
