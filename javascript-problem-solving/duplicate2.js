var number = [10, 12, 14, 16, 12, 10];
var uniceNumber = [];
for (i = 0; i < number.length; i++) {
    var element = number[i];
    var index = uniceNumber.indexOf(element);
    if (index == -1) {
        uniceNumber.push(element);

    }

}
console.log(uniceNumber);