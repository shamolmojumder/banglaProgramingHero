var nums = [9, 10, 75, 12, 14]
var max = nums[0]
for (var i = 0; i < nums.length; i++) {
    var element = nums[i];
    if (element > max) {
        max = element;
    }

}
console.log(max);