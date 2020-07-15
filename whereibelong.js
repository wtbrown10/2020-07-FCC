function getIndexToIns(arr, num) {
    let array = arr.sort()
    let number = 0
    let numberWeNeed = 0

    for (let i = 0; i < array.length; i++) {
        if (num === array[i]) {
            console.log(array[i], '.')
            numberWeNeed = array.indexOf(array[i])
            i = array.length
        } else if (num > Math.max(...array)) {
            numberWeNeed = array.indexOf(Math.max(...array)) + 1
        } else if (num < array[i]) {
            number = array[i]
            numberWeNeed = array.indexOf(array[i])
            i = array.length
        }
        console.log(numberWeNeed, "..")
    }

    console.log(number)
    return numberWeNeed
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 55))