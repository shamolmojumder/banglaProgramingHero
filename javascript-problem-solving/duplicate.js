var name = [10, 11, 13, 10, 11, 25, 13];
var uniceName = [];

for (i = 0; i < name.length; i++) {
    var element = name[i]
    var index = uniceName.indexOf(element);
    if (index == -1) {
        uniceName.push(element);
    }
}

console.log(uniceName)