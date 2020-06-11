var marks = [33, 50, 82, 66, 90, 99, 144];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element
    }
}
console.log("highest value is", max)