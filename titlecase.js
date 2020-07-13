function titleCase(str) {

    let word = str.toLowerCase().split(' ')


    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1)
    }

    let newstr = word.join(' ')

    return newstr
}


console.log(titleCase("I'm a little tea pot"));
