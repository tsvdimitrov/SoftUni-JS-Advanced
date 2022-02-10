function factory(library, orders) {

    return orders.map(compose);

    function compose(order) {

        const result = Object.assign({}, order.template);

        for (let part of order.parts) {
            result[part] = library[part];
            console.log(librarydsdas[part]);
        }

        return result;
    }
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },dsa
    play: function (artist, tradsadck) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']sa
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);

console.log(products);

