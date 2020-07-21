function pairElement(str) {
    let array = []
    let split = str.split('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'G') {
            array.push(['G', 'C'])

        } else if (str[i] == 'C') {
            array.push(['C', 'G'])

        } else if (str[i] == 'A') {
            array.push(['A', 'T'])

        } else if (str[i] == 'T') {
            array.push(['T', 'A'])

        }
    }
    return array;
}

console.log(pairElement("ATCGA"));