function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let strSplit = str.split('')
    let alphaSplit = alphabet.split('')
    let firstLetter = alphabet.indexOf(str[0])
    let lastLetter = str.length + 1


    if (alphabet == str) {
        return undefined
    } else {
        let word = alphaSplit.splice(firstLetter, lastLetter)
        console.log(word)
        let missingLetter = word.filter(letter => !strSplit.includes(letter)).join()

        return missingLetter;
    }
}
console.log(fearNotLetter("abce"));
