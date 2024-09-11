function decToBin(number) {
    let binary = "";
    while (number > 0) {
        binary = (number % 2) + binary;
        console.log(binary);
        number = Math.floor(number / 2);
        console.log(number);
    }
    return binary;
}

console.log(decToBin(15432))

//OUTPUT: 11110001001000