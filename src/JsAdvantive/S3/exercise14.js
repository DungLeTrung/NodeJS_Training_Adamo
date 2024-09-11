const a = [1, 2, 8, 4, 1, 3, 1, 8, 3]

function count(a) {
    const freq = {}

    for (let i of a){
        freq[i] = (freq[i] || 0) + 1
    }

    return Object.entries(freq).map(([key, value]) => ({[key]: value})) 
} 

console.log(count(a))

//OUTPUT: [ { '1': 3 }, { '2': 1 }, { '3': 2 }, { '4': 1 }, { '8': 2 } ]