function sort(arr) {
    return arr.sort((a, b) => b - a)
}

let arr = [5, 2, 1, -10, 8];
sort(arr)
console.log(arr); 

//OUTPUT: [8, 5, 2, 1, -10]