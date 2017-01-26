let numData = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let stringData = ['a', 'ab', 'abc', 'abcd', true, 'abcdef']

let numDataFiltered = numData.filter(num => num >= 10)
let stringDataFiltered = stringData.filter(str => {
  if(str === 'ab' || str === true) return str
})


console.log(numDataFiltered)
console.log(stringDataFiltered)
