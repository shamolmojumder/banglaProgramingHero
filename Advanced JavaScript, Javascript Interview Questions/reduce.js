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
