function processOddPositions(input) {
    
    let newArray = [];

    for (let i = 1; i < input.length; i += 2) {
        newArray.push(input[i]);
    }

    newArray = newArray.map(a => a * 2).reverse().join(" ");

    return newArray;
}
console.log(processOddPositions([10, 15, 20, 25]));