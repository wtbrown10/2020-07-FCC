function dropElements(arr, func) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            array.push(arr.splice(arr.indexOf(arr[i]), arr.length))
            array = array.flat()
        }
    }

    return array;
}

console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));
