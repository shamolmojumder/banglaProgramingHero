function getArraySum(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [10, 25, 13, 14, 41, 15]
var result = getArraySum(numbers)



console.log("the total is", result)