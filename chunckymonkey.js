function chunkArrayInGroups(arr, size) {

    let array = []
    console.log(arr)

    for (let i = 0; i < arr.length; i) {
        array.push(arr.slice(i, i + size))
        i += size
        console.log(array)
    }

}

// another solution

function chunkArrayInGroups(arr, size) {
    const chunkArray = [];
    let i = 0;
    while (i < arr.length) {
        chunkArray.push(arr.slice(i, i + size));
        i += size;
    }
    console.log(chunkArray);
}


chunkArrayInGroups(["a", "b", "c", "d", 'e'], 2);





chunkArrayInGroups(["a", "b", "c", "d"], 2);