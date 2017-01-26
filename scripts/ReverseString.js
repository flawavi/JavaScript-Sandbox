'use strict'
// reverse using reverse()
function reverse(str) {
  console.log(str.split('').reverse().join(''))
}

reverse('asuidhf')

// reverse using recursion
function reverseString(str) {
  if (str === ""){
    return "" // This is the terminal case that will end the recursion
  } else {
    console.log(str)
    let result = reverseString(str.substr(1)) + str.charAt(0)
    return result
  }
}

function randString(wordLength) {
  if(typeof(wordLength) != 'number'){
    console.log(wordLength)
    return wordLength
  }
  var word = ""
  var alphabet = "abcdefghijklmnopqrstuvwxyz"

  for(let i=0; i < wordLength; i++){
    word += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    console.log(word)
  }
  return word
}

reverse(randString('sodifh'))
