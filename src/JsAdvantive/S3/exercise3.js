function filterRange(arr, a, b) {
    // Sử dụng phương thức filter() để lọc các phần tử thỏa mãn điều kiện
    return arr.filter(item => item >= a && item <= b);
  }

const arrs = [1, 2, 3, 4, 5, 6]
const filteredNumbers = filterRange(arrs, 2, 5);
console.log(filteredNumbers)

//OUTPUT: [2, 3, 4, 5]