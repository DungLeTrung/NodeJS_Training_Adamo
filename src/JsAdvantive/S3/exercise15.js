const a = [1, 2, 8, 4, 1, 3, 1, 8, 3]

function count(arr) {
    const freq = {}

    for (let i of arr){
        freq[i] = (freq[i] || 0) + 1
    }

    let maxCount = 0;
    let mostFreq;

    for (let j in freq){
        if(freq[j] > maxCount) {
            maxCount = freq[j];
            mostFreq = j;
        }
    }
    return mostFreq
}

console.log(count(a))

//OUTPUT: 1