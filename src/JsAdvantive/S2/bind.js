class SinhVien {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    fullName() {
      console.log(`Tên đầy đủ: ${this.firstName} ${this.lastName}`);
    }
  }
  
  const sinhVienA = new SinhVien("Le", "Trung Dung");
  
  const fullname = sinhVienA.fullName.bind(sinhVienA);
  
  fullname();