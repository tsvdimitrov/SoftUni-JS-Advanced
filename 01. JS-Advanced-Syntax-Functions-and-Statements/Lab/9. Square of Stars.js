function squareOfStars(input) {

    let result = "";
    for (let i = 0; i < input; i++) {
        result += "* ";
        for (let j = 1; j < input; j++) {
            result += "* ";
        }
        result += "\n";
    }
    console.log(result);
}
squareOfStars(5);