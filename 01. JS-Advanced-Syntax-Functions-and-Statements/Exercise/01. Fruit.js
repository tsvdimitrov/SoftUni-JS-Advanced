function fruit(fruit, weight, money) {

    let weightInKgs = weight / 1000;
    let moneyNeeded = weightInKgs * money;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80);