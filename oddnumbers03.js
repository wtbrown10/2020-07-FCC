
// first version of programm console.log the word "odd" for every odd number encountered.
// second version console the total number number (int) of odd elements
// third console log the number occourences  is each sub array (tricky, tricky)
// fourth console log total sum of all the odd numbers

let arrays = [[1, 8, 4, 1], [6, 2, 7, 12], [21, 104, 19, 200, 7, 9]];


function oddNumbers(arr) {
    let count = 0
    let count2 = 0
    let arrayOddCount = []

    for (let i = 0; i < arr.length; i++) {
        count = 0
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] % 2 != 0) {
                count += 1

            }

        }
        console.log(count)
    }
}

oddNumbers(arrays)
