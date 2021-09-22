function townPopulation(input) {

    let towns = {};
    let line;

    while ((line = input.shift()) !== undefined) {
        let [town, pop] = line.split(" <-> ");
        pop = Number(pop);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = pop;
        } else {
            towns[town] += pop;
        }
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);