function negativePositiveNumber(input) {

    let result = [];

    for (const num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result.join("\n");
}
console.log(negativePositiveNumber([7, -2, 8, 9]));