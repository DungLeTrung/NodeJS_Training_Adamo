const arr = [
    {id: 15}, {id: -1}, {id: 0}, {id: 3}, {id: 12}, {id: null}, {id: NaN}, {id: undefined}
]

//filter các object có id là số dương lớn hơn 0
function filter(arr) {
    return arr.filter(item => typeof item.id === 'number' && item.id > 0)
}

console.log(filter(arr))

//OUTPUT: [ { id: 15 }, { id: 3 }, { id: 12 } ]