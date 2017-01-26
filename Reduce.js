let numDataArr = [1,2,3,4,5,6,7,8,9,10]

let divide = numDataArr.reduce((a,b) => {
  console.log(a/b)
  return a/b
}, numDataArr[0])

console.log(divide)

let strDataArr = ['I', 'am', 'figuring', 'out', 'how', 'reduce()', 'works']

let sentence = strDataArr.reduce((a,b) => {
  return a + ' ' + b
})

console.log(sentence)

let trueAndFalse = [true, false, true, false, true, false, true, false]
let iDontKnow = trueAndFalse.reduce((a,b) => {
  console.log(a, b)
  return a - b
}, trueAndFalse[0])
console.log(iDontKnow)
