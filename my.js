// first
var user = {
    name: "John",
    surname: "Mike",
};

user.name = "Peter";
console.log(user.name + user.surname);
delete user.name;
console.log(user.name + user.surname);

//second
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var count = fruit.apple + fruit.pear + fruit.peach;
console.log(count);
