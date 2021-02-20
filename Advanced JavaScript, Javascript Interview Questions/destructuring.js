const person={
    p_name:"shamol",
    age:22,
    computerName:"toshiba",
    name:"mojumder"

}

console.log(person);

//destructuring 

const {p_name,age,computerName="Unknown"}=person

console.log(`after destructuring name ${p_name}`);
console.log(`after destructuring name ${name}`);