const dealership = require('./03.dealership');
const { describe } = require('mocha');
const expect = require('chai').expect;

describe('test', function () {
    describe('newCarCostTest', function () {
        it('test with oldCar property', function () {
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.deep.equal(10000);
        });
        it('test without oldCar property', function () {
            expect(dealership.newCarCost('Trabant 1990', 1500)).to.deep.equal(1500);
        });
    });

    describe('carEquipmentTest', function () {
        it('test1', function () {
            let extrasArr = ['Seat Heat', 'Rims', 'Safety Belt'];
            let indexArr = [1, 2];

            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['Rims', 'Safety Belt']);
        });

        it('test2', function () {
            let extrasArr = ['Seat Heat', 'Rims', 'Safety Belt', 'Heating Mirrors', 'Bigger Engine'];
            let indexArr = [0, 2, 4];

            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['Seat Heat', 'Safety Belt', 'Bigger Engine']);
        });
    });

    describe('euroCategoryTest', function () {
        it(`test with higher than euro 4 category`, function () {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('test with euro 4 category', function () {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('test with euro 3 category', function () {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        })
    });
});