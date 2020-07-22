function convertHTML(str) {
    let regex = /&|<|"|'|>/
    let match = regex.exec(str)
    let newStr = ''

    if (Boolean(match) && str.includes('&')) {
        newStr = str.replace(/&/g, '&amp;')
    } else if (Boolean(match) && str.includes('<>')) {
        newStr = str.replace(/<>/g, '&lt;&gt;')
    } else if (Boolean(match) && str.includes('<')) {
        newStr = str.replace(/</g, '&lt;')
    } else if (Boolean(match) && str.includes('>')) {
        newStr = str.replace(/>/g, '&gt;')
    } else if (Boolean(match) && str.includes('"')) {
        newStr = str.replace(/"/g, '&quot;')
    } else if (Boolean(match) && str.includes("'")) {
        newStr = str.replace(/'/g, '&apos;')
    } else if (Boolean(match) == false) {
        return str
    }
    return newStr;
}

console.log(convertHTML("<>"));
