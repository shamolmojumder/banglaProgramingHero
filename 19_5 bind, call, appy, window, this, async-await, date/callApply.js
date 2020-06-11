const normalPerson = {
    firstName: "Shamol",
    lastName: "Mojumder",
    salary: 15000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'hero',
    lastName: "Balam",
    salary: 25000,

}
const friendlyPerson = {
    firstName: "Hero",
    lastName: "Goalm",
    salary: 15000,

}

// normalPerson.chargeBill()
const heroChargeBil = normalPerson.chargeBill.bind(heroPerson);
heroChargeBil(2000)


const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(14500)
console.log(friendlyPerson.salary);