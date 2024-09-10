let options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true,
}

const width = options.size.width;
const height = options.size.height;
const [item1, item2] = options.items
const extra = options.extra

console.log(width)
console.log(height)
console.log(item1)
console.log(item2)
