function add(num1, num2) {
    console.log(...arguments);
    return num1 + num2;
}

const argument = add(10, 12, 1)
console.log(argument);