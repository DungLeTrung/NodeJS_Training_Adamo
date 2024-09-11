function reverse(number) {
    return String(number).split("").reverse().join("");
}

console.log(reverse(12345678))

//OUTPUT: 87654321