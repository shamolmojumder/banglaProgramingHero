const students = [
        { id: 14, name: "Shamol" },
        { id: 14, name: "Dipu" },
        { id: 14, name: "Mojumder" },
        { id: 14, name: "Shomoy" }
    ]
    // for (let i = 0; i < students.length; i++) {
    //     const element = students[i];
    //     const name = element.name;
    //     console.log(name);
    // }

// const result = numbers.map(element => element * element)

const name = students.map(student => student.name)
console.log(name);
// const fil = result.filter(x => x > 38)
const nameLent = students.map(names => names.name.length > 5)
console.log(nameLent);