function destroyer(arr) {
    console.log(arguments)
    console.log(Object.keys(arguments))

    let array = Object.keys(arguments)
    console.log(array)

    arr.filter(num => !arr.includes(array.join()))

    //  for (let i = 1; i < Object.keys(arguments).length; i++) {
    //    if(arr.includes(array.join())) {
    //      arr.splice(arr.indexOf(Objects.keys(arguments)[i]))
    //    }
    //  }

    console.log(arr);
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
