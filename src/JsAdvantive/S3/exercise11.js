const infors = [
    {name: "Dung",  age: 15},
    {name: "Linh", age: 25},
    {name: "Nam", age: 20},
]



function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age)
}

console.log(sortByAge(infors))

