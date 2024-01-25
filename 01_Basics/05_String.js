const name  = "Pooja"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Abc-Def-GHI')

console.log(gameName[0])
console.log(gameName._proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('b'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(0,4) // Accepts Minus Value also
console.log(anotherString)

const newStringOne = "     Pooja     "
console.log(newStringOne.trim())

const url = "https://abc.com/pooja%20vaghadiya"
console.log(url.replace('%20','-'))

console.log(url.includes('pooja'))

console.log(gameName.split('-'))