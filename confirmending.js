function confirmEnding(str, target) {
    // let word = str.split('')


    // let lastLetter = Boolean(word[word.length - 1] === target)

    lastLetter = str.endsWith(target)

    return lastLetter;
}

console.log(confirmEnding("Bastian", "n"));
