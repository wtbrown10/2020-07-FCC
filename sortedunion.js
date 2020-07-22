function uniteUnique(arr) {
    // console.log(Object(arguments).length)
    let array = []

    for (let i = 0; i < Object(arguments).length; i++) {
        array.push(Object(arguments)[i])
    }
    // console.log(array)

    let newArray = array.flat()

    // console.log(newArray)

    newArray = Array.from(new Set(newArray))

    return newArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));