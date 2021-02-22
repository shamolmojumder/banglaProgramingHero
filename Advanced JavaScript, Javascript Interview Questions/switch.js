//switch case check the value as well as the data type as like ====;
//here this -break helps us to break the code when the expression fullfill the condition

let text;
let roll=8;
switch (roll) {
    case 1:
        text = "one";
        break;
    case 2:
        text="two"
    default:
        text=`your roll is ${roll}`
        break;
}
//console.log(text);

const color="pink";
switch (color) {
    case "red":
    case "green":
    case "blue":
        console.log("select a rbg");
        break;

    default:
        console.log("select a different color");
        break;
}