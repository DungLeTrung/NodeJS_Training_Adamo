const arr = [-6, 2, 1, 7, 3, 9]

function sort(arr) {
    return arr.sort((a, b) => b - a);
}

//Dùng slice() để sao chép mảng
const arr1 = arr.slice();
sort(arr1);
console.log(arr);
console.log(arr1);

//arr: [ -6, 2, 1, 7, 3, 9 ]
//arr1: [ 9, 7, 3, 2, 1, -6 ]