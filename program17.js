const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
person.name = function(){
    return this.firstName + " " + this.lastName;
}
let p = person;
console.log(p.name());
console.log(p.fullName());
let message = "Hello, World!";
let x = message.toUpperCase();
console.log(x);