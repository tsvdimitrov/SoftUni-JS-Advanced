function heroes() {

    function hero(name, rss, attack, message) {
        return {
            name,
            message,
            health: 100,
            [rss]: 100,
            [attack]: function (msg = "") {
                console.log(this.message + msg)
                this[rss] -= 1
            },
        }
    }

    return {
        mage: n => new hero(n, "mana", `cast`, `${n} cast `),
        fighter: n => new hero(n, "stamina", `fight`, `${n} slashes at the foe!`),
    }
}
let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);