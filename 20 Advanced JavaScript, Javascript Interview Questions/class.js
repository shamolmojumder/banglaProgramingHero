// class Player{
//     constructor(id,name,skill){
//         this.id=id;
//         this.name=name;
//         this.skill=skill;
//     }
//     sayHello(){
//         return this.name+ " is my id " +this.id
//     }
// }

// const virat=new Player(10,"Virat koli","batsman",32,"india",2500,"test")
// console.log(virat);

// console.log(virat.sayHello());

class Human{
    constructor(name){
        this.name=name;
        this.arms=2;
        this.legs=2;
    }
}

class Baby extends Human{
    constructor(name){
        super(name);
        this.cute= true;
    }
    cry(){
        return "waa waa!"
    }
}

const monti=new Baby("monti")
console.log(monti.name);