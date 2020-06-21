const numbers = [10, 12, 14, 18]
    // const output = []
    // for (let i = 0; i < numbers.length; i++) {
    //     const element = numbers[i];
    //     const result = element * element;
    //     output.push(result)
    // }


// const result = element => element * element;
// const result = numbers.map(function squre(element) {
//     return element * element;

// })

// const result = numbers.map(x => x * x)
// console.log(result);

const bigger = numbers.filter(x => x > 12)
const find = numbers.find(x => x > 12)
console.log(find);