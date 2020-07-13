function booWho(bool) {

    let check = typeof bool

    if (check === "boolean") {
        return true
    } else if (check != "boolean") {
        return false
    }



}

console.log(booWho([1, 2, 3]));
