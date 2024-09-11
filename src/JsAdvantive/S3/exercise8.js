function camelize(str) {
    // /_./g cho phép tìm kiếm tất cả các cặp gồm dấu gạch ngang (-) và một kí tự bất kì (.)
    return str.replace(/-./g, first => first[1].toUpperCase());
}

console.log(camelize("background-color"))
console.log(camelize("background-image"))
console.log(camelize("-webkit-transition"))

//OUTPUT: backgroundColor
//        backgroundImage
//        WebkitTransition