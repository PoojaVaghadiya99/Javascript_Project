// Numbers

const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const localNumber = 100000
console.log(localNumber.toLocaleString('en-IN'))


// Maths

console.log(Math.PI)
console.log((Math.random()*10)+1)

const Min = 1
const Max = 6
console.log(Math.floor(Math.random()*(Max-Min+1)+Min))