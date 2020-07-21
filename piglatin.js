function translatePigLatin(str) {
    let newWord = ""
    let word = str.split('')
    let regex = /^[(a|e|i|o|u)]/
    let regex1 = /[(a|e|i|o|u)]/
    let match = regex.exec(str)
    let match1 = regex1.exec(str)
    if (match) {
        newWord = str + "way"
    } else {
        console.log(str.indexOf(match1))
        word.push(word.splice(0, str.indexOf(match1)))

        console.log(word.flat())
        newWord = word.flat().join('') + "ay"
    }
    return newWord;
}
console.log(translatePigLatin("glove"));