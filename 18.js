const numbers = [4, 9, 16, 25]

//const newArr = numbers.map(num => Math.sqrt(num))
//const newArr = numbers.map( Math.sqrt(num))
const newArr = numbers.map(myFunction)
function myFunction (num){
return Math.sqrt(num)
}
console.log(newArr)