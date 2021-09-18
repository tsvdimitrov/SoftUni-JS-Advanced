function stringLength(firstArgument, secondArgument, thirdArgument) {
    let firstArgumentLength = firstArgument.length;
    let secondArgumentLength = secondArgument.length;
    let thirdArgumentLength = thirdArgument.length;

    let sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;

    console.log(sumLength);
    console.log(Math.floor(sumLength / 3));
}


stringLength('chocolate', 'ice cream', 'cake');