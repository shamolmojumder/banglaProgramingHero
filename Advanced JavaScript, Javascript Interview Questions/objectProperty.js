const student = [
        { id: 25, name: "Shamol" },
        { id: 14, name: "Dipu" },
        { id: 26, name: "Devil" },
        { id: 28, name: "Evil" }
    ]
    // const output = []
    // for (let i = 0; i < student.length; i++) {
    //     const element = student[i].name;
    //     output.push(element)
    // }
    // console.log(output);

const ids = student.filter(x => x.id > 25)
console.log(ids);