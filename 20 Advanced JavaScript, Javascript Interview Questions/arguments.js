function add(num1, num2) {
    console.log(...arguments);
    // console.log(arguments);
    return num1 + num2
}

const result = add(2, 4, 6, 8)
console.log(result);