class BetterArray{
    #items;
    constructor(){
        this.#items=[];
    }
    getItems(){
      return [...this.#items];
    }
    addItem(item){
        this.#items.push(item);
    }
    removeItem(itemToDelete){
        this.#items=this.#items.filter((item)=>item!==itemToDelete)
    }
    modifyItem(itemToChange,newValue){
        const index=this.#items.indexOf(itemToChange);
        if(index!==-1){
            this.#items[index]=newValue;
        }
    }
}

const array=new BetterArray();
array.addItem("i love bd")
array.addItem("i love india")
console.log(array.getItems());
array.removeItem("i love bd")
console.log(array.getItems());
array.modifyItem("i love india","I love USA")
console.log(array.getItems());