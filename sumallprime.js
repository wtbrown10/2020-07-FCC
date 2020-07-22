function sumPrimes(num) {
    let array = []
    for (let i = 1; i <= num; i++) {

        function isPrime(value) {
            for (var i = 2; i < value; i++) {
                if (value % i === 0) {
                    return false;
                }
            }
            return value > 1;
        }
        if (isPrime(i) == true) {
            array.push(i)
        }
    }
    console.log(array)
    var sum = array.reduce(function (a, b) { return a + b; }, 0)
    return sum
}

console.log(sumPrimes(10))
