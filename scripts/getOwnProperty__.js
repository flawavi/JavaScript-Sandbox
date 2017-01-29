'use strict'

let obj = {
  "hello": 2,
  "a": 1,
  true: 3,
  test: {
    test1: true
  },
  2: false,
  foo: function foo() {
    return 1+1
  },
  bar: function bar() {
    return " "
  },
  1: 'test'
}

const objPropNames = Object.getOwnPropertyNames(obj)
console.log(objPropNames)
const objPropDescriptor = Object.getOwnPropertyDescriptor(obj, 'test')
console.log(objPropDescriptor)
/*returns an array of all the keys of the obj in a specific order:
first numbers(numerical order), then strings, then functions*/
