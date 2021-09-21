function sortBy2Criteria(arr) {

    return arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;

    }).join("\n");
}
console.log(sortBy2Criteria(['alpha',
    'beta',
    'gamma']));