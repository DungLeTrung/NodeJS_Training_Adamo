const a = 5;
const b = 4;

const change = (a, b) => {
    a = a + b; //9
    b = a - b //5
    a = a - b; //4
    return [a, b]
}

console.log(change(a, b))