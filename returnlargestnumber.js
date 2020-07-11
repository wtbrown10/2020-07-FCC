let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function largestOfFour(arr) {

    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArray.push(Math.max(...arr[i]))
        }
    }
    console.log(Math.max(...newArray))
    // return arr;
}

largestOfFour(array)

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);