function sumFibs(num) {
    let array = [1]
    let newArray = []
    let a = 1, b = 0, temp
    let reducer = (accumulator, currentValue) => accumulator + currentValue

    for (let i = 1; i <= num; i += temp) {
        temp = a
        a = a + b
        b = temp

        console.log(i)

        if (i % 2 != 0) {
            array.push(i)
        }
    }
    console.log(array)
    newArray = array.reduce(reducer)
    return newArray;
}
console.log(sumFibs(10));