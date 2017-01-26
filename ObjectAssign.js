let love = {
  status: "pure",
  trust: true,
  honesty: true,
  cooperation: true,
  communication: "strong",
  makeLove: (person1, person2) => `${person1} and ${person2} are making sweet, sweet love to each other. Their relationship is ${love.status}`
}
console.log(love, love.makeLove("X", "Y"))

let hate = {
  status: "toxic",
  trust: false,
  honesty: false,
  cooperation: false,
  communication: "poor",
  makeLove: (person1, person2) => `${person1} ignores ${person2} frequently and they don't even know it but because their trust is ${hate.trust} and their communication is ${hate.communication}. They are growing apart and it's  ${hate.status}.`
}

console.log(hate, hate.makeLove("X", "Y"))

let cure = Object.assign({
  status: "toxic",
  trust: false,
  honesty: false,
  cooperation: false,
  communication: "poor",
  makeLove: (person1, person2) => `${person1} ignores ${person2} frequently and they don't even know it but because their trust is ${hate.trust} and their communication is ${hate.communication}. They are growing apart and it's ${hate.status}.`
},love)

console.log(cure, hate.makeLove("X", "Y"))
