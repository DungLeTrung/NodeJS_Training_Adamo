const object1 = {
    fullName: 'Anonystick',
    occupation: 'Software Developer',
    age: 31,
    website: 'http://anonystick.com'
}

const fullName = object1.fullName
const occupation = object1.occupation
const website = object1.website
const age = object1.age

// a) In thông tin trên 1 dòng
console.log(`${fullName} ${occupation} ${website} ${age}`)

// b) In thông tin trên nhiều dòng
console.log("Full name:", fullName);
console.log("Occupation:", occupation);
console.log("Age:", age);
console.log("Website:", website);

// c) Tạo 1 object2 với thông tin giống object 1 // Rest
const object2 = {...object1}
console.log(object2)

// d) Tạo object3 thay đổi fullname là "Tom" và age là "25" // Spread
const object3 = {...object1, fullName: "Tom", age: 25}
console.log(object3)