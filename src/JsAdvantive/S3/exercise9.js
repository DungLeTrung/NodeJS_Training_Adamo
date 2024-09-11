let john = {name: 'John', age: 25};
let pete = {name: 'Peter', age: 30};
let mary = {name: 'Mary', age: 28};

let users = [john, pete, mary]

//Dùng vòng map để lặp qua tất cả users
let names = users.map((item) => item.name)
console.log(names)

//OUTPUT: [ 'John', 'Peter', 'Mary' ]