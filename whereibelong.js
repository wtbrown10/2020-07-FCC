function getIndexToIns(arr, num) {
    let array = arr.sort()
    let number = 0
    let numberWeNeed = 0

    for (let i = 0; i < array.length; i++) {
        if (num >= array[i]) {
            number = array[i]
            console.log(number)
        }
        numberWeNeed = array.indexOf(array[i])
    }


    console.log(numberWeNeed)


    // return num;
}

console.log(getIndexToIns([40, 60], 50));
