function greatestCommonDivisor(first, second) {

    first = Math.abs(first);
    second = Math.abs(second);

    while (second) {
        let current = second;
        second = first % second;
        first = current;
    }
    console.log(first);
}
greatestCommonDivisor(15, 5);