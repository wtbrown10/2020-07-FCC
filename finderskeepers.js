function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            num = arr[i];
            i = arr.length
        } else if (i === arr.length - 1 && num === 0) {
            num = undefined
        }
    }

    return num;
}

console.log(findElement([1, 5, 3, 7, 9, 11], num => num % 2 === 0));