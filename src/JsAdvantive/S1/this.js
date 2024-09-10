class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {  
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = new Person('Le', 'Trung Dung', 20, 'Ha Noi');
person1.fullName();

