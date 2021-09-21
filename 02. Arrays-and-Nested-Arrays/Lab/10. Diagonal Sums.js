function diagonalSums(input) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal += input[i][i];
        secondDiagonal += input[i][input.length - i - 1];
    }

    console.log(firstDiagonal, secondDiagonal);
}
diagonalSums([[20, 40],
[10, 60]]
);