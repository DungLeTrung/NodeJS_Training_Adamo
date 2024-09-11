function find(arr) {
    let maxNumber = arr[0]
    let position = []
    for (let i = 0; i < arr.length; i++) {
        if (maxNumber < arr[i]) { 
            maxNumber = arr[i];
        }
    }
    for (let i = 0; i < maxNumber; i++) {
        if(maxNumber === arr[i]) {
            position.push(i + 1)
        }
    }
    console.log("Max Number: ", maxNumber)
    console.log("Position: ", position)
}

let array = [1, 5, 6, 8, 5, 9, 2, 9]
find(array)

//OUTPUT: Max Number: 9
//OUTPUT: Position: [6, 8]

