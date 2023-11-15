const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction)


function myFunction (item, index, arr){
    arr[index] = item * 10;
}
console.log(numbers)














//let sum = 0;
//const numbers = [65, 44, 12, 4];
//numbers.forEach(myFunction);

//function myFunction(item){
  //  sum += item;
//}
//console.log(sum)


//let arr = [2,10,5,4,9,7];

//let decend = arr.sort((a,b)= a>b? 1:-1);
//arr.sort(function(a, b){return b-a});

//console.log(arr);
//console.log(decend);

//const ages = [32, 33, 16, 40];

//let newAr = ages.filter (age => age>18)    

//function checkAdult (age){
    //return age >=18;
//}
//console.log(ages)
//console.log(newAr)


































//const numbers = [4, 9, 16, 25]

//const newArr = numbers.map(num => Math.sqrt(num))
//const newArr = numbers.map( Math.sqrt(num))
//const newArr = numbers.map(myFunction)
//function myFunction (num){
//return Math.sqrt(num)
//}
//console.log(newArr)