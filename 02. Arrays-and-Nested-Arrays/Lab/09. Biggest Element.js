function biggestElement(input) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j <= input.length; j++) {
            if (input[i][j] > maxNumber) {
                maxNumber = input[i][j];
            }
        }
    }

    console.log(maxNumber);
}
biggestElement([[20, 50, 10],
[8, 33, 145]]);