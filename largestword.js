function longestWord(str) {
    let word = str.split(' ')
    let longestWord = 0

    for (let i = 0; i < word.length; i++) {

        if (word[i].length > longestWord) {
            longestWord = word[i].length
        }
    }
    console.log(longestWord)

}

longestWord('The Quick Brown Fox Jumped Over wlemogar the lazy dog')