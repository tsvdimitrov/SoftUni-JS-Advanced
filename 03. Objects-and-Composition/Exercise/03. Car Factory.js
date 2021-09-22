function carFactory(input) {

    function getEngine(power) {
        const engines =
            [
                { power: 90, volume: 1800 },
                { power: 120, volume: 2400 },
                { power: 200, volume: 3500 }
            ]
        return engines.find(el => el.power >= power)
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        }
    }

    function getWheels(wheelSize) {
        let wheel = Math.floor(wheelSize) % 2 === 0 ? Math.floor(wheelSize) - 1 :
            wheelSize;


        return [wheel, wheel, wheel, wheel]
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));