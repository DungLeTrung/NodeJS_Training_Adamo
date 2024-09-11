
function transform(numbers, callback) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      const transformedValue = callback(numbers[i]);
      result.push(transformedValue);
    }
    return result
}

function double(num) {
    return num * 2
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = transform(numbers, double);
console.log(doubledNumbers);

//OUTPUT: [2, 4, 6, 8]