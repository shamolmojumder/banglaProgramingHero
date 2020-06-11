var marks = [10, 11, 12, 14, 25, 37, 22]
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);