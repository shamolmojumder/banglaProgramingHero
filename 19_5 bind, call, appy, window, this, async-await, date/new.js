class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName
        this.salary = salary
    }
}

const heroPerson = new Person("Hero", "Balam", 2000)
console.log(heroPerson);

const friendLyPerson = new Person("Hero", "Kalam", 2500)
console.log(friendLyPerson);

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person("grand", "Papa", 1200)
console.log(oldPerson);