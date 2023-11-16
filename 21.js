let person = {
    firstname:'sonam',
    lastname:"singh",
    age:22,
    fullName: function(){this.firstname + " " + this.lastname}
    //'eye colour' : "black"
}
console.log(person.fullName)