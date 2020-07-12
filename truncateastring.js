function truncateString(str, num) {
    let end = '...'
    let truncate = str.slice(0, num)

    return truncate + end
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

