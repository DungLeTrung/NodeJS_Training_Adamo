class SinhVien {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    studying(subject) {  
        console.log(`${this.firstName} ${this.lastName} đi học ${subject}`);
    }
    working() {
    }
}

const sinhVien1 = new SinhVien('Le', 'Trung Dung', 20, 'Ha Noi');
const sinhVien2 = new SinhVien('Nguye', 'Thi Dieu Linh', 21, 'Ho Chi Minh');

sinhVien1.studying("Toán")
sinhVien2.studying("Văn")

//OUTPUT: Le Trung Dung đi học Toán
//        Nguyen Thi Dieu Linh đi học Văn
