function magicMatrices(input) {

    let rowSum = [];
    let colSum = [];

    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        let sum = row.reduce((acc, val) => (acc + val), 0);
        rowSum.push(sum);
    }

    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        let newRow = [];

        for (let j = 0; j < input.length; j++) {
            let index = input.length - 1 - j;
            newRow.push(input[index][i]);
        }
        let sum = newRow.reduce((acc, val) => (acc + val), 0);
        colSum.push(sum);
    }
    
    return rowSum.concat(colSum).every((el, i, arr) => el === arr[0]);
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));