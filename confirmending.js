function confirmEnding(str, target) {

    let word = str.split('')
    // console.log(word)
    // console.log(word.length - 1)
    // console.log(str.substr(word.length - target.length))
    if (str.substr(word.length - target.length) == target) {
        return true
    } else {
        return false
    }




}

console.log(confirmEnding("He has to give me a new name", "name"));