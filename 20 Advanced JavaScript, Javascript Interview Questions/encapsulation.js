// const sakib={
//     birthday:"1987-03-24",
//     montylySalary:200000,
//     noOfMonths:12,
//     calculate_age() {
//         const diff_ms=Date.now()-new Date(this.birthday).getTime();
//         const age_dt=new Date(diff_ms);

//         return Math.abs(age_dt.getUTCDate()-1970);
//     },
//     getSalary() {
//         return (this.montylySalary*this.noOfMonths).toLocaleString();
//     }
// }
class Player {
  #name;
  #birthday;
  #montylySalary;
  #noOfMonths;
  constructor(name, birthday, montylySalary, noOfMonths) {
    this.#name = name;
    this.#birthday = birthday;
    this.#montylySalary = montylySalary;
    this.#noOfMonths = noOfMonths;
  }
//  it will naver accessable when # use before any vriable or any function in class 
  #calculate_age() {
    const diff_ms = Date.now() - new Date(this.#birthday).getTime();
    const age_dt = new Date(diff_ms);
    console.log(this.#name);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#montylySalary * this.#noOfMonths).toLocaleString();
  }
}

const shamol = new Player("Shamol", "1998-11-01", 15000, 6);
const dipu = new Player("Dipu", "1997-11-01", 12000, 2);

// console.log(shamol.calculate_age());
console.log(shamol.getSalary());

// console.log(dipu.calculate_age());
// console.log(dipu.getSalary());
