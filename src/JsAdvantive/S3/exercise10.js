const infors = [
    {name: "Dung", surname: "Le", id: 1},
    {name: "Linh", surname: "Nguyen", id: 2},
    {name: "Nam", surname: "Hoang", id: 3},
]

//Dùng map để lặp qua phần tử và tạo ra mảng mới
let users = infors.map(item => ({
        id: item.id,
        fullName: `${item.name} ${item.surname}`
}))

console.log(users)

/*[
    { id: 1, fullName: 'Dung Le' },
    { id: 2, fullName: 'Linh Nguyen' },
    { id: 3, fullName: 'Nam Hoang' }
  ]*/