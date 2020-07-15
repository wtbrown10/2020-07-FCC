function sumAll(arr) {

    let large = (Math.max(...arr))
    let small = (Math.min(...arr))
    let count = 0

    for (let i = small; i <= large; i++) {
        count += i
    }

    return count;
}

console.log(sumAll([4, 1]));