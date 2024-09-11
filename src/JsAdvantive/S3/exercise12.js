function getAverageAge(users) {
    const totalAge =  users.reduce((total, item) => (total + item.age), 0)
    return totalAge / users.length;
}

const infors = [
    {name: "Dung",  age: 15},
    {name: "Linh", age: 25},
    {name: "Nam", age: 20},
]

console.log(getAverageAge(infors));

//OUTPUT: 20