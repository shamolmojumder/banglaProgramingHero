var shamol = 300;
var dipu = 150;
var somoy = 400;

if (shamol > dipu) {
    if (shamol > somoy) {
        console.log("shamol from somoy");
    } else {
        console.log("somoy from shamol");
    }
} else {
    if (shamol < dipu) {
        if (dipu > somoy) {
            console.log("dipu from shamol");
        }
    } else {
        console.log("somoy from dipu");
    }
}