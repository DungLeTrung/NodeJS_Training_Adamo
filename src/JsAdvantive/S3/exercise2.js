// a) Tạo mảng styles với các mục "Jazz" và "Blues" 
const styles = ["Jazz", "Blues"]

// b) Thêm "Rock-n-Roll" vào cuối
styles.push("Rock n Roll")

// c) Thay thế giá trị ở giữa bằng "Classics"
const middleIndex = Math.floor(styles.length / 2)
styles[middleIndex] = "Classics"

// d) Tách giá trị đầu tiên của mảng và hiển thị nó
const firstIndex = styles.shift()
console.log(firstIndex);

// e) Thêm trước Rap và Reggae vào mảng
styles.unshift("Reggae", "Rap");
console.log("Mảng styles sau khi cập nhật:", styles);