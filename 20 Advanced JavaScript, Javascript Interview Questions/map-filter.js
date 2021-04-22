const numbers = [2, 4, 6, 8, 80]
const output = []

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const squre = element * element
//     output.push(squre)

// }

// numbers.map(function square(element, index, array) {
//     console.log(element, index, array)

// })

// const result = numbers.map(function square(element) {
//     return element * element

// })
const result = numbers.map(element => element * element)
console.log(result);

const fil = result.filter(x => x > 38)
console.log(fil);

const isThere = fil.find(x => x > 38)
console.log(isThere);