this.x = 9;
let module = {
  x: 81,
  getX: function() { return this.x }
}

let getModuleX = module.getX
let retrieveX = getModuleX.bind(module)
/*bind(module) resets the context of the calling function (module.getX()) to be the module object,
and not the global scope, so that `this` is module*/

console.log(retrieveX())
