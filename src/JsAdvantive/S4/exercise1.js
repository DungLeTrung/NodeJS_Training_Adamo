let user = {
    name: "Alex",
    years: 28,
}

// a) Đọc giá trị thuộc tính name
const name = user.name
console.log(name)

// b) Đọc giá trị thuộc tính years
const age = user.years
console.log(age)

// c) Đọc giá trị thuộc tính isAdmin
const isAdmin = user?.isAdmin || false
console.log(isAdmin)