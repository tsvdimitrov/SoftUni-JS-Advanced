const { expect } = require('chai');
const pizzUni = require(`./03.pizza`);

describe('Tests', function () {

    describe('MakeAnOrderTests', function () {
        it('test with no Pizza Obj', function () {
            let pizza1 = {};
            expect(() => pizzUni.makeAnOrder(pizza1)).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        });
        it('test with pizza and drink', function () {
            let pizza2 = { orderedPizza: 'Muchacho', orderedDrink: 'Cola' };
            expect(pizzUni.makeAnOrder(pizza2)).to.equal(`You just ordered Muchacho and Cola.`);
        });
        it('test with pizza only', function () {
            let pizza3 = { orderedPizza: 'Fantacho' };
            expect(pizzUni.makeAnOrder(pizza3)).to.equal(`You just ordered Fantacho`);
        });
        it('test with drink only', function () {
            let pizza4 = { orderedDrink: 'Fanta' };
            expect(() => pizzUni.makeAnOrder(pizza4)).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
        });
    })

    describe('getRemainingWorkTests', function () {
        it('test with 1 preparing and 1 ready pizza\'s', function () {
            let order1 = [{ pizzaName: 'Casablanca', status: 'preparing' }, { pizzaName: 'Luchianno', status: 'ready' }];
            expect(pizzUni.getRemainingWork(order1)).to.equal(`The following pizzas are still preparing: Casablanca.`);
        })
        it('test with 2 ready pizza\'s', function () {
            let order2 = [{ pizzaName: 'Mustachio', status: 'ready' }, { pizzaName: 'Gaspacho', status: 'ready' }];
            expect(pizzUni.getRemainingWork(order2)).to.equal('All orders are complete!');
        })
        it('test with 2 preparing pizza\'s', function () {
            let order3 = [{ pizzaName: 'Havana', status: 'preparing' }, { pizzaName: 'Tropicana', status: 'preparing' }];
            expect(pizzUni.getRemainingWork(order3)).to.equal(`The following pizzas are still preparing: Havana, Tropicana.`);
        })
    });

    describe('orderTypeTest', function () {
        it('test with delivery type of order', function () {
            expect(pizzUni.orderType(20, 'Delivery')).to.deep.equal(20);
        });

        it('test with Carry Out type of order', function () {
            expect(pizzUni.orderType(20, 'Carry Out')).to.deep.equal(18);
        });
    });
});