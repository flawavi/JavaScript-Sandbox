let love = {
  status: "pure",
  trust: true,
  honesty: true,
  cooperation: true,
  communication: "strong",
  fuck: (person1, person2) => `${person1} and ${person2} are making sweet, sweet love to each other. Their relationship is ${love.status}`
}
console.log(love, love.fuck("X", "Y"))

let hate = {
  status: "toxic",
  trust: false,
  honesty: false,
  cooperation: false,
  communication: "poor",
  fuck: (person1, person2) => `${person1} hatefucks ${person2} frequently and they don't even know it but because their trust is ${hate.trust} and their communication is ${hate.communication}, they are growing apart and it's fucking ${hate.status}.`
}

console.log(hate, hate.fuck("X", "Y"))

let cure = Object.assign({
  status: "toxic",
  trust: false,
  honesty: false,
  cooperation: false,
  communication: "poor",
  fuck: (person1, person2) => `${person1} hatefucks ${person2} frequently and they don't even know it but because their trust is ${hate.trust} and their communication is ${hate.communication}, they are growing apart and it's fucking ${hate.status}.`
},love)

console.log(cure, hate.fuck("X", "Y"))
