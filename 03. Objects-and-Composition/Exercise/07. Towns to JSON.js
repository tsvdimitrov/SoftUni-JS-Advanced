function townsToJSON(input) {

    let headings = dropIntoParts(input[0]);
    let rows = input.slice(1)
        .map(row => dropIntoParts(row)
            .reduce((acc, curr, i) => {
                acc[headings[i]] = curr;
                return acc;
            }, {}));

    return JSON.stringify(rows);

    function dropIntoParts(str) {
        return str.split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(x => isNaN(Number(x)) ? x : Number(Number(x).toFixed(2)));
    }
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));