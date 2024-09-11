
function getPrice(minute) {
    let defaultPrice = 25000
    let totalPrice = 0;
    if(minute <= 50) {
        totalPrice = defaultPrice + (minute * 600);
    } else if (50 < minute <= 200) {
        totalPrice = defaultPrice + (50 * 600) + ((minute - 50) * 400);
    } else if (minute > 200){
        totalPrice = defaultPrice + (50 * 600) + (150 * 400) + ((minute - 200) * 200);
    }
    return totalPrice;
}

console.log(getPrice(37))

