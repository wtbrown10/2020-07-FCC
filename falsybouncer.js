function bouncer(arr) {
    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        let check = Boolean(arr[i])
        if (check === false) {
            arr.slice(arr[i], 1)
        } else if (check === true) {
            newArray.push(arr[i])
        }
    }

    return newArray;
}

console.log(bouncer([7, "ate", "", 0, false, 9]));
