function biggerHalf(input) {

    return input.sort((a, b) => a - b).slice(input.length / 2);
}
console.log(biggerHalf([4, 7, 2, 5]));