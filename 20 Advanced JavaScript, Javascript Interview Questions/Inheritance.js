class Player{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }
    getPlayerDetails(){
        return `${this.#name} is ${this.#age} years old`
    }
}

class Cricketer extends Player {
    #centuries
    constructor(name,age,centuries){
        super(name,age)
        this.#centuries=centuries
    }
    getcenturies(){
        return `I did ${this.#centuries} centuries`
    }
}

class Football extends Player {
    #goal
    constructor(name,age,goal){
        super(name,age)
        this.#goal=goal
    }

}


//const sakib=new Player("sakib",36) //from main inheritance
//console.log(sakib.getPlayerDetails()); 

//expected out put for line 32 is sakib is 36 years old


const sakib=new Cricketer("sakib",36,15)
console.log(sakib.getPlayerDetails());
console.log(sakib.getcenturies());