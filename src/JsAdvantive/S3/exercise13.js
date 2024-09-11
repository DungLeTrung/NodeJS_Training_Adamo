function isPerfect(num) {
    if(num < 0) 
        return false;
    
    let count = 0;
    for(let i = 0; i < num; i++) {
        if(num % i === 0){
            count += i;
        }
    }
    return count === num
}

let check = isPerfect(6)

if(check) {
    console.log("This is a perfect number")
} else {
    console.log("This is not a perfect number")
}