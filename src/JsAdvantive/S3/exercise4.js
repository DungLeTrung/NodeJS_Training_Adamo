function filterRangeInPlace(arr, a, b) {
    // Sử dụng phương thức splice() để xóa các phần tử không thỏa mãn điều kiện
    let i = 0;
    while (i < arr.length) {
      if (arr[i] < a || arr[i] >= b) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

//OUTPUT: [3, 1]