const numbers = [1, 2, 3, 4, 5, 6]
const part = numbers.slice(1, 3)
    // console.log(part);
const removed = numbers.splice(0, 2, "add")
    // console.log(removed);
const together = numbers.join("is , ")
console.log(numbers);
console.log(together);