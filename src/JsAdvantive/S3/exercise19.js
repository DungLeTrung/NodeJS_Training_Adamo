function find(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            count++
        }
    }
    return count;
} 

const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8]
console.log(find(arr))

//OUTPUT: 2