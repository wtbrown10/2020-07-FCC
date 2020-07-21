function myReplace(str, before, after) {
    let regex = /^[A-Z]/
    let splitWord = after.split('')
    let match = regex.exec(before)
    let word = ''

    if (Boolean(match) == true) {

        let letter = splitWord.shift().toUpperCase()

        splitWord.unshift(letter);
        splitWord = splitWord.join('')

        word = str.replace(before, splitWord)

    } else {

        word = str.replace(before, after)

    }
    return word;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));