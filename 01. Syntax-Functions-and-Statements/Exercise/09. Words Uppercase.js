function wordsUppercase(input) {

    let words = input
        .toUpperCase()
        .split(/[\W]+/)
        .filter((w) => w.length > 0)
        .join(', ');

    console.log(words);
}
wordsUppercase('Hi, how are you?');