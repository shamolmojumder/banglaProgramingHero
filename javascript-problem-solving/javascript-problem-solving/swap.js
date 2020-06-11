var a = 10;
var b = 5;
var c = 7;
console.log("before swap a=", a, "b=", b);


var temp = a;
var a = b;
var b = c;
var c = temp;
console.log("after swap a=", a, "b=", b, "c=", c);


var x = 6;
var y = 7;
var x = x + y;
var y = x - y;
var x = x - y;
console.log(x, y);

q = 26;
p = 32;

[q, p] = [p, q]
console.log(q, p);