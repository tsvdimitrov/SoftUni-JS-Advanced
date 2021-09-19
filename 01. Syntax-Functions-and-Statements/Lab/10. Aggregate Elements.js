function aggregateElements(input) {

    let sum = input.reduce((prev, next) => prev + next);
    let inverseSum = 0;
    input.forEach((x) => inverseSum += 1 / x);
    let str = input.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(str);
}
aggregateElements([2, 4, 8, 16]);