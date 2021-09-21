function increasingSubsequence(input) {

    input = input.map(Number);
    let result = [];
    let biggest = input[0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggest) {
            result.push(input[i]);
            biggest = input[i];
        }
    }
    return result;
}
console.log(increasingSubsequence([1,
    2,
    3,
    4]));