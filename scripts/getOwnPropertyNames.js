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

console.log(Object.getOwnPropertyNames(obj))
/*returns an array of all the keys of the obj in a specific order:
first numbers(numerical order), then strings, then functions*/
