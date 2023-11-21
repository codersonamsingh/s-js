//let arr = [1,2,3,4,5,6]
//let sum = 0;
//for (x=0;x<arr.length;x++){
  //  sum = sum+arr[x]
//}
//console.log(sum)

//const arrya1 = ['a','b','c'];
//let Name = "Sonam"
//for (const i of Name){
  //  console.log(i);
//}

var person = {
  firstName: 'sonam',
  lastName: 'Doe',
  dob: '29-12-2345'
}

for(var prop in person){
  console.log(prop + ':' + person[prop]);
}