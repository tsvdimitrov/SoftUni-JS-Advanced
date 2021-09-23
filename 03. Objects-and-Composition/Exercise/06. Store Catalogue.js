function solve(input) {

    let obj = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        obj[product] = price;
    }

    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    let letter = sorted[0][0].charAt(0);
    let counterOne = 1;

    for (let [key, value] of sorted) {
        if (letter !== key[0]) {
            letter = key[0];
            console.log(letter);
        } else if (letter === key[0] && counterOne === 1) {
            console.log(letter);
            counterOne++;
        }
        console.log(`  ${key}: ${value}`);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);