function frankenSplice(arr1, arr2, n) {
    let newArray = []

    newArray.push(...arr2.slice(0, arr2.length))

    let value = arr1.slice(0, arr1.length)

    newArray.splice(n, 0, ...value)

    return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
