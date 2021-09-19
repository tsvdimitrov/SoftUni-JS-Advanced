function wordUppercase(input) {

    let words = input
        .toUpperCase()
        .split(/[\W]+/)
        .filter((w) => w.length > 0)
        .join(', ');

    console.log(words);
}
wordUppercase('Hi, how are you?');