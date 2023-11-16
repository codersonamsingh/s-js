let person = {
    firstName:'Sonam',
    lastName:"singh",
    age:22,
    fullName: function(){return this.firstname + " " + this.lastname}
    //'eye colour' : "black"
}
console.log(person.fullName())