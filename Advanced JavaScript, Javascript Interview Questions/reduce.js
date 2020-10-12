const nums=[10,12,50,25]
console.log(...nums)
const sum=nums.reduce(func,500)
function func(acc,val){
  return acc+val
}
console.log(sum)
const max=nums.reduce((acc,val)=>{
  if(acc>val){
    return acc;
  }else{
    return val
  }
})
console.log('max num is ' +  max)
const max=nums.reduce((acc,val)=>{
  return Math.max(acc,val)
})
console.log(max)

const max=nums.reduce((acc,val)=>Math.max(acc,val))
console.log(max)


const prodcts=[
  {name:"pen",price:5,amount:2},
  {name:"book",price:25,amount:5},
  {name:"laptop",price:100,amount:1}
]

const sum=prodcts.reduce((acc,val)=>{
return acc+val.price*val.amount

},0)

console.log(sum)


